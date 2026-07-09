import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Animated glowing sphere
function GlowSphere({ position, scale, speed, distort }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color="#3B82F6"
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.6}
          wireframe={false}
        />
      </Sphere>
    </Float>
  );
}

// Rotating torus ring
function GlowRing({ position, rotation, scale, color }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={0.8}>
      <Torus ref={ref} args={[1, 0.05, 16, 100]} position={position} scale={scale} rotation={rotation}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          transparent
          opacity={0.75}
          roughness={0.1}
          metalness={1}
        />
      </Torus>
    </Float>
  );
}

// Wireframe icosahedron
function GeometricMesh({ position }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={3} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#60A5FA"
          wireframe
          emissive="#3B82F6"
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Mouse-reactive camera
function CameraRig() {
  useFrame((state) => {
    const x = state.mouse.x * 0.4;
    const y = state.mouse.y * 0.3;
    state.camera.position.x += (x - state.camera.position.x) * 0.05;
    state.camera.position.y += (y - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeScene() {
  return (
    <div className="hero-canvas" aria-hidden>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 1.5]}
        >
          <CameraRig />

          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#3B82F6" />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#1D4ED8" />
          <pointLight position={[0, 5, -5]} intensity={0.8} color="#60A5FA" />

          {/* Stars */}
          <Stars radius={60} depth={30} count={1500} factor={3} saturation={0} fade speed={0.5} />

          {/* Main distorted sphere */}
          <GlowSphere position={[0, 0, 0]} scale={1.6} speed={0.4} distort={0.35} />

          {/* Secondary spheres */}
          <GlowSphere position={[3.5, 1, -2]} scale={0.6} speed={0.6} distort={0.5} />
          <GlowSphere position={[-3.2, -1.5, -1]} scale={0.45} speed={0.8} distort={0.4} />
          <GlowSphere position={[2, -2, -3]} scale={0.35} speed={0.5} distort={0.6} />

          {/* Geometric wireframe */}
        </Canvas>
      </Suspense>
    </div>
  );
}
