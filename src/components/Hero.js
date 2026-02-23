import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import SplitImage from "./SplitImage";
import SceneTwo from "./SceneTwo";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);
    const [progress, setProgress] = useState(0);

    /* =========================
       SCREEN DETECTION
    ========================== */
    useEffect(() => {
        const check = () => {
            setIsMobile(window.innerWidth < 768);
        };

        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    /* =========================
       SCROLL CONTROL
    ========================== */
    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = window.innerHeight * 3;
            const value = Math.min(window.scrollY / maxScroll, 1);
            setProgress(value);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* =========================
       SCENE SPLIT
    ========================== */
    const scene1 = Math.min(progress * 2, 1);
    const scene2 = Math.max((progress - 0.5) * 2, 0);

    /* =========================
       IMAGE DATA (Responsive but same layout)
    ========================== */
    const images = [
        {
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
            top: isMobile ? "2%" : "0%",
            left: isMobile ? "32%" : "40%",
            rotate: "-5deg",
            width: isMobile ? "110px" : "320px",
            z: 8,
        },
        {
            url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600",
            top: isMobile ? "5%" : "5%",
            left: isMobile ? "60%" : "65%",
            rotate: "8deg",
            width: isMobile ? "95px" : "260px",
            z: 6,
        },
        {
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
            top: isMobile ? "20%" : "25%",
            left: isMobile ? "8%" : "15%",
            rotate: "-12deg",
            width: isMobile ? "105px" : "300px",
            z: 5,
        },
        {
            url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600",
            top: isMobile ? "22%" : "30%",
            left: isMobile ? "55%" : "60%",
            rotate: "14deg",
            width: isMobile ? "95px" : "260px",
            z: 4,
        },
        {
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
            top: isMobile ? "38%" : "55%",
            left: isMobile ? "22%" : "30%",
            rotate: "-6deg",
            width: isMobile ? "110px" : "290px",
            z: 7,
        },
        {
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
            top: isMobile ? "40%" : "60%",
            left: isMobile ? "48%" : "55%",
            rotate: "10deg",
            width: isMobile ? "100px" : "280px",
            z: 3,
        },
        {
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
            top: isMobile ? "30%" : "45%",
            left: isMobile ? "-2%" : "5%",
            rotate: "-15deg",
            width: isMobile ? "90px" : "250px",
            z: 2,
        },
        {
            url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600",
            top: isMobile ? "50%" : "70%",
            left: isMobile ? "38%" : "45%",
            rotate: "6deg",
            width: isMobile ? "95px" : "260px",
            z: 1,
        },
    ];

    return (
        <>
            {/* Scroll height */}
            <div style={{ height: "400vh" }} />

            {/* Fixed container */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "black",
                    overflow: "hidden",
                }}
            >
                <Navbar progress={progress} isMobile={isMobile} />

                {/* =========================
            SCENE 1
        ========================== */}
                <motion.div
                    style={{
                        opacity: 1 - scene2,
                        scale: 1 - scene2 * 0.3,
                    }}
                >
                    {/* HERO TEXT */}
                    <motion.div
                        style={{
                            position: "absolute",
                            top: isMobile ? "45%" : "55%",
                            left: "50%",
                            transform: `translate(-50%, -50%) translateY(${-scene1 * 100}px)`,
                            textAlign: "center",
                            color: "white",
                            zIndex: 20,
                            opacity: 1 - scene1,
                            filter: `blur(${scene1 * 6}px)`,
                            width: "90%",
                            maxWidth: "900px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: isMobile ? "25px" : "64px",
                                lineHeight: 1.2,
                                margin: 0,
                            }}
                        >
                            Stop photographing receipts into a notes app. Stop texting "you owe me." Stop maintaining that spreadsheet.
                        </p>
                    </motion.div>

                    {/* COLLAGE */}
                    {/* IMAGE COLLAGE */}
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: isMobile
                                ? "translate(-50%, -50%) scale(0.75)"
                                : "translate(-50%, -50%)",
                            width: isMobile ? "100%" : "950px",
                            height: isMobile ? "520px" : "750px",
                        }}
                    >
                        {images.map((img, index) => {
                            const delayStep = 0.07;
                            const speed = 2.3;

                            const delay = index * delayStep;
                            let imageProgress = (scene1 - delay) * speed;

                            if (imageProgress < 0) imageProgress = 0;
                            if (imageProgress > 1) imageProgress = 1;

                            return (
                                <div
                                    key={index}
                                    style={{
                                        position: "absolute",

                                        /* Compress positions slightly on mobile */
                                        top: isMobile
                                            ? `calc(${img.top} * 0.8)`
                                            : img.top,

                                        left: isMobile
                                            ? `calc(${img.left} * 0.85)`
                                            : img.left,

                                        transform: isMobile
                                            ? `rotate(${parseFloat(img.rotate) * 0.6}deg)`
                                            : `rotate(${img.rotate})`,

                                        width: isMobile
                                            ? "45vw"
                                            : img.width,

                                        zIndex: img.z,
                                    }}
                                >
                                    <SplitImage
                                        imageURL={img.url}
                                        manualProgress={imageProgress}
                                        breakType={index % 4}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* =========================
            SCENE 2
        ========================== */}
                <SceneTwo scene2={scene2} isMobile={isMobile} />
            </div>
        </>
    );
}