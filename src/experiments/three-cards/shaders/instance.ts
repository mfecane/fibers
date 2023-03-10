export const vertexShaderSource = `#version 300 es
precision mediump float;

layout(location = 0) in vec3 position;
layout(location = 1) in mat4 instanceMatrix;

uniform mat4 cameraWorldMatrix;
uniform mat4 cameraWorldMatrixInverse;
uniform mat4 cameraProjectionMatrix;
uniform mat4 cameraProjectionMatrixInverse;

void main()	{			
  // vec4 rootPosition = projectionMatrix * cameraMatrix * vec4(aInstanceData, 1.0);
  gl_Position = cameraProjectionMatrix * cameraWorldMatrixInverse * instanceMatrix * vec4(position, 1.0);
}`

export const fragmentShaderSource = `#version 300 es
precision mediump float;
  
out vec4 FragColor;

void main()	{
  FragColor = vec4(0.0, 1.0, 1.0, 1.0);
}`
