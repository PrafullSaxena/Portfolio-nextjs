import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { EB_Garamond } from "next/font/google"
import { cn } from "@/lib/utils"

import "./globals.css"
import {AppConstent} from "@data/AppConstent";
import {ThemeProvider} from "@components/theme-provider";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: AppConstent.TITLE,
  description: AppConstent.DESCRIPTION,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en" className={cn(inter.variable, eb_garamond.variable)} suppressHydrationWarning={true}>
          <body className="min-h-[calc(100vh-1px)] flex flex-col font-sans bg-brand-50 text-brand-950 antialiased dark:bg-background dark:text-foreground">
              <ThemeProvider>
                  {children}
              </ThemeProvider>
          </body>
      </html>
    )
}