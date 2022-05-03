import { Canvas } from "react-three-fiber";
import NavBar from "../components/NavBar";
import Box from "./Box";
import CursorLight from "./CursorLight";

export default function Home() {
  return (
    <Canvas>
      <CursorLight />
      <Box />
      <NavBar />
    </Canvas>
  );
}
