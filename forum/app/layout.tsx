import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

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
      <div className="navbar"> 
  <Link href="/" className="logo">Appleforum</Link> 
  <Link href="/list">List</Link> 
</div>  
        
        {children}</body>
    </html>
  )
}
