"use client";

import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="items-center h-full">
      <div className="flex justify-end header font-quicksand font-bold text-3xl p-3">
        <Link href="/main">
          <h3>toxicity</h3>
        </Link>
      </div>
      <div className="main-container font- no-scrollbar h-full">{children}</div>
      <nav className="navbar flex flex-row justify-around py-3 md:flex-col md:h-svh md:w-16 md:items-center">
        <Link href="/main">
          <svg
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12.5868C1 11.8209 1 11.438 1.09871 11.0854C1.18613 10.773 1.32983 10.4793 1.52271 10.2185C1.74045 9.92408 2.04269 9.689 2.64719 9.21883L11.6903 2.18533C12.1587 1.821 12.3929 1.63883 12.6516 1.5688C12.8797 1.50701 13.1203 1.50701 13.3484 1.5688C13.6071 1.63883 13.8413 1.821 14.3097 2.18533L23.3528 9.21884C23.9573 9.689 24.2596 9.92408 24.4773 10.2185C24.6701 10.4793 24.8139 10.773 24.9013 11.0854C25 11.438 25 11.8209 25 12.5868V22.2333C25 23.7268 25 24.4735 24.7093 25.044C24.4537 25.5457 24.0457 25.9537 23.544 26.2093C22.9736 26.5 22.2268 26.5 20.7333 26.5H5.26667C3.77319 26.5 3.02645 26.5 2.45603 26.2093C1.95425 25.9537 1.54631 25.5457 1.29065 25.044C1 24.4735 1 23.7268 1 22.2333V12.5868Z"
              stroke="#2D316F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link href="/main/add-post">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 15.5V7.5M9.5 11.5H17.5M10.7 23.1L12.6467 25.6956C12.9361 26.0816 13.0809 26.2745 13.2584 26.3436C13.4137 26.404 13.5863 26.404 13.7416 26.3436C13.9191 26.2745 14.0639 26.0816 14.3533 25.6956L16.3 23.1C16.6908 22.5788 16.8863 22.3183 17.1247 22.1193C17.4425 21.8541 17.8177 21.6664 18.2207 21.5713C18.5228 21.5 18.8485 21.5 19.5 21.5C21.3637 21.5 22.2956 21.5 23.0308 21.1955C24.0108 20.7896 24.7896 20.0108 25.1955 19.0308C25.5 18.2956 25.5 17.3637 25.5 15.5V7.9C25.5 5.65979 25.5 4.53968 25.064 3.68404C24.6805 2.93139 24.0687 2.31947 23.316 1.93597C22.4603 1.5 21.3403 1.5 19.1 1.5H7.9C5.65979 1.5 4.53968 1.5 3.68404 1.93597C2.93139 2.31947 2.31947 2.93139 1.93597 3.68404C1.5 4.53968 1.5 5.65979 1.5 7.9V15.5C1.5 17.3637 1.5 18.2956 1.80448 19.0308C2.21045 20.0108 2.98916 20.7896 3.96927 21.1955C4.70435 21.5 5.63624 21.5 7.5 21.5C8.15144 21.5 8.47716 21.5 8.77935 21.5713C9.18225 21.6664 9.55749 21.8541 9.87533 22.1193C10.1137 22.3183 10.3091 22.5788 10.7 23.1Z"
              stroke="#2D316F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link href="/main/search">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5 25.5L20.8335 20.8333M24.1667 12.8333C24.1667 19.0925 19.0925 24.1667 12.8333 24.1667C6.57411 24.1667 1.5 19.0925 1.5 12.8333C1.5 6.57411 6.57411 1.5 12.8333 1.5C19.0925 1.5 24.1667 6.57411 24.1667 12.8333Z"
              stroke="#2D316F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link href="/main/profile/0">
          <svg
            width="25"
            height="27"
            viewBox="0 0 25 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1666 25.5C23.1666 23.6392 23.1666 22.7089 22.937 21.9519C22.42 20.2473 21.086 18.9133 19.3814 18.3963C18.6244 18.1667 17.6941 18.1667 15.8333 18.1667H9.16665C7.3059 18.1667 6.37551 18.1667 5.61846 18.3963C3.91391 18.9133 2.58003 20.2473 2.06297 21.9519C1.83331 22.7089 1.83331 23.6392 1.83331 25.5M18.5 7.5C18.5 10.8137 15.8137 13.5 12.5 13.5C9.18627 13.5 6.49998 10.8137 6.49998 7.5C6.49998 4.18629 9.18627 1.5 12.5 1.5C15.8137 1.5 18.5 4.18629 18.5 7.5Z"
              stroke="#2D316F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
