uniform vec2 uPoint;
uniform vec3 uColor;
uniform float uRadius;
uniform float uAspectRatio;
uniform vec2 weight;

out vec4 fragColor;
void main()
{
    vec2 p = vUV.xy - uPoint;
    p.x *= uAspectRatio;

    // vec3 splat = exp(-dot(p, p) / uRadius)/* * uColor*/ * vec3(0.0);
    vec3 splat = vec3(.0);
    vec3 base = texture(sTD2DInputs[0], vUV.st).xyz;

    vec3 src = texture(sTD2DInputs[1], vUV.st).xyz;

	vec4 color = vec4(base + splat + src, 1.0);
	fragColor = TDOutputSwizzle(color);
}
