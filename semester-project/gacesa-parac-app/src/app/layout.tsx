import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/dist/client/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-zinc-700 p-4">
          <ul className="flex space-x-10 items-center">
            <li><Link href="/" className="text-white hover:bg-mint-100 p-4 hover:text-black">Home</Link></li>
            <li><Link href='/shop' className="text-white hover:underline">Shop</Link></li>
            <li><Link href="/aboutUs" className="text-white hover:underline">About Us</Link></li>
            <li><Link href="/blog?_page=1&_limit=10" className="text-white hover:underline">Blog</Link></li>
            <li><Link href="/signIn" className="text-white hover:underline">Sign In</Link></li>
          </ul>
        </nav>


        {children}
        {/* <footer>
          <p className='centered-content'>Vana Gaćeša & Šime Parać</p>
          <p className='centered-content'>2023 FESB</p>
        </footer> */}</body>
    </html>
  )
}