"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface AlexandriaCoin3DProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export default function AlexandriaCoin3D({
  className = "",
  size = 280,
  interactive = true,
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

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Main Coin Group
    const coinGroup = new THREE.Group();
    scene.add(coinGroup);

    // Vertex Shader
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

    // Fragment Shader for Coin Body (Lavender / Violet Metallic with Fresnel)
    const coinFragmentShader = `
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

        vec3 lightDir1 = normalize(vec3(0.6 + uMouse.x * 0.4, 0.8 + uMouse.y * 0.4, 1.2));
        vec3 lightDir2 = normalize(vec3(-0.8, -0.4, 0.6));

        float diff1 = max(dot(normal, lightDir1), 0.0);
        float diff2 = max(dot(normal, lightDir2), 0.0) * 0.4;

        vec3 halfDir = normalize(lightDir1 + viewDir);
        float spec = pow(max(dot(normal, halfDir), 0.0), 32.0);

        vec3 anisoDir = normalize(vec3(-normal.y, normal.x, 0.0));
        float aniso = pow(max(abs(dot(anisoDir, halfDir)), 0.0), 16.0) * 0.35;

        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.5);

        vec3 base = mix(uBaseColor, vec3(0.92, 0.90, 1.0), (diff1 + diff2) * 0.6);
        vec3 finalColor = base + (spec * 1.1 + aniso) * uGlintColor;
        finalColor += fresnel * uRimColor * 1.6;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // Fragment Shader for White Diamond Emblem
    const emblemFragmentShader = `
      uniform float uTime;
      uniform vec2 uMouse;

      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        vec3 lightDir = normalize(vec3(0.5 + uMouse.x * 0.3, 0.8 + uMouse.y * 0.3, 1.2));
        float diff = max(dot(normal, lightDir), 0.0);

        vec3 halfDir = normalize(lightDir + viewDir);
        float spec = pow(max(dot(normal, halfDir), 0.0), 48.0);
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);

        vec3 baseWhite = vec3(0.98, 0.98, 1.0);
        vec3 finalColor = baseWhite * (0.85 + diff * 0.25) + spec * vec3(1.0) * 1.2 + fresnel * vec3(0.7, 0.6, 1.0) * 0.5;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // Lavender/Violet body material matching reference image 2
    const coinMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: coinFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uBaseColor: { value: new THREE.Color("#7b61f2") }, // Lavender/Purple matching Image 2
        uRimColor: { value: new THREE.Color("#dcc7ff") },
        uGlintColor: { value: new THREE.Color("#ffffff") },
      },
      side: THREE.DoubleSide,
    });

    // Pure White Diamond material
    const emblemMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: emblemFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      side: THREE.DoubleSide,
    });

    // 1. Cylinder Base Coin (Chunky luxury 3D token matching Image 2)
    const coinGeometry = new THREE.CylinderGeometry(1.4, 1.4, 0.26, 64);
    const coinMesh = new THREE.Mesh(coinGeometry, coinMaterial);
    coinMesh.rotation.x = Math.PI / 2;
    coinGroup.add(coinMesh);

    // 2. Outer Rim Ring with Chamfer
    const torusGeometry = new THREE.TorusGeometry(1.41, 0.12, 32, 64);
    const torusMesh = new THREE.Mesh(torusGeometry, coinMaterial);
    coinGroup.add(torusMesh);

    // 3. Inner Beveled Emblem Ring
    const innerRingGeo = new THREE.TorusGeometry(1.22, 0.05, 24, 64);
    const innerRingMesh = new THREE.Mesh(innerRingGeo, coinMaterial);
    coinGroup.add(innerRingMesh);

    // 4. Extruded Alexandria White Diamond Shape
    const diamondShape = new THREE.Shape();
    diamondShape.moveTo(0, 0.72);
    diamondShape.lineTo(0.58, 0.0);
    diamondShape.lineTo(0, -0.72);
    diamondShape.lineTo(-0.58, 0.0);
    diamondShape.closePath();

    // Inner cutout diamond
    const holeShape = new THREE.Path();
    holeShape.moveTo(0, 0.44);
    holeShape.lineTo(0.34, 0.0);
    holeShape.lineTo(0, -0.44);
    holeShape.lineTo(-0.34, 0.0);
    holeShape.closePath();
    diamondShape.holes.push(holeShape);

    const extrudeSettings = {
      steps: 1,
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.04,
      bevelSegments: 5,
    };

    const diamondGeometry = new THREE.ExtrudeGeometry(diamondShape, extrudeSettings);
    diamondGeometry.center();

    // Front White Emblem
    const frontEmblem = new THREE.Mesh(diamondGeometry, emblemMaterial);
    frontEmblem.position.z = 0.16;
    coinGroup.add(frontEmblem);

    // Back White Emblem
    const backEmblem = new THREE.Mesh(diamondGeometry, emblemMaterial);
    backEmblem.position.z = -0.16;
    backEmblem.rotation.y = Math.PI;
    coinGroup.add(backEmblem);

    // Default 3D isometric tilt (matching Image 2)
    coinGroup.rotation.x = 0.35;
    coinGroup.rotation.y = -0.42;
    coinGroup.rotation.z = 0.12;

    // Mouse Interaction handlers
    const handlePointerMove = (e: MouseEvent) => {
      if (!interactive) return;
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

    if (interactive) {
      container.addEventListener("mousemove", handlePointerMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth spring interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Continuous gentle rotation + mouse tilt matching isometric reference
      const baseRotY = -0.42 + Math.sin(elapsedTime * 0.5) * 0.06;
      coinGroup.rotation.y = baseRotY + mouseRef.current.x * 0.35;
      coinGroup.rotation.x = 0.35 - mouseRef.current.y * 0.3;
      coinGroup.rotation.z = 0.12 + Math.sin(elapsedTime * 0.4) * 0.02 + mouseRef.current.x * 0.08;

      // Update uniforms
      coinMaterial.uniforms.uTime.value = elapsedTime;
      coinMaterial.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      emblemMaterial.uniforms.uTime.value = elapsedTime;
      emblemMaterial.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (interactive) {
        container.removeEventListener("mousemove", handlePointerMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coinGeometry.dispose();
      torusGeometry.dispose();
      innerRingGeo.dispose();
      diamondGeometry.dispose();
      coinMaterial.dispose();
      emblemMaterial.dispose();
      renderer.dispose();
    };
  }, [size, interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
      style={{ width: "100%", height: "100%", minHeight: size }}
    />
  );
}
