import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal Blog - Bascur',
  description: 'Personal Blog - Bascur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
        <div className="container">
          <div className='wrapper'>
            <Navbar/>
            {children}
            <Footer/>
            </div>
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
