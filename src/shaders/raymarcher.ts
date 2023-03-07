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

out vec4 FragColor;

#define EPSILON 1e-6
#define PI  3.14159265358
#define TAU 6.28318530718

#define MAX_STEPS 100
#define MAX_DIST 100.0
#define SURF_DIST 0.00001 // hit distance

#define R(p, a) p = cos(a) * p + sin(a) * vec2(p.y, -p.x)

float sdRectangle(vec3 p, vec3 b)
{
    vec3 d = abs(p) - b;
    return length(max(d, 0.0)) + min(max(d.x, max(d.y, d.z)), 0.0);
}

float sceneDistance(vec3 point) {
    return sdRectangle(point, vec3(1.0, 0.05, 2.0));
}

float rayMarch(vec3 ro, vec3 rd) {
    float dO = 0.0;

    for(int i = 0; i < MAX_STEPS; i++) {
        vec3 p = ro + rd * dO;
        float dS = sceneDistance(p);
        dO += dS;
        if (dO > MAX_DIST || abs(dS) < SURF_DIST) {
        break;
        }
    }

    return dO;
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
    rayDirection = normalize( rayDirection );

    float d = rayMarch(rayOrigin, rayDirection);

    vec3 col = vec3(0.0, 0.0, 0.0);

    if(d < MAX_DIST) {
        vec3 p = rayOrigin + rayDirection * d;
        vec3 n = GetNormal(p);
        float dif = dot(n, normalize(vec3(1.0, 2.0, -3.0))) * 0.5 + 0.5;
        col = vec3(dif) * 0.2;

        // TODO i think i should account for resolution
        // since the center seem to be offset

        vec4 clipPos = cameraProjectionMatrix * cameraWorldMatrixInverse * vec4(p, 1.0);
        gl_FragDepth = (clipPos.z / clipPos.w) * 0.5 + 0.5;
    } else {
        discard;
    }

    FragColor = vec4(col, 1.0);
}`
