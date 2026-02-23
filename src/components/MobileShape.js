import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MobileShape({ scene2 }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const phoneWidth = isMobile ? "55vw" : "290px";
  const phoneHeight = isMobile ? "115vw" : "600px";

  return (
    <motion.div
      animate={{
        y: isMobile ? [-4, 4, -4] : [-10, 10, -10],
      }}
      transition={{
        duration: isMobile ? 4 : 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: phoneWidth,
        maxWidth: "290px",
        height: phoneHeight,
        maxHeight: "600px",
        borderRadius: isMobile ? "8vw" : "48px",
        background: "#0c0c0e",
        padding: isMobile ? "1.5vw" : "8px",
        boxShadow:
          "0 0 0 2px rgba(255,255,255,0.05), 0 40px 100px rgba(0,0,0,0.9)",
        transform: `scale(${isMobile ? 1 : 0.6 + scene2 * 0.4})`,
      }}
    >
      {/* INNER SCREEN */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          borderRadius: isMobile ? "6vw" : "40px",
          padding: isMobile ? "4vw" : "20px",
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
            fontSize: isMobile ? "3vw" : "13px",
            color: "white",
            marginBottom: isMobile ? "3vw" : "12px",
          }}
        >
          <span>9:41</span>
          <span>5G 🔋</span>
        </div>

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: isMobile ? "4vw" : "20px",
          }}
        >
          <h3
            style={{
              color: "white",
              margin: 0,
              fontSize: isMobile ? "4.5vw" : "22px",
              fontWeight: 600,
            }}
          >
            Expenses
          </h3>

          <div
            style={{
              width: isMobile ? "8vw" : "34px",
              height: isMobile ? "8vw" : "34px",
              borderRadius: "50%",
              background: "#00c37a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: isMobile ? "4vw" : "20px",
            }}
          >
            +
          </div>
        </div>

        {/* GREEN CARD */}
        <div
          style={{
            background: "linear-gradient(135deg,#003b2a,#00694d)",
            borderRadius: isMobile ? "4vw" : "20px",
            padding: isMobile ? "4vw" : "16px",
            marginBottom: isMobile ? "4vw" : "20px",
          }}
        >
          <div style={{ fontSize: isMobile ? "3vw" : "13px", color: "#a6e9d4" }}>
            You're owed
          </div>

          <div
            style={{
              fontSize: isMobile ? "6vw" : "28px",
              color: "#00ffb3",
              fontWeight: "bold",
              margin: "4px 0",
            }}
          >
            $342.60
          </div>

          <div style={{ fontSize: isMobile ? "3vw" : "13px", color: "#bdebdc" }}>
            from 3 people
          </div>
        </div>

        {/* LIST */}
       <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: isMobile ? "10px" : "12px",
    width: "100%",
  }}
>
  {[
    { icon: "🍣", title: "Dinner at Sushi Spot", sub: "4 people · Today", price: "$87.40" },
    { icon: "🚗", title: "Uber to Airport", sub: "2 people · Yesterday", price: "$34.20" },
    { icon: "🛒", title: "Grocery Run", sub: "3 people · Feb 18", price: "$156.80" },
    { icon: "🎬", title: "Movie Tickets", sub: "4 people · Feb 17", price: "$52.00" },
  ].map((item, index) => (
    <div
      key={index}
      style={{
        background: "#121212",
        borderRadius: isMobile ? "14px" : "18px",
        padding: isMobile ? "8px 10px" : "12px 14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        transform: `translateY(${30 - scene2 * 30}px)`,
        opacity: scene2,
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: isMobile ? "8px" : "12px",
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* ICON */}
        <div
          style={{
            width: isMobile ? "26px" : "36px",
            height: isMobile ? "26px" : "36px",
            borderRadius: "50%",
            background: "#1e1e1e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: isMobile ? "12px" : "16px",
            flexShrink: 0,
          }}
        >
          {item.icon}
        </div>

        {/* TEXT */}
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              color: "white",
              fontSize: isMobile ? "12px" : "14px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              color: "#777",
              fontSize: isMobile ? "10px" : "12px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.sub}
          </div>
        </div>
      </div>

      {/* PRICE */}
      <div
        style={{
          color: "white",
          fontSize: isMobile ? "12px" : "14px",
          fontWeight: 600,
          marginLeft: "8px",
          flexShrink: 0,
        }}
      >
        {item.price}
      </div>
    </div>
  ))}
</div>

        {/* HOME BAR */}
        <div
          style={{
            position: "absolute",
            bottom: isMobile ? "3vw" : "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: isMobile ? "20vw" : "120px",
            height: isMobile ? "1vw" : "4px",
            borderRadius: "3px",
            background: "#444",
          }}
        />
      </div>
    </motion.div>
  );
}