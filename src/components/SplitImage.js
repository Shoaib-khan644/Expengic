import { motion } from "framer-motion";
import { useMemo } from "react";

function verticalCrack() {
  const steps = 8;
  const points = [];
  for (let i = 0; i <= steps; i++) {
    const y = (i / steps) * 100;
    const x = 45 + Math.random() * 10;
    points.push(`${x}% ${y}%`);
  }
  return points;
}

function horizontalCrack() {
  const steps = 8;
  const points = [];
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * 100;
    const y = 45 + Math.random() * 10;
    points.push(`${x}% ${y}%`);
  }
  return points;
}

function diagonalCrack() {
  const steps = 8;
  const points = [];
  for (let i = 0; i <= steps; i++) {
    const p = (i / steps) * 100;
    const offset = Math.random() * 8;
    points.push(`${p + offset}% ${p}%`);
  }
  return points;
}

export default function SplitImage({
  imageURL,
  manualProgress,
  breakType,
}) {
  const move = 450;
  const opacity = 1 - manualProgress;

  const rotateA = useMemo(() => (Math.random() - 0.5) * 40, []);
  const rotateB = useMemo(() => (Math.random() - 0.5) * 40, []);

  const crackLine = useMemo(() => {
    if (breakType === 0) return verticalCrack();
    if (breakType === 1) return horizontalCrack();
    if (breakType === 2) return diagonalCrack();
    return verticalCrack();
  }, [breakType]);

  const baseStyle = {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${imageURL})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // 🔥 IMPORTANT FIX
  if (manualProgress === 0) {
    return (
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <div style={{ ...baseStyle }} />
      </div>
    );
  }

  // ---------- Vertical ----------
  if (breakType === 0) {
    const leftPoly = `polygon(0% 0%, ${crackLine.join(",")}, 0% 100%)`;
    const rightPoly = `polygon(${crackLine.join(",")}, 100% 100%, 100% 0%)`;

    return (
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <motion.div
          style={{
            ...baseStyle,
            clipPath: leftPoly,
            transform: `translateX(${-manualProgress * move}px)
                        rotate(${manualProgress * rotateA}deg)`,
            opacity,
          }}
        />
        <motion.div
          style={{
            ...baseStyle,
            clipPath: rightPoly,
            transform: `translateX(${manualProgress * move}px)
                        rotate(${manualProgress * rotateB}deg)`,
            opacity,
          }}
        />
      </div>
    );
  }

  // ---------- Horizontal ----------
  if (breakType === 1) {
    const topPoly = `polygon(0% 0%, 100% 0%, ${crackLine.join(",")})`;
    const bottomPoly = `polygon(${crackLine.join(",")}, 100% 100%, 0% 100%)`;

    return (
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <motion.div
          style={{
            ...baseStyle,
            clipPath: topPoly,
            transform: `translateY(${-manualProgress * move}px)
                        rotate(${manualProgress * rotateA}deg)`,
            opacity,
          }}
        />
        <motion.div
          style={{
            ...baseStyle,
            clipPath: bottomPoly,
            transform: `translateY(${manualProgress * move}px)
                        rotate(${manualProgress * rotateB}deg)`,
            opacity,
          }}
        />
      </div>
    );
  }

  // ---------- Diagonal ----------
  const polyA = `polygon(0% 0%, ${crackLine.join(",")}, 0% 100%)`;
  const polyB = `polygon(${crackLine.join(",")}, 100% 100%, 100% 0%)`;

  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
      <motion.div
        style={{
          ...baseStyle,
          clipPath: polyA,
          transform: `translate(${-manualProgress * move}px,
                      ${-manualProgress * move}px)
                      rotate(${manualProgress * rotateA}deg)`,
          opacity,
        }}
      />
      <motion.div
        style={{
          ...baseStyle,
          clipPath: polyB,
          transform: `translate(${manualProgress * move}px,
                      ${manualProgress * move}px)
                      rotate(${manualProgress * rotateB}deg)`,
          opacity,
        }}
      />
    </div>
  );
}