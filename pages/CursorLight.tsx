import { useRef } from "react";
import { PointLightProps, useFrame } from "react-three-fiber";

export default function CursorLight() {
  const ref = useRef<PointLightProps>();

  useFrame((state) => {
    if (!ref.current) return;
    console.log(state.mouse.x, state.mouse.y);
    ref.current.position.set(state.mouse.x * 500, state.mouse.y * 500, 2);
  });

  return <pointLight ref={ref} intensity={0.4} />;
}
