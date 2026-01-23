import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Phone, Mail } from 'lucide-react'
import { mainNavigation } from '@/data/navigation'
import { siteConfig } from '@/data/siteConfig'

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label)
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden bg-white border-t border-neutral-100 overflow-hidden"
    >
      <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
        <nav className="px-4 py-4 space-y-1">
          {mainNavigation.map((item) => (
            <div key={item.label}>
              {item.items ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-primary font-medium rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-neutral-400" />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedItem === item.label ? 'auto' : 0,
                      opacity: expandedItem === item.label ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 py-2 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          onClick={onClose}
                          className="block px-4 py-2.5 text-sm text-neutral-600 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </>
              ) : (
                <Link
                  to={item.href || '#'}
                  onClick={onClose}
                  className="block px-4 py-3 text-primary font-medium rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="px-4 py-4 border-t border-neutral-100">
          <div className="space-y-3">
            {siteConfig.contact.phone && (
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 px-4 py-3 bg-neutral-50 rounded-lg text-primary hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 block">Appelez-nous</span>
                  <span className="font-semibold">{siteConfig.contact.phone}</span>
                </div>
              </a>
            )}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 px-4 py-3 bg-neutral-50 rounded-lg text-primary hover:text-accent transition-colors"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 block">Écrivez-nous</span>
                <span className="font-semibold text-sm">{siteConfig.contact.email}</span>
              </div>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mt-4 py-4 border-t border-neutral-100">
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            )}
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            )}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            onClick={onClose}
            className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
          >
            <Phone className="w-5 h-5" />
            Demander un devis gratuit
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
