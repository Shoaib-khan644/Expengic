import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Piece({
  imageURL,
  pieceIndex,
  manualProgress,
}) {
  const randomX = useMemo(() => (Math.random() - 0.5) * 600, []);
  const randomY = useMemo(() => (Math.random() - 0.5) * 600, []);
  const randomRotate = useMemo(() => (Math.random() - 0.5) * 360, []);

  const x = manualProgress * randomX;
  const y = manualProgress * randomY;
  const rotate = manualProgress * randomRotate;
  const opacity = 1 - manualProgress;

  return (
    <motion.div
      style={{
        position: "absolute",
        width: "50%",
        height: "50%",
        left: pieceIndex % 2 === 0 ? 0 : "50%",
        top: pieceIndex < 2 ? 0 : "50%",

        backgroundImage: `url(${imageURL})`,
        backgroundSize: "280px 280px",
        backgroundPosition:
          pieceIndex === 0
            ? "left top"
            : pieceIndex === 1
            ? "right top"
            : pieceIndex === 2
            ? "left bottom"
            : "right bottom",
        backgroundRepeat: "no-repeat",

        transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
        opacity: opacity,
      }}
    />
  );
}