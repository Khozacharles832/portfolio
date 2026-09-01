import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <Image src={assets.logo1} alt="Logo" className="w-36 mx-auto mb-2" />
                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={assets.mail_icon} alt="mail" className="w-6" />
                    khozacharles832@gmail.com

                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10x] mt-12 py-6">
                <p>&copy; 2026 Charles Khoza. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                   <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                   <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                   <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;