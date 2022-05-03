import { useRef } from "react";
import { extend, MeshProps } from "react-three-fiber";
import { Text as TrText } from "troika-three-text";
import fonts from "../lib/fonts";

type Props = {
  children: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  [key: string]: any;
};

extend({ Text: TrText });

export default function Text({
  children: text,
  color,
  fontSize,
  fontWeight,
  ...props
}: Props) {
  const ref = useRef<MeshProps>();

  const fontWeights = {
    100: "Outfit Thin",
    200: "Outfit ExtraLight",
    300: "Outfit Light",
    400: "Outfit Regular",
    500: "Outfit Medium",
    600: "Outfit SemiBold",
    700: "Outfit Bold",
    800: "Outfit ExtraBold",
    900: "Outfit Black",
  };

  return (
    <mesh {...props} ref={ref}>
      <text
        fontWeight={fontWeight || 500}
        position-z={-180}
        // @ts-ignore
        text={text}
        color={color || "#990cff"}
        fontSize={fontSize || 30}
        // @ts-ignore
        font={fonts[fontWeights[fontWeight]] || fonts["Outfit Regular"]}
        anchorX={"center"}
        anchorY={"center"}
      >
        <meshPhongMaterial attach="material" />
      </text>
    </mesh>
  );
}
