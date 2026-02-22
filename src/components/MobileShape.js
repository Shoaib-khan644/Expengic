import { motion } from "framer-motion";

export default function MobileShape({ scene2 }) {
    return (
        <motion.div
            animate={{
                y: [-10, 10, -10],   // up → down → up
            }}
            transition={{
                duration: 3,         // slow movement
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{
                width: "290px",
                height: "600px",
                borderRadius: "48px",
                background: "#0c0c0e",
                padding: "8px",
                boxShadow:
                    "0 0 0 2px rgba(255,255,255,0.05), 0 40px 100px rgba(0,0,0,0.9)",
                transform: `scale(${0.6 + scene2 * 0.4})`,
            }}
        >
            {/* INNER SCREEN */}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: "#000",
                    borderRadius: "40px",
                    padding: "20px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                }}
            >
                {/* STATUS BAR */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "13px",
                        color: "white",
                        marginBottom: "12px",
                    }}
                >
                    <span>9:41</span>
                    <span>📶 5G 🔋</span>
                </div>

                {/* TITLE + PLUS */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "20px",
                    }}
                >
                    <h3
                        style={{
                            color: "white",
                            margin: 0,
                            fontSize: "22px",
                            fontWeight: 600,
                        }}
                    >
                        Expenses
                    </h3>

                    <div
                        style={{
                            width: "34px",
                            height: "34px",
                            borderRadius: "50%",
                            background: "#00c37a",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "20px",
                        }}
                    >
                        +
                    </div>
                </div>

                {/* GREEN SUMMARY CARD */}
                <div
                    style={{
                        background: "linear-gradient(135deg,#003b2a,#00694d)",
                        borderRadius: "20px",
                        padding: "16px",
                        marginBottom: "20px",
                    }}
                >
                    <div style={{ fontSize: "13px", color: "#a6e9d4" }}>
                        You're owed
                    </div>

                    <div
                        style={{
                            fontSize: "28px",
                            color: "#00ffb3",
                            fontWeight: "bold",
                            margin: "4px 0",
                        }}
                    >
                        $342.60
                    </div>

                    <div style={{ fontSize: "13px", color: "#bdebdc" }}>
                        from 3 people
                    </div>
                </div>

                {/* EXPENSE LIST */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {[
                        { icon: "🍣", title: "Dinner at Sushi Spot", sub: "4 people · Today", price: "$87.40" },
                        { icon: "🚗", title: "Uber to Airport", sub: "2 people · Yesterday", price: "$34.20" },
                        { icon: "🛒", title: "Grocery Run", sub: "3 people · Feb 18", price: "$156.80" },
                        { icon: "🎬", title: "Movie Tickets", sub: "4 people · Feb 17", price: "$52.00" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            style={{
                                background: "#121212",
                                borderRadius: "18px",
                                padding: "12px 14px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                transform: `translateY(${30 - scene2 * 30}px)`,
                                opacity: scene2,
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                        background: "#1e1e1e",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "16px",
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <div>
                                    <div style={{ color: "white", fontSize: "14px" }}>
                                        {item.title}
                                    </div>
                                    <div style={{ color: "#777", fontSize: "12px" }}>
                                        {item.sub}
                                    </div>
                                </div>
                            </div>

                            <div style={{ color: "white", fontSize: "14px" }}>
                                {item.price}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* BOTTOM HOME BAR */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "120px",
                        height: "4px",
                        borderRadius: "3px",
                        background: "#444",
                    }}
                />
            </div>
        </motion.div>
    );
}