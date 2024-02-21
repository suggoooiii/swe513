uniform float time;
uniform vec3 fogColor;
uniform float fogDensity;
varying vec3 vWorldPosition;
void main() {
    float distance = length(vWorldPosition - cameraPosition);
    float fogFactor = 1.0 - exp(-pow(distance * fogDensity, 2.0));
    fogFactor = clamp(fogFactor, 0.0, 1.0);
    vec3 color = mix(vec3(1.0), fogColor, fogFactor); // Mix object color and fog color based on fogFactor
    gl_FragColor = vec4(color, 1.0);
}