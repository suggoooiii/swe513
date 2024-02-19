varying vec2 vUv;
uniform float uMultiplier;
uniform float uAlpha;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uTime;

void main() {
    vec2 mulvUv = mod(vUv * uMultiplier, 1.);
    float strength = step(0.8, mod(mulvUv.x + uTime, 1.));
    vec3 mixColor = mix(uColorA, uColorB, step(0.5, mulvUv.y));
    gl_FragColor.rgba = vec4(mixColor, min(strength, uAlpha));
}