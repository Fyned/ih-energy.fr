import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Linkedin, Facebook, Instagram } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { Container } from '@/components/common'
import { mainNavigation } from '@/data/navigation'
import { siteConfig } from '@/data/siteConfig'
import { cn } from '@/utils/cn'
import { MegaMenu } from './MegaMenu'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveMenu(null)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo + Social Icons */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/header.svg"
                alt={siteConfig.name}
                className="h-12 w-auto"
              />
            </Link>

            {/* Social Media Icons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.items && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {item.items ? (
                  <Link
                    to={item.href || '#'}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                      activeMenu === item.label || location.pathname.startsWith(item.href || '')
                        ? 'text-accent bg-accent/5'
                        : 'text-primary hover:text-accent hover:bg-accent/5'
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                      location.pathname === item.href
                        ? 'text-accent bg-accent/5'
                        : 'text-primary hover:text-accent hover:bg-accent/5'
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu */}
                <AnimatePresence>
                  {item.items && activeMenu === item.label && (
                    <MegaMenu items={item.items} category={item.label} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {siteConfig.contact.phone && (
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{siteConfig.contact.phone}</span>
              </a>
            )}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  )
}
