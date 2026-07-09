import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = ({ color, position, args, distort, speed }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={args} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed}
        roughness={0}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
};

const AmbientBackground = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Peach Orb */}
        <AnimatedSphere 
          color="#FFB89E" 
          position={[-4, 2, -2]} 
          args={[2.5, 64, 64]} 
          distort={0.4} 
          speed={1.5} 
        />
        
        {/* Indigo Orb */}
        <AnimatedSphere 
          color="#5C679A" 
          position={[5, -3, -5]} 
          args={[3, 64, 64]} 
          distort={0.5} 
          speed={1} 
        />

        {/* Soft Gold Orb */}
        <AnimatedSphere 
          color="#E8D3A8" 
          position={[0, -5, -8]} 
          args={[4, 64, 64]} 
          distort={0.3} 
          speed={0.8} 
        />
      </Canvas>
    </div>
  );
};

export default AmbientBackground;
