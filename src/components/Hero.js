import { useEffect, useState } from "react";
import SplitImage from "./SplitImage";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Hero() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = window.innerHeight * 1.8;
            const value = Math.min(window.scrollY / maxScroll, 1);
            setProgress(value);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const images = [
        { url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600", top: "0%", left: "40%", rotate: "-5deg", width: "320px", z: 8 },
        { url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600", top: "5%", left: "65%", rotate: "8deg", width: "260px", z: 6 },
        { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600", top: "25%", left: "15%", rotate: "-12deg", width: "300px", z: 5 },
        { url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600", top: "30%", left: "60%", rotate: "14deg", width: "260px", z: 4 },
        { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600", top: "55%", left: "30%", rotate: "-6deg", width: "290px", z: 7 },
        { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600", top: "60%", left: "55%", rotate: "10deg", width: "280px", z: 3 },
        { url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600", top: "45%", left: "5%", rotate: "-15deg", width: "250px", z: 2 },
        { url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600", top: "70%", left: "45%", rotate: "6deg", width: "260px", z: 1 },
    ];

    return (
        <>
            <div style={{ height: "300vh" }} />

            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "black",
                    overflow: "hidden",
                }}
            >
                {/* ✅ PASTE IT HERE */}
                <Navbar progress={progress} />

                {/* 🔥 CENTER TEXT */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: "55%",
                        left: "50%",
                        transform: `translate(-50%, -50%) translateY(${-progress * 120}px)`,
                        textAlign: "center",
                        color: "white",
                        zIndex: 20,
                        opacity: 1 - progress * 1.2,
                        filter: `blur(${progress * 6}px)`,
                        width: "100%",
                        maxWidth: "900px",
                    }}
                >
                    

                    <p style={{ fontSize: "22px", marginTop: "20px" }}>
                        Stop photographing receipts into a notes app. Stop texting "you<br></br> owe me." Stop maintaining that spreadsheet.
                    </p>
                </motion.div>

                {/* 🔥 IMAGE COLLAGE */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "950px",
                        height: "750px",
                        position: "relative",
                    }}
                >
                    {images.map((img, index) => {
                        const delayStep = 0.07;
                        const speed = 2.3;

                        const delay = index * delayStep;
                        let imageProgress = (progress - delay) * speed;

                        if (imageProgress < 0) imageProgress = 0;
                        if (imageProgress > 1) imageProgress = 1;

                        return (
                            <div
                                key={index}
                                style={{
                                    position: "absolute",
                                    top: img.top,
                                    left: img.left,
                                    transform: `rotate(${img.rotate})`,
                                    width: img.width,
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
            </div>
        </>
    );
}