import localFont from "next/font/local";
import { ThemeProvider } from "./comoponents/theme-provider";
import "./globals.css";

const plusJakarta = localFont({
  src: [
    { path: "../assets/fonts/PlusJakartaSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/PlusJakartaSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/PlusJakartaSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/PlusJakartaSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-portfolio",
});

export const metadata = {
  title: "Charles Khoza",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} antialiased leading-8 overflow-x-hidden`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
