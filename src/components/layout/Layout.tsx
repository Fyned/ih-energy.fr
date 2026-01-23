import { type ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* pt-16 for mobile (no top bar), lg:pt-[7.5rem] for desktop (top bar + main header) */}
      <main className="flex-1 pt-16 lg:pt-[7.5rem]">{children}</main>
      <Footer />
    </div>
  )
}
