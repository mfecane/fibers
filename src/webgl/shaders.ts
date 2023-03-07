export const vertexShaderSource = `#version 300 es
precision mediump float;

layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec2 aTexCoord;
layout(location = 2) in vec3 aInstanceData;

out vec4 glPosition;
out vec2 vUV;

uniform mat4 projectionMatrix;
uniform mat4 cameraMatrix;
uniform float logDepthBufFC;

#define EPSILON 1e-6

void main()	{
    vUV = aTexCoord;
    vec4 rootPosition = projectionMatrix * cameraMatrix * vec4(aInstanceData, 1.0);
    gl_Position = rootPosition + projectionMatrix * vec4(aPosition, 1.0);
    gl_Position.z = log2(max(EPSILON, gl_Position.w + 1.0)) * logDepthBufFC - 1.0;
    gl_Position.z *= gl_Position.w;
}
`

export const fragmentShaderSource = `#version 300 es
precision mediump float;

in vec2 vUV;
out vec4 FragColor;

void main()	{
    FragColor = vec4(vUV.x, vUV.y, 0.0, 1.0);
}
`
