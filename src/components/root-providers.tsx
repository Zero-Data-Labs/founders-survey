"use client"

import { type ReactNode, Suspense } from "react"

import { ThemesProvider } from "@/features/themes/themes-provider"

export interface RootProvidersProps {
  children: ReactNode
}

export function RootProviders(props: RootProvidersProps) {
  const { children } = props

  return (
    <Suspense>
      <ThemesProvider>{children}</ThemesProvider>
    </Suspense>
  )
}
RootProviders.displayName = "RootProviders"
