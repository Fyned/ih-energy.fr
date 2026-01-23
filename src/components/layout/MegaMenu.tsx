import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import type { NavItem } from '@/data/navigation'
import { cn } from '@/utils/cn'

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
        isLargeMenu ? 'w-[550px]' : 'w-[320px]'
      )}
    >
      <div className="p-2">
        <div className={cn('grid gap-1', isLargeMenu ? 'grid-cols-2' : 'grid-cols-1')}>
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-accent/5 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <span className="font-medium text-primary group-hover:text-accent transition-colors">
                  {item.label}
                </span>
                {item.description && (
                  <p className="mt-0.5 text-xs text-neutral-500 line-clamp-1">
                    {item.description}
                  </p>
                )}
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-neutral-50 px-4 py-3 border-t border-neutral-100">
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
