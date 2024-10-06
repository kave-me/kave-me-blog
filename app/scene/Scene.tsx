"use client";

import { Canvas } from "@react-three/fiber";

export function Scene() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[20, 20, 1]} />
        <meshPhongMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} color="red" />
    </Canvas>
  );
}
