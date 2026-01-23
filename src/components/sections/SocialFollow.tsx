import { motion } from 'framer-motion'
import { Linkedin, Facebook, Instagram } from 'lucide-react'
import { Container } from '@/components/common'
import { siteConfig } from '@/data/siteConfig'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: siteConfig.social.linkedin,
    icon: Linkedin,
    color: 'hover:bg-[#0077b5]',
  },
  {
    name: 'Facebook',
    url: siteConfig.social.facebook,
    icon: Facebook,
    color: 'hover:bg-[#1877f2]',
  },
  {
    name: 'Instagram',
    url: siteConfig.social.instagram,
    icon: Instagram,
    color: 'hover:bg-[#E4405F]',
  },
]

interface SocialFollowProps {
  className?: string
}

export function SocialFollow({ className }: SocialFollowProps) {
  return (
    <section className={`py-12 lg:py-16 bg-primary ${className || ''}`}>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Suivez-nous sur les réseaux sociaux
            </h2>
            <p className="text-white/70">
              Restez informé de nos actualités et projets
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-3 px-6 py-3 bg-white/10 rounded-lg text-white transition-all duration-300 ${social.color} hover:text-white`}
              >
                <social.icon className="w-6 h-6" />
                <span className="font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
