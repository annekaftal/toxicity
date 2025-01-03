"use client";

import localFont from "next/font/local";
import "./globals.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";
import Shape from "./Shape";


const quickSand = localFont({
  src: "./fonts/Quicksand-VariableFont_wght.ttf",
  variable: "--font-quicksand",
  weight: "100 900",
});

const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const container = useRef<HTMLBodyElement | null>(null);
  const pathname = usePathname();
  const { contextSafe } = useGSAP();


  const animateGradient = contextSafe((newStyle: string, duration: number) => {
    gsap.to(container.current, {
      duration: duration,
      ease: "power4.inOut",
      backgroundAttachment: "fixed",
      background: newStyle,
    });
  });

  const loginBackgroundStyle = `
    radial-gradient(circle at 20% 30%, #d7eaff, transparent 60%),
    radial-gradient(circle at 70% 40%, #ff8580, transparent 50%),
    radial-gradient(circle at 40% 70%, #9ba0ff, transparent 70%),
    radial-gradient(circle at 85% 85%, #b2ffd8, transparent 50%),
    linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(95deg, #e1f4ff, #ff7741)`;

  const registerBackgroundStyle = `
    radial-gradient(circle at 90% 70%, #d7eaff, transparent 50%),
    radial-gradient(circle at 20% 90%, #ff8580, transparent 70%),
    radial-gradient(circle at 95% 15%, #9ba0ff, transparent 50%),
    radial-gradient(circle at 20% 35%, #b2ffd8, transparent 50%),
    linear-gradient(to bottom right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)),
    linear-gradient(135deg, #e1f4ff, #ff7741)`;

  const mainBackgroundStyle = `
    radial-gradient(circle at 10% 20%, #fbcaca, transparent 70%),
    radial-gradient(circle at 70% 25%, #b2ffd8, transparent 70%),
    radial-gradient(circle at 20% 80%, #ff8580, transparent 55%),
    radial-gradient(circle at 85% 70%, #9ba0ff, transparent 70%),
    linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(144deg, #b2ffd8, #e1f4ff)`;

  const addPostBackgroundStyle = `
    radial-gradient(circle at 90% 90%, #75e8d6, transparent 40%),
    radial-gradient(circle at 70% 65%, #ffffff, transparent 40%),
    radial-gradient(circle at 20% 80%, #e9a9a9, transparent 70%),
    radial-gradient(circle at 25% 30%, #ff9b9b, transparent 70%),
    linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(232deg, #6ffdf6ab, #ffac00)`;

  const searchBackgroundStyle = `
    radial-gradient(circle at 10% 10%, #75e8d6, transparent 60%),
    radial-gradient(circle at 30% 85%, #ffffff, transparent 30%),
    radial-gradient(circle at 80% 10%, #f4a2a2, transparent 60%),
    radial-gradient(circle at 25% 30%, #ff9b9b, transparent 90%),
    linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(0deg, #bfabf7, #ffac00)`;

  const profileBackgroundStyle = `
    radial-gradient(circle at 45% 90%, #75e8d6, transparent 80%),
    radial-gradient(circle at 80% 85%, #ffffff, transparent 90%),
    radial-gradient(circle at 80% 10%, #f4a2a2, transparent 60%),
    radial-gradient(circle at 25% 30%, #ff9b9b, transparent 90%),
    linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(0deg, #f79696, #ffac00)`;

  useEffect(() => {
    if (pathname === "/auth/register") {
      animateGradient(registerBackgroundStyle, 2.5);
    }

    if (pathname === "/auth/login") {
      animateGradient(loginBackgroundStyle, 2.5);
    }

    if (pathname === "/main") {
      animateGradient(mainBackgroundStyle, 1);
    }

    if (pathname === "/main/add-post") {
      animateGradient(addPostBackgroundStyle, 1);
    }

    if (pathname === "/main/search") {
      animateGradient(searchBackgroundStyle, 1);
    }

    if (pathname.startsWith("/main/profile")) {
      animateGradient(profileBackgroundStyle, 1);
    }
  });

  return (
    <html lang="en">
        <body
          className={`${inter.variable} ${quickSand.variable} bg-clip-content container antialiased`}
          ref={container}
          >
            <Providers>
              {pathname === "/main" &&
                <Shape />
              } 
              {children}
          </Providers>
        </body>
    </html>
  );
}
