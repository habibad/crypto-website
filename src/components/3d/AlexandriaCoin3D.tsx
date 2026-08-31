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
  size = 275,
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
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: false,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
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

    // Fragment Shader for Coin Body (Satin Lavender / Purple Ceramic Sheen matching Reference Image 2)
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

        // Soft key light from top-left (creates soft highlights on top rim)
        vec3 lightDir1 = normalize(vec3(0.55 + uMouse.x * 0.25, 0.85 + uMouse.y * 0.25, 1.15));
        // Soft ambient fill light
        vec3 lightDir2 = normalize(vec3(-0.6, -0.4, 0.5));

        float diff1 = max(dot(normal, lightDir1), 0.0);
        float diff2 = max(dot(normal, lightDir2), 0.0) * 0.4;

        vec3 halfDir = normalize(lightDir1 + viewDir);
        float spec = pow(max(dot(normal, halfDir), 0.0), 32.0);

        // Soft fresnel rim lighting
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);

        vec3 base = mix(uBaseColor * 0.88, vec3(0.94, 0.90, 1.0), (diff1 + diff2) * 0.55);
        vec3 finalColor = base + spec * uGlintColor * 0.85;
        finalColor += fresnel * uRimColor * 1.05;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // Fragment Shader for White 3D Diamond Emblem
    const emblemFragmentShader = `
      uniform float uTime;
      uniform vec2 uMouse;

      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        vec3 lightDir = normalize(vec3(0.5 + uMouse.x * 0.25, 0.85 + uMouse.y * 0.25, 1.2));
        float diff = max(dot(normal, lightDir), 0.0);

        vec3 halfDir = normalize(lightDir + viewDir);
        float spec = pow(max(dot(normal, halfDir), 0.0), 36.0);
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.4);

        vec3 baseWhite = vec3(0.98, 0.98, 1.0);
        vec3 finalColor = baseWhite * (0.86 + diff * 0.24) + spec * vec3(1.0) * 0.95 + fresnel * vec3(0.85, 0.80, 1.0) * 0.35;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // Satin Lavender / Purple Ceramic Material matching reference image 2
    const coinMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: coinFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uBaseColor: { value: new THREE.Color("#8d7cf0") }, // Vibrant pastel lavender
        uRimColor: { value: new THREE.Color("#e4d5ff") },  // Soft lavender rim glow
        uGlintColor: { value: new THREE.Color("#ffffff") },
      },
      side: THREE.DoubleSide,
    });

    // Pure White Emblem Material
    const emblemMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: emblemFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      side: THREE.DoubleSide,
    });

    // 1. Cylinder Base Coin
    const coinGeometry = new THREE.CylinderGeometry(1.48, 1.48, 0.28, 64);
    const coinMesh = new THREE.Mesh(coinGeometry, coinMaterial);
    coinMesh.rotation.x = Math.PI / 2;
    coinGroup.add(coinMesh);

    // 2. Outer Smooth Torus Rim
    const torusGeometry = new THREE.TorusGeometry(1.48, 0.12, 32, 64);
    const torusMesh = new THREE.Mesh(torusGeometry, coinMaterial);
    coinGroup.add(torusMesh);

    // 3. Inner Stepped Ring
    const innerRingGeo = new THREE.TorusGeometry(1.30, 0.04, 24, 64);
    const innerRingMesh = new THREE.Mesh(innerRingGeo, coinMaterial);
    coinGroup.add(innerRingMesh);

    // 4. Extruded Symmetrical 45-degree Hollow Diamond (Rhombus)
    const diamondShape = new THREE.Shape();
    diamondShape.moveTo(0, 0.72);
    diamondShape.lineTo(0.72, 0.0);
    diamondShape.lineTo(0, -0.72);
    diamondShape.lineTo(-0.72, 0.0);
    diamondShape.closePath();

    // Inner Cutout Diamond (Hole)
    const holeShape = new THREE.Path();
    holeShape.moveTo(0, 0.44);
    holeShape.lineTo(0.44, 0.0);
    holeShape.lineTo(0, -0.44);
    holeShape.lineTo(-0.44, 0.0);
    holeShape.closePath();
    diamondShape.holes.push(holeShape);

    const extrudeSettings = {
      steps: 1,
      depth: 0.20,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.035,
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

    // Exact Isometric Tilt matching Reference Image 2
    coinGroup.rotation.x = 0.24;
    coinGroup.rotation.y = -0.32;
    coinGroup.rotation.z = 0.06;

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

      // Continuous subtle breathing tilt
      const baseRotY = -0.32 + Math.sin(elapsedTime * 0.35) * 0.02;
      coinGroup.rotation.y = baseRotY + mouseRef.current.x * 0.2;
      coinGroup.rotation.x = 0.24 - mouseRef.current.y * 0.15;
      coinGroup.rotation.z = 0.06 + Math.sin(elapsedTime * 0.25) * 0.01 + mouseRef.current.x * 0.03;

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
      style={{ width: "100%", height: "100%" }}
    />
  );
}
