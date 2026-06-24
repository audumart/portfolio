import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Martins Audu, Designer & Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#415a77" }} />,
    { ...size }
  );
}
