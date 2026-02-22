import MobileShape from "./MobileShape";
import { motion } from "framer-motion";

export default function SceneTwo({ scene2 }) {
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
      }}
    >
      {/* PHONE */}
     <MobileShape scene2={scene2} />

      {/* TITLE */}
      <motion.h1
        style={{
          fontSize: "72px",
          textAlign: "center",
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
          marginTop: "20px",
          fontSize: "20px",
          maxWidth: "650px",
          textAlign: "center",
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
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          gap: "30px",
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
            padding: "14px 28px",
            borderRadius: "30px",
            fontSize: "16px",
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
            fontSize: "16px",
          }}
        >
          See how it works ↓
        </span>
      </motion.div>
    </motion.div>
  );
}