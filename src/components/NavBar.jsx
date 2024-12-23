import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconBar } from "./IconBar";

const NavBar = () => {
    // const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollY(window.scrollY);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    const bgHeight = Math.max(75 - scrollY * 0.1, 0);

    return (
        <section>
            <div
                className="relative w-full"
                style={{ height: `${bgHeight}vh` }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://sponsor.top11india.net/images/files/parallax-bg/back-top.jpg')",
                        height: "100%",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <IconBar />
                    <h1 className="text-2xl text-center font-bold text-white relative top-1/2 transform -translate-y-1/2">
                        ORIGIN OF <span style={{ color: "yellow" }}>TOP11</span>{" "}
                        AND INTRODUCTION
                    </h1>
                    <div className="bg-black items-center justify-center "></div>
                </div>
            </div>
        </section>
    );
};

export default NavBar;
