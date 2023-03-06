export const vertexShaderSource = `#version 300 es
precision mediump float;

layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec2 aTexCoord;

out vec4 glPosition;
out vec2 vUV;

uniform mat4 projectionMatrix;
uniform mat4 cameraMatrix;

void main()	{
    vUV = aTexCoord;
    gl_Position = projectionMatrix * cameraMatrix * vec4( aPosition, 1.0 );
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
