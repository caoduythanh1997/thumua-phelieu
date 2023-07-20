import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {  ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] , weight:"500"})

export const metadata: Metadata = {
  title: 'Thu mua phế liệu miền bắc',
  description: 'Tổng công ty thu mua phế liệu việt nam',
}
export default function RootLayout({children} : {children:ReactNode}) 
{
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className=''></header>
              {children}
        <footer></footer>
        </body>
    </html>
  )
}
