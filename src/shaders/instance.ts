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

void main()	{
  uv = texCoords;
  uv2 = texCoords2;
  vec3 pos = vec3(position, 0.0);
  pos.x += bend * uv.y * uv.y;
  pos.z += bend * uv.y * uv.y * 2.0;

  //  shift end of fiber y position up and down to simulate bending effect 
  pos.y -= (uv.x - 0.5) * bend * uv.y;

  gl_Position = cameraProjectionMatrix * cameraWorldMatrixInverse * instanceMatrix * vec4(pos, 1.0);
}`

export const fragmentShaderSource = `#version 300 es
precision mediump float;

uniform sampler2D textureMap;
uniform sampler2D textureMap2;

out vec4 FragColor;

in vec2 uv;
in vec2 uv2;

void main()	{
  vec4 c = texture(textureMap, uv);
  vec4 c2 = texture(textureMap2, uv2) * smoothstep(0.0, 0.5, uv.y);
  FragColor = vec4(c2.xyz, c.x);
}`
