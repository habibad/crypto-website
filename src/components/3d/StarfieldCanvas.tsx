"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarfieldCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Geometry (700+ particles)
    const particleCount = 750;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const palette = [
      new THREE.Color("#E03E99"), // Neon Magenta
      new THREE.Color("#7928CA"), // Ultraviolet
      new THREE.Color("#ffffff"), // Pure White
      new THREE.Color("#a855f7"), // Soft Violet
      new THREE.Color("#38bdf8"), // Electric Cyan
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 600;
      positions[i3 + 1] = (Math.random() - 0.5) * 600;
      positions[i3 + 2] = (Math.random() - 0.5) * 400;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;

      scales[i] = Math.random() * 2.5 + 0.8;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // Custom circular glowing particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.2, "rgba(255, 255, 255, 0.8)");
      grad.addColorStop(0.6, "rgba(224, 62, 153, 0.3)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 3.5,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
      opacity: 0.85,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 30;
      targetY = (e.clientY / window.innerHeight - 0.5) * 30;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      camera.position.x = mouseX;
      camera.position.y = -mouseY;
      camera.lookAt(scene.position);

      // Subtle slow rotation and drifting
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80"
      aria-hidden="true"
    />
  );
}
