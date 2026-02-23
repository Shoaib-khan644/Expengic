import MobileShape from "./MobileShape";
import { motion } from "framer-motion";

export default function SceneTwo({ scene2, isMobile }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        opacity: scene2,
        scale: 0.85 + scene2 * 0.15,
        padding: isMobile ? "20px" : "0px",
        textAlign: "center",
      }}
    >
      {/* PHONE */}
      <MobileShape scene2={scene2} isMobile={isMobile} />

      {/* TITLE */}
      <motion.h1
        style={{
          fontSize: isMobile ? "34px" : "72px",
          lineHeight: 1.15,
          marginTop: isMobile ? "20px" : "40px",
          transform: `translateY(${100 - scene2 * 100}px)`,
          opacity: scene2,
        }}
      >
        Split expenses.
        <br />
        Settle in seconds.
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        style={{
          marginTop: "18px",
          fontSize: isMobile ? "16px" : "20px",
          maxWidth: isMobile ? "90%" : "650px",
          transform: `translateY(${140 - scene2 * 140}px)`,
          opacity: scene2,
        }}
      >
        Snap any receipt, split it with your group,
        and watch the math sort itself out.
      </motion.p>

      {/* CTA SECTION */}
      <motion.div
        style={{
          marginTop: isMobile ? "30px" : "40px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: isMobile ? "16px" : "30px",
          transform: `translateY(${200 - scene2 * 200}px)`,
          opacity: scene2,
        }}
      >
        {/* DOWNLOAD BUTTON */}
        <button
          style={{
            background: "#00c37a",
            color: "white",
            border: "none",
            padding: isMobile ? "12px 20px" : "14px 28px",
            borderRadius: "30px",
            fontSize: isMobile ? "14px" : "16px",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          Download for iPhone — Free
        </button>

        {/* LINK */}
        <span
          style={{
            color: "#00c37a",
            cursor: "pointer",
            fontSize: isMobile ? "14px" : "18px",
          }}
        >
          See how it works ↓
        </span>
      </motion.div>
    </motion.div>
  );
}