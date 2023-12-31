import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import LoginBtn from './LoginBtn'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LogoutBtn from './LogoutBtn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);
  console.log(session)


  return (
    <html lang="en">

      <body className={inter.className}>
        <div className="navbar">
          <Link href="/" className="logo">Bananaforum</Link>
          <Link href="/list">List</Link>
          <Link href="/write">Write</Link>
          {
            !session? <LoginBtn/>: <div className='nav-sub'><div>{session.user?.name}</div> <LogoutBtn/></div>
          }
         
        </div>

        {children}</body>
    </html>
  )
}
