"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function Provider({
                                  children
                              }: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
    >{children}</NextThemesProvider>
}


export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <NextThemesProvider attribute="class" defaultTheme='system' enableSystem>{children}</NextThemesProvider>
}