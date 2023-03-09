const distances = `
float sdSphere(vec3 p, float radius) {
    return (length(p) - radius);
}

float sdRectangle(vec3 p, vec3 b)
{
    vec3 d = abs(p) - b;
    return length(max(d, 0.0)) + min(max(d.x, max(d.y, d.z)), 0.0);
}

float sdGyroid(vec3 p, float scale, float bias) {
    p *= scale;
    return abs(dot(sin(p), cos(p.zxy))) / scale - bias;
}
`

const funcitons = `
float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
}
`

const simplexNoise = `
//	Simplex 3D Noise
//	by Ian McEwan, Ashima Arts

vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float simplex_noise3(vec3 v) {
  const vec2  C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

// x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0 );
  vec4 p = permute(
    permute(
      permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) +
      i.y + vec4(0.0, i1.y, i2.y, 1.0)
    ) + i.x + vec4(0.0, i1.x, i2.x, 1.0)
  );

// Gradients
// (N * N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0 / 7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww ;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

// Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

float pbm_simplex_noise3(vec3 point) {
  int OCTAVES = 5;

  float normalize_vector = 0.0;
  float value = 0.0;
  float scale = 0.5;

  for(int i = 0; i < OCTAVES; i++) {
    value += simplex_noise3(point) * scale;
    normalize_vector += scale;
    point *= 2.0;
    scale *= 0.5;
  }

  return value / normalize_vector;
}

float pbm_simplex_noise3_q(vec3 point, float quality) {
  int OCTAVES = 0;

  if(0.0 <= quality && quality <= 0.125) {
    OCTAVES = 0;
  }

  if(0.125 < quality && quality <= 0.25) {
    OCTAVES = 1;
  }

  if(0.25 < quality && quality <= 0.375) {
    OCTAVES = 2;
  }

  if(0.375 < quality && quality <= 0.5) {
    OCTAVES = 3;
  }

  if(0.5 < quality && quality <= 0.625) {
    OCTAVES = 4;
  }

  if(0.625 < quality && quality <= 0.75) {
    OCTAVES = 5;
  }

  if(0.75 < quality && quality <= 0.875) {
    OCTAVES = 6;
  }

  if(0.875 < quality && quality <= 1.0) {
    OCTAVES = 7;
  }

  float normalize_vector = 0.0001;
  float value = 0.0;
  float scale = 0.5;

  for(int i = 0; i < OCTAVES; i++) {
    value += simplex_noise3(point) * scale;
    normalize_vector += scale;
    point *= 2.0;
    scale *= 0.5;
  }

  return value / normalize_vector;
}
`

export const vertexShaderSource = `#version 300 es
precision mediump float;

layout(location = 0) in vec3 position;

void main()	{			
    gl_Position = vec4(position, 1.0);
}`

export const fragmentShaderSource = `#version 300 es
precision mediump float;

uniform vec2 resolution;
uniform vec3 cameraPosition;
uniform mat4 cameraWorldMatrix;
uniform mat4 cameraWorldMatrixInverse;
uniform mat4 cameraProjectionMatrix;
uniform mat4 cameraProjectionMatrixInverse;
uniform sampler2D textureMap;

out vec4 FragColor;

#define EPSILON 1e-6
#define PI  3.14159265358
#define TAU 6.28318530718

#define MAX_STEPS 100
#define MAX_DIST 100.0
#define SURF_DIST 0.002 // hit distance

#define R(p, a) p = cos(a) * p + sin(a) * vec2(p.y, -p.x)

const float uvScale = 2.0;
const float colorUvScale = 0.1;
const float furDepth = 0.2;
const int furLayers = 64;
const float rayStep = furDepth*2.0 / float(furLayers);
const float furThreshold = 0.4;
const float shininess = 50.0;

${funcitons}
${simplexNoise}
${distances}

float sceneDistance(vec3 p) {
  return sdRectangle(p, vec3(1.0, 0.2, 2.0));
}

float furDensity(vec3 pos)
{
  vec4 tex = texture(textureMap, pos.xz * uvScale);

  float density = smoothstep(furThreshold, 1.0, tex.x);
  
  float r = pos.y;
  float t = (r - (1.0 - furDepth)) / furDepth;
  
  // fade out along length
  float len = tex.y;
  density *= smoothstep(len, len-0.2, t);

  return density;	
}

// calculate normal from density
vec3 furNormal(vec3 pos, float density)
{
    float eps = 0.01;
    vec3 n;
	vec2 uv;
    n.x = furDensity(vec3(pos.x+eps, pos.y, pos.z)) - density;
    n.y = furDensity(vec3(pos.x, pos.y+eps, pos.z)) - density;
    n.z = furDensity(vec3(pos.x, pos.y, pos.z+eps)) - density;
    return normalize(n);
}

vec3 furShade(vec3 pos, vec2 uv, vec3 ro, float density)
{
	vec3 color = texture(textureMap, pos.xz * colorUvScale).xyz;
	return color;
}	

vec4 rayMarch(vec3 ro, vec3 rd) {
	vec4 c = vec4(0.0);
  vec3 p = ro;
  bool hit = false;
  float dO = 0.0;

  for (int i = 0; i < MAX_STEPS; i++) {
    p = ro + rd * dO;
    float dS = sceneDistance(p);
    dO += dS;
    if (dO > MAX_DIST) {
      hit = false;
      break;
    }
    if (abs(dS) < SURF_DIST) {
      hit = true;
      break;
    }
  }

  if (hit) {
    // ray-march into volume
    for(int i = 0; i < furLayers; i++) {
      vec4 sampleCol;
      vec2 uv;
      sampleCol.a = furDensity(p);
      if (sampleCol.a > 0.0) {
        sampleCol.rgb = furShade(p, uv, ro, sampleCol.a);

        // pre-multiply alpha
        sampleCol.rgb *= sampleCol.a;
        c = c + sampleCol * (1.0 - c.a);
        if (c.a > 0.95) break;
      }
      
      p += rd * rayStep;
    }
  }
	
	return c;
}

vec3 GetNormal(vec3 p) {
    float d = sceneDistance(p);
    vec2 e = vec2(0.001, 0.0);
    vec3 n = d - vec3(
        sceneDistance(p - e.xyy),
        sceneDistance(p - e.yxy),
        sceneDistance(p - e.yyx)
    );

    return normalize(n);
}
  
void main()	{
    vec2 screenPos = (gl_FragCoord.xy / resolution) * 2.0 - 1.0;
    vec4 ndcRay = vec4(screenPos.xy, 1.0, 1.0);
    
    vec3 rayOrigin = cameraPosition;
    vec3 rayDirection = (cameraWorldMatrix * cameraProjectionMatrixInverse * ndcRay).xyz;
    rayDirection = normalize(rayDirection);

    FragColor = rayMarch(rayOrigin, rayDirection);

    vec3 col = vec3(0.0, 0.0, 0.0);

    // if(d < MAX_DIST) {
    //     vec3 p = rayOrigin + rayDirection * d;
    //     vec3 n = GetNormal(p);
    //     float dif = dot(n, normalize(vec3(1.0, 2.0, -3.0))) * 0.5 + 0.5;
    //     col = vec3(dif) * 0.2;

    //     vec4 clipPos = cameraProjectionMatrix * cameraWorldMatrixInverse * vec4(p, 1.0);
    //     gl_FragDepth = (clipPos.z / clipPos.w) * 0.5 + 0.5;
    // } else {
    //     discard;
    // }
}`
