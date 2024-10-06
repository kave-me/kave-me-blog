"use client";
import { Scene } from "./scene/Scene";
import S2 from "./scene/S2";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/web";
import Overlay from "./scene/Overlay";
import React from "react";

export function Experience() {
  const [{ background, fill }, set] = useSpring(
    { background: "#f0f0f0", fill: "#202020" },
    []
  );

  return (
    <Canvas className="canvas" dpr={[1, 2]}>
      <S2 setBg={set} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

export default Experience;
