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
      <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
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
                className="flex items-center gap-3 px-4 py-3 text-primary hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-medium">{siteConfig.contact.phone}</span>
              </a>
            )}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 px-4 py-3 text-primary hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span className="font-medium">{siteConfig.contact.email}</span>
            </a>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            onClick={onClose}
            className="mt-4 w-full flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
