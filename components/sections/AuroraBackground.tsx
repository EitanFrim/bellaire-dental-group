"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Signature "living" mesh gradient: a soft, brand-colored aurora drawn with a
 * tiny WebGL fragment shader (Stripe-style flowing gradient). No image assets,
 * resolution-independent, GPU-accelerated, and rendered at a fraction of CSS
 * resolution since the result is intentionally blurry. Falls back to a static
 * CSS mesh when WebGL is unavailable or the user prefers reduced motion.
 * Purely decorative.
 */

const VERT = `
attribute vec2 a_pos;
void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash(i), b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++){ v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / u_res;
  float t = u_time * 0.04;
  vec2 q = uv + (u_mouse - 0.5) * 0.12;

  float n1 = fbm(q * 2.0 + vec2(t, t * 0.8));
  float n2 = fbm(q * 2.6 - vec2(t * 0.7, t));
  float n3 = fbm(q * 3.0 + vec2(-t, t * 0.6) + 5.0);
  float n4 = fbm(q * 2.2 + vec2(t * 0.5, -t * 0.4) + 11.0);

  vec3 cream = vec3(0.984, 0.973, 0.949);
  vec3 aqua  = vec3(0.863, 0.937, 0.965);
  vec3 mint  = vec3(0.906, 0.953, 0.925);
  vec3 cyan  = vec3(0.373, 0.804, 0.945);
  vec3 gold  = vec3(0.929, 0.812, 0.596);

  vec3 col = cream;
  col = mix(col, aqua, smoothstep(0.15, 0.90, n1));
  col = mix(col, mint, smoothstep(0.30, 0.95, n2));
  col = mix(col, cyan, smoothstep(0.55, 0.98, n3) * 0.50);
  col = mix(col, gold, smoothstep(0.62, 1.00, n4) * 0.22);

  gl_FragColor = vec4(col, 1.0);
}
`;

export function AuroraBackground({
  className,
  interactive = true,
}: {
  className?: string;
  interactive?: boolean;
}) {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    if (reduce) return; // the static CSS mesh below is the reduced-motion view
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      depth: false,
      powerPreference: "low-power",
    }) || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) {
      setWebglOk(false);
      return;
    }

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setWebglOk(false);
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    // One oversized triangle covering the viewport.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const SCALE = 0.6; // render below CSS resolution; the gradient is blurry anyway
    const resize = () => {
      const w = Math.max(1, Math.floor(canvas.clientWidth * SCALE));
      const h = Math.max(1, Math.floor(canvas.clientHeight * SCALE));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
    };

    let mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const onMove = (e: PointerEvent) => {
      tmx = e.clientX / window.innerWidth;
      tmy = 1 - e.clientY / window.innerHeight;
    };
    if (interactive && fine) window.addEventListener("pointermove", onMove);

    let raf = 0;
    let running = true;
    const start = performance.now();
    const frame = (now: number) => {
      if (!running) return;
      resize();
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      gl.uniform2f(uMouse, mx, my);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    // Pause the loop while the canvas is scrolled out of view.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(frame);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      if (interactive && fine) window.removeEventListener("pointermove", onMove);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [reduce, interactive]);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {/* Static CSS mesh: instant paint, and the fallback for reduced-motion / no WebGL */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60vh 60vh at 6% -4%, rgba(95,205,241,0.42), transparent 60%)," +
            "radial-gradient(55vh 55vh at 104% 6%, rgba(220,239,246,0.70), transparent 60%)," +
            "radial-gradient(64vh 70vh at 28% 108%, rgba(231,243,236,0.65), transparent 62%)," +
            "radial-gradient(30vh 30vh at 82% 40%, rgba(237,207,152,0.32), transparent 60%)",
        }}
      />
      {!reduce && webglOk && (
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      )}
    </div>
  );
}
