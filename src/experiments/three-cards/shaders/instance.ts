export const vertexShaderSource = `#version 300 es
precision mediump float;

layout(location = 0) in vec2 position;
layout(location = 1) in vec2 texCoords;
layout(location = 2) in vec2 texCoords2;
// TODO why in this order?
layout(location = 3) in float bend;
layout(location = 4) in mat4 instanceMatrix;

uniform mat4 cameraWorldMatrix;
uniform mat4 cameraWorldMatrixInverse;
uniform mat4 cameraProjectionMatrix;
uniform mat4 cameraProjectionMatrixInverse;

out vec2 uv;
out vec2 uv2;
out vec4 vPosition;

void main()	{
  uv = texCoords;
  uv2 = texCoords2; 
  vec3 pos = vec3(position, 0.0);
  pos.x += bend * uv.y * uv.y;
  pos.z += bend * uv.y * uv.y * 2.0;

  //  shift end of fiber y position up and down to simulate bending effect 
  pos.y -= (uv.x - 0.5) * bend * uv.y;

  vPosition = cameraProjectionMatrix * cameraWorldMatrixInverse * instanceMatrix * vec4(pos, 1.0);
  gl_Position = vPosition;
}`

export const fragmentShaderSource = `#version 300 es
precision mediump float;

uniform sampler2D textureMap;
uniform sampler2D textureMap2;
uniform sampler2D textureMap3;
uniform vec3 cameraPosition;
uniform mat4 cameraWorldMatrixInverse;
uniform mat4 cameraProjectionMatrix;
uniform float logDepthBufFC;

#define EPSILON 1e-6

out vec4 FragColor;

in vec2 uv;
in vec2 uv2;
in vec4 vPosition;

void main()	{
  vec4 c = texture(textureMap, uv);
  if (c.w < 0.5) {
    discard;
  }
  vec4 c2 = texture(textureMap2, uv2 + vec2(0.0, uv.x - 0.5) * 0.01);
  c2 *= (0.4 + uv.y * 0.8);
  c2 *= 0.5 + 0.5 * texture(textureMap3, uv);
  FragColor = vec4(c2.xyz, c.x);

  // vec4 clipPos = cameraProjectionMatrix * cameraWorldMatrixInverse * vPosition;
  // gl_FragDepth = (clipPos.z / clipPos.w);

  // gl_Position.z = log2( max( EPSILON, vPosition.w + 1.0 ) ) * logDepthBufFC - 1.0;
  // gl_Position.z *= gl_Position.w;

  gl_FragDepth = log2(max(EPSILON, vPosition.w + 1.0)) * logDepthBufFC - 1.0;
  gl_FragDepth *= vPosition.w;
}`
