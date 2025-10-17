import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={1.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color={color}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b9d" />
        
        <AnimatedSphere position={[-3, 2, 0]} color="#8B5CF6" />
        <AnimatedSphere position={[3, -2, -2]} color="#EC4899" />
        <AnimatedSphere position={[0, 0, -3]} color="#3B82F6" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
