import { motion } from "framer-motion";

export default function Navbar({ progress }) {
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
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 40px",
                boxSizing: "border-box",
                zIndex: 50,
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(8px)",
            }}
        >
            {/* LEFT LOGO */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                    style={{
                        width: "32px",
                        height: "32px",
                        background: "#00c37a",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    J
                </div>

                <span style={{ color: "white", fontWeight: 600 }}>
                    Expengic
                </span>
            </div>

            {/* CENTER LINKS */}
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

            {/* RIGHT BUTTON */}
            <button
                style={{
                    background: "#00c37a",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontWeight: 500,
                }}
            >
                Download Free
            </button>
        </motion.nav>
    );
}