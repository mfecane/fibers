export const vertexShaderSource = `#version 300 es
precision highp float;

layout(location = 0) in vec3 position;

out vec4 glPosition;
out vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 cameraMatrix;

void main()	{
    uv = position.xy;
    gl_Position = projectionMatrix * cameraMatrix * vec4( position, 1.0 );
}
`

export const fragmentShaderSource = `#version 300 es
precision highp float;

in vec2 uv;
out vec4 FragColor;

void main()	{
    FragColor = vec4(0.0, 1.0, 0.0, 1.0);
}
`
