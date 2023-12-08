// RootLayout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Changed the import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar">
          {/* Logo */}
          <div className="logo-container">
            <img src="" alt="Logo" className="h-8 w-8" />
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/reserve">Reserve</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link
                href="/review?_page=1&_limit=10"
                className="text-white hover:underline"
              >
                Review
              </Link>
            </li>
          </ul>
        </nav>

        {children}
        {/* <footer>
          <p className='centered-content'>Vana Gaćeša & Šime Parać</p>
          <p className='centered-content'>2023 FESB</p>
        </footer> */}
      </body>
    </html>
  );
}
