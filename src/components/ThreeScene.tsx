"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Stars, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function StarMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const starShape = useMemo(() => {
    const shape = new THREE.Shape();
    const outerRadius = 1.5;
    const innerRadius = 0.6;
    const points = 5;
    const step = Math.PI / points;

    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = Math.cos(i * step - Math.PI / 2) * radius;
      const y = Math.sin(i * step - Math.PI / 2) * radius;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  }, []);

  const extrudeSettings = {
    steps: 2,
    depth: 0.4,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 5,
  };

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Auto rotate
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.3;
    
    // Mouse parallax
    const targetX = mouse.x * 0.3;
    const targetY = mouse.y * 0.3;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX + time * 0.3, 0.1);
    
    // Gentle pulse
    const pulse = Math.sin(time * 2) * 0.05 + 1;
    meshRef.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <mesh ref={meshRef} position={[isMobile ? 0 : 2, isMobile ? 2 : 0, 0]}>
      <extrudeGeometry args={[starShape, extrudeSettings]} />
      <meshStandardMaterial 
        color="#B8973A" 
        metalness={0.9} 
        roughness={0.1} 
        emissive="#B8973A"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  const [count, setCount] = useState(800);

  useEffect(() => {
    setCount(window.innerWidth < 768 ? 250 : 800);
  }, []);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 1] += 0.005;
      if (positions[i * 3 + 1] > 10) {
        positions[i * 3 + 1] = -10;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Mouse parallax
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, -mouse.x * 0.5, 0.05);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, -mouse.y * 0.5, 0.05);
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#B8973A"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

export default function ThreeScene() {
  const [starCount, setStarCount] = useState(2000);

  useEffect(() => {
    setStarCount(window.innerWidth < 768 ? 1000 : 2000);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas 
        dpr={[1, 2]} 
        gl={{ antialias: false, stencil: false, depth: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 2]} color="#B8973A" intensity={5} />
        <pointLight position={[5, 5, 5]} color="#B8973A" intensity={2} />
        <pointLight position={[-5, -5, -5]} color="#1E3C78" intensity={2} />
        
        <StarMesh />
        <ParticleField />
        
        <Stars radius={100} depth={50} count={starCount} factor={4} saturation={0} fade speed={1} />

        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.2} 
            mipmapBlur 
            intensity={1.2} 
            radius={0.4}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
