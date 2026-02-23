import { motion } from "framer-motion";

export default function Navbar({ progress, isMobile }) {
  return (
    <motion.nav
      animate={{
        opacity: progress < 0.5 ? 1 : 0,
        y: progress < 0.5 ? 0 : -80,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: isMobile ? "60px" : "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "0 16px" : "0 40px",
        boxSizing: "border-box",
        zIndex: 50,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* LEFT LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: isMobile ? "26px" : "32px",
            height: isMobile ? "26px" : "32px",
            background: "#00c37a",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: isMobile ? "14px" : "16px",
          }}
        >
          J
        </div>

        <span
          style={{
            color: "white",
            fontWeight: 600,
            fontSize: isMobile ? "16px" : "18px",
          }}
        >
          Expengic
        </span>
      </div>

      {/* CENTER LINKS (Hidden on Mobile) */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            gap: "40px",
            color: "white",
            fontSize: "15px",
          }}
        >
          <span style={{ cursor: "pointer" }}>Features</span>
          <span style={{ cursor: "pointer" }}>Pricing</span>
        </div>
      )}

      {/* RIGHT BUTTON */}
      <button
        style={{
          background: "#00c37a",
          color: "white",
          border: "none",
          padding: isMobile ? "8px 14px" : "10px 20px",
          borderRadius: "20px",
          cursor: "pointer",
          fontWeight: 500,
          fontSize: isMobile ? "13px" : "14px",
        }}
      >
        {isMobile ? "Download" : "Download Free"}
      </button>
    </motion.nav>
  );
}