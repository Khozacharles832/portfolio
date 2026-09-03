import React from "react";

const BrandLogo = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 64"
    role="img"
    aria-label="Charles Khoza"
    className={`h-auto text-ink transition-colors duration-300 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.8 13.5c-3.7-3.1-8.4-4.7-13.4-4.7C7.6 8.8 0 16.4 0 28.2s7.6 19.4 18.5 19.4c5.1 0 9.7-1.7 13.4-4.7l-4.3-6.2c-2.4 2.1-5.6 3.2-9 3.2-6.2 0-10.6-4.8-10.6-11.7s4.4-11.7 10.6-11.7c3.4 0 6.6 1.1 9 3.2l4.2-6.2Z"
      fill="currentColor"
    />
    <text
      x="42"
      y="38"
      fill="currentColor"
      fontFamily="Outfit, sans-serif"
      fontSize="31"
      fontWeight="700"
      letterSpacing="-1.4"
    >
      Charles
    </text>
    <circle cx="218" cy="32" r="6" fill="var(--accent)" />
  </svg>
);

export default BrandLogo;
