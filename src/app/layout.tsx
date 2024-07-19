'use client'
import { Inter } from "next/font/google";
import "@/assets/scss/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from 'styled-components';
import { useEffect } from "react";
import ico from '@/assets/img/favicon.png';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!@/assets/scss/globals.scss');

  useEffect(() => {
    if(theme) console.log(theme)
  }, [theme]);   

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <link rel="icon" type="image/png" href={ico?.src} />
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}