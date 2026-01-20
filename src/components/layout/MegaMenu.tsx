import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home,
  Flame,
  Sun,
  Droplets,
  Wind,
  Award,
  Zap,
  Percent,
  PiggyBank,
  Building,
  Briefcase,
  ChevronRight,
} from 'lucide-react'
import type { NavItem } from '@/data/navigation'
import { cn } from '@/utils/cn'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  flame: Flame,
  sun: Sun,
  droplets: Droplets,
  wind: Wind,
  award: Award,
  zap: Zap,
  percent: Percent,
  'piggy-bank': PiggyBank,
  building: Building,
  briefcase: Briefcase,
}

interface MegaMenuProps {
  items: NavItem[]
  category: string
}

export function MegaMenu({ items, category }: MegaMenuProps) {
  const isLargeMenu = items.length > 5

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden',
        isLargeMenu ? 'w-[600px]' : 'w-[400px]'
      )}
    >
      <div className="p-2">
        <div className={cn('grid gap-1', isLargeMenu ? 'grid-cols-2' : 'grid-cols-1')}>
          {items.map((item) => {
            const Icon = item.icon ? iconMap[item.icon] : null
            return (
              <Link
                key={item.href}
                to={item.href}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors"
              >
                {Icon && (
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-accent group-hover:text-white" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary group-hover:text-accent transition-colors">
                      {item.label}
                    </span>
                    <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                  {item.description && (
                    <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-100">
        <Link
          to={category === 'Nos Services' ? '/nos-services' : category === 'Les Aides' ? '/les-aides' : '/iso-home-energy'}
          className="flex items-center justify-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
        >
          Voir tout
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}
