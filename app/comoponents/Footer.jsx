import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import BrandLogo from "./BrandLogo";

const Footer = () => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <BrandLogo className="w-36 mx-auto mb-2" />
                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={assets.mail_icon} alt="mail" className="w-6 dark:invert" />
                    khozacharles832@gmail.com

                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-line mx-[10%] mt-12 py-6 text-muted">
                <p>&copy; 2026 Charles Khoza. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                   <li><a href="https://x.com/CharlesKhoza17" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                   <li><a href="https://linkedin.com/in/charles-khoza-a7990a241" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                   <li><a href="https://github.com/Khozacharles832" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;
