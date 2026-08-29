"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface AlexandriaCoin3DProps {
  className?: string;
  size?: number;
}

export default function AlexandriaCoin3D({
  className = "",
  size = 280,
}: AlexandriaCoin3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const width = container.clientWidth || size;
    const height = container.clientHeight || size;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Coin Group
    const coinGroup = new THREE.Group();
    scene.add(coinGroup);

    // Custom GLSL Shaders
    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec3 uBaseColor;
      uniform vec3 uRimColor;
      uniform vec3 uGlintColor;

      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // Light setup
        vec3 lightDir = normalize(vec3(0.5 + uMouse.x * 0.5, 0.8 + uMouse.y * 0.5, 1.0));
        vec3 lightDir2 = normalize(vec3(-0.8, -0.4, 0.5));

        // Diffuse
        float diff = max(dot(normal, lightDir), 0.0);
        float diff2 = max(dot(normal, lightDir2), 0.0) * 0.4;

        // Specular & Anisotropic sheen
        vec3 halfDir = normalize(lightDir + viewDir);
        float spec = pow(max(dot(normal, halfDir), 0.0), 32.0);
        
        // Anisotropic highlight reflection
        vec3 anisoDir = normalize(vec3(-normal.y, normal.x, 0.0));
        float aniso = pow(max(abs(dot(anisoDir, halfDir)), 0.0), 16.0) * 0.35;

        // Fresnel Edge Glow
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.8);

        // Chromatic Rainbow Dispersion on bevel edges
        vec3 chromatic = vec3(
          0.5 + 0.5 * sin(uTime * 1.5 + vUv.x * 6.28),
          0.5 + 0.5 * cos(uTime * 1.5 + vUv.y * 6.28 + 2.094),
          0.5 + 0.5 * sin(uTime * 1.5 + (vUv.x + vUv.y) * 3.14 + 4.188)
        );

        // Dynamic Glint Beam reacting to mouse
        float mouseDist = distance(vUv, vec2(0.5 + uMouse.x * 0.3, 0.5 - uMouse.y * 0.3));
        float glint = exp(-mouseDist * 6.0) * 0.8;

        // Base shading composite
        vec3 base = mix(uBaseColor, vec3(0.85, 0.88, 0.98), diff * 0.5 + diff2);
        vec3 finalColor = base + (spec + aniso) * uGlintColor * 1.2;
        finalColor += fresnel * uRimColor * 1.8;
        finalColor += chromatic * fresnel * 0.7;
        finalColor += glint * uGlintColor;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uBaseColor: { value: new THREE.Color("#6328a6") },
        uRimColor: { value: new THREE.Color("#E03E99") },
        uGlintColor: { value: new THREE.Color("#ffffff") },
      },
      side: THREE.DoubleSide,
    });

    // 1. Cylinder Base Coin
    const coinGeometry = new THREE.CylinderGeometry(1.4, 1.4, 0.18, 64);
    const coinMesh = new THREE.Mesh(coinGeometry, shaderMaterial);
    coinMesh.rotation.x = Math.PI / 2;
    coinGroup.add(coinMesh);

    // 2. Outer Rim Ring with Chamfer
    const torusGeometry = new THREE.TorusGeometry(1.41, 0.08, 32, 64);
    const torusMesh = new THREE.Mesh(torusGeometry, shaderMaterial);
    coinGroup.add(torusMesh);

    // 3. Inner Beveled Emblem Ring
    const innerRingGeo = new THREE.TorusGeometry(1.22, 0.04, 24, 64);
    const innerRingMesh = new THREE.Mesh(innerRingGeo, shaderMaterial);
    coinGroup.add(innerRingMesh);

    // 4. Extruded Alexandria Diamond Shape
    const diamondShape = new THREE.Shape();
    diamondShape.moveTo(0, 0.7);
    diamondShape.lineTo(0.55, 0.0);
    diamondShape.lineTo(0, -0.7);
    diamondShape.lineTo(-0.55, 0.0);
    diamondShape.closePath();

    // Inner cutout diamond for geometric depth
    const holeShape = new THREE.Path();
    holeShape.moveTo(0, 0.42);
    holeShape.lineTo(0.32, 0.0);
    holeShape.lineTo(0, -0.42);
    holeShape.lineTo(-0.32, 0.0);
    holeShape.closePath();
    diamondShape.holes.push(holeShape);

    const extrudeSettings = {
      steps: 1,
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.03,
      bevelSegments: 4,
    };

    const diamondGeometry = new THREE.ExtrudeGeometry(diamondShape, extrudeSettings);
    diamondGeometry.center();

    // Front Emblem
    const frontEmblem = new THREE.Mesh(diamondGeometry, shaderMaterial);
    frontEmblem.position.z = 0.11;
    coinGroup.add(frontEmblem);

    // Back Emblem
    const backEmblem = new THREE.Mesh(diamondGeometry, shaderMaterial);
    backEmblem.position.z = -0.11;
    backEmblem.rotation.y = Math.PI;
    coinGroup.add(backEmblem);

    // Tilt angle
    coinGroup.rotation.x = 0.25;
    coinGroup.rotation.y = -0.3;

    // Mouse Interaction handlers
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse interaction
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Continuous gentle rotation + mouse tilt
      const baseRotY = -0.3 + Math.sin(elapsedTime * 0.8) * 0.2;
      coinGroup.rotation.y = baseRotY + mouseRef.current.x * 0.7;
      coinGroup.rotation.x = 0.25 - mouseRef.current.y * 0.6;
      coinGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.05 + mouseRef.current.x * 0.2;

      // Update uniforms
      shaderMaterial.uniforms.uTime.value = elapsedTime;
      shaderMaterial.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coinGeometry.dispose();
      torusGeometry.dispose();
      innerRingGeo.dispose();
      diamondGeometry.dispose();
      shaderMaterial.dispose();
      renderer.dispose();
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
      style={{ width: "100%", height: "100%", minHeight: size }}
    />
  );
}
