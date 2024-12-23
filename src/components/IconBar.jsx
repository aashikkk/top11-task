import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

export const IconBar = () => {
    return (
        <div className="relative max-w-full flex justify-between px-7 py-7">
            <div className="flex items-center">
                <img
                    src="https://sponsor.top11india.net/images/files/top-logo.png"
                    alt="Top Logo"
                />
            </div>
            <div className="flex items-center">
                <a
                    href="https://www.facebook.com/top11betindia/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook color="yellow" className="mx-2" size={20} />
                </a>
                <a
                    href="https://twitter.com/top11betindia/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter color="yellow" className="mx-2" size={20} />
                </a>
                <a
                    href="https://www.instagram.com/top11betindia/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram color="yellow" className="mx-2" size={20} />
                </a>
                <a
                    href="https://telegram.me/top11betindia/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTelegram color="yellow" className="mx-2" size={20} />
                </a>
            </div>
        </div>
    );
};
