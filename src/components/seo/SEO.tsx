import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/data/siteConfig'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export function SEO({
  title,
  description = siteConfig.description,
  canonical,
  image = '/og-image.jpg',
  type = 'website',
  noindex = false,
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`

  const pageUrl = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={`${siteConfig.url}${image}`} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteConfig.url}${image}`} />

      {/* Schema.org LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
          email: siteConfig.contact.email,
          telephone: siteConfig.contact.phone || undefined,
          address: siteConfig.contact.address
            ? {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.contact.address,
                addressCountry: 'FR',
              }
            : undefined,
        })}
      </script>
    </Helmet>
  )
}
