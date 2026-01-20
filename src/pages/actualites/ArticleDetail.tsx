import { useEffect, type ReactNode } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Card } from '@/components/common'
import { CTASection } from '@/components/sections'
import { articles } from '@/data/articles'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find((a) => a.slug === slug)

  // Smooth scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!article) {
    return <Navigate to="/actualites" replace />
  }

  const otherArticles = articles.filter((a) => a.id !== article.id).slice(0, 3)

  // Convert markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n')
    const elements: ReactNode[] = []
    let currentList: string[] = []
    let listType: 'ul' | 'ol' | null = null

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType
        elements.push(
          <ListTag key={elements.length} className={listType === 'ul' ? 'list-disc pl-6 mb-4 space-y-2' : 'list-decimal pl-6 mb-4 space-y-2'}>
            {currentList.map((item, i) => (
              <li key={i} className="text-neutral-600">{item}</li>
            ))}
          </ListTag>
        )
        currentList = []
        listType = null
      }
    }

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      // Headers
      if (trimmedLine.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        )
      } else if (trimmedLine.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={index} className="text-xl font-bold text-primary mt-6 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        )
      }
      // Bold text in lists
      else if (trimmedLine.startsWith('- **') || trimmedLine.startsWith('* **')) {
        if (listType !== 'ul') {
          flushList()
          listType = 'ul'
        }
        const text = trimmedLine.replace(/^[-*]\s*/, '')
        currentList.push(text.replace(/\*\*/g, ''))
      }
      // Regular list items
      else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        if (listType !== 'ul') {
          flushList()
          listType = 'ul'
        }
        currentList.push(trimmedLine.replace(/^[-*]\s*/, ''))
      }
      // Numbered lists
      else if (/^\d+\.\s/.test(trimmedLine)) {
        if (listType !== 'ol') {
          flushList()
          listType = 'ol'
        }
        currentList.push(trimmedLine.replace(/^\d+\.\s*/, '').replace(/\*\*/g, ''))
      }
      // Tables (simplified - just show as text for now)
      else if (trimmedLine.startsWith('|')) {
        flushList()
        // Skip table formatting
      }
      // Regular paragraphs
      else if (trimmedLine.length > 0) {
        flushList()
        elements.push(
          <p key={index} className="text-neutral-600 mb-4 leading-relaxed">
            {trimmedLine}
          </p>
        )
      }
    })

    flushList()
    return elements
  }

  return (
    <>
      <SEO
        title={article.seo.title}
        description={article.seo.description}
        canonical={`/actualites/${article.slug}`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-neutral-50 via-white to-accent/5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Link */}
            <Link
              to="/actualites"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux actualités
            </Link>

            {/* Category */}
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-neutral-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} de lecture
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Featured Image */}
            {article.image ? (
              <div className="aspect-video overflow-hidden rounded-2xl mb-10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl mb-10 flex items-center justify-center">
                <span className="text-accent/50 text-sm">Image à la une</span>
              </div>
            )}

            {/* Excerpt */}
            <p className="text-xl text-neutral-700 font-medium mb-8 pb-8 border-b border-neutral-200">
              {article.excerpt}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(article.content)}
            </div>
          </motion.article>
        </Container>
      </section>

      {/* Other Articles */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-8">
              Articles similaires
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {otherArticles.map((otherArticle) => (
                <Card
                  key={otherArticle.id}
                  to={`/actualites/${otherArticle.slug}`}
                  className="group"
                  padding="none"
                >
                  {otherArticle.image ? (
                    <div className="aspect-video overflow-hidden rounded-t-2xl">
                      <img
                        src={otherArticle.image}
                        alt={otherArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-t-2xl" />
                  )}
                  <div className="p-4">
                    <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-2">
                      {otherArticle.category}
                    </span>
                    <h3 className="text-sm font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
                      {otherArticle.title}
                    </h3>
                    <div className="flex items-center gap-1 text-accent text-xs font-medium mt-3">
                      Lire
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/actualites"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
              >
                Voir tous les articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Un projet de rénovation ?"
        description="Contactez-nous pour une étude gratuite et personnalisée de votre projet."
        primaryCTA={{
          label: 'Demander un devis gratuit',
          href: '/contact',
        }}
      />
    </>
  )
}
