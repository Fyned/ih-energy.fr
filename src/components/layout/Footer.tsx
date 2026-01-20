import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'
import { Container } from '@/components/common'
import { footerNavigation } from '@/data/navigation'
import { siteConfig } from '@/data/siteConfig'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <img
                  src="/header.svg"
                  alt={siteConfig.name}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-neutral-400 mb-6 max-w-sm">
                {siteConfig.tagline}. Votre expert en isolation et rénovation énergétique en France.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {siteConfig.contact.phone && (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 text-neutral-300 hover:text-accent transition-colors"
                  >
                    <Phone className="w-5 h-5 text-accent" />
                    {siteConfig.contact.phone}
                  </a>
                )}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-neutral-300 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  {siteConfig.contact.email}
                </a>
                {siteConfig.contact.address && (
                  <div className="flex items-start gap-3 text-neutral-300">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    {siteConfig.contact.address}
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
              <ul className="space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-neutral-400 hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aides */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Les Aides</h3>
              <ul className="space-y-3">
                {footerNavigation.aides.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-neutral-400 hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">L'entreprise</h3>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-neutral-400 hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-sm">
              &copy; {currentYear} {siteConfig.name}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-neutral-400 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
