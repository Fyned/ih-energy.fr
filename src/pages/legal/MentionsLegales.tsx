import { SEO } from '@/components/seo'
import { Container } from '@/components/common'
import { Hero } from '@/components/sections'
import { siteConfig } from '@/data/siteConfig'

export function MentionsLegales() {
  return (
    <>
      <SEO
        title="Mentions Légales"
        description="Mentions légales du site ih-energy.fr - ISO Home Energy"
        canonical="/mentions-legales"
        noindex
      />

      <Hero title="Mentions Légales" variant="centered" />

      <section className="py-20 bg-white">
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <h2>Éditeur du site</h2>
            <p>
              <strong>{siteConfig.name}</strong>
              <br />
              {siteConfig.contact.address || '[Adresse à compléter]'}
              <br />
              Email : {siteConfig.contact.email}
              <br />
              {siteConfig.contact.phone && `Téléphone : ${siteConfig.contact.phone}`}
            </p>

            <h2>Hébergement</h2>
            <p>[Informations sur l'hébergeur à compléter]</p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est
              protégé par le droit d'auteur. Toute reproduction, même partielle, est
              interdite sans autorisation préalable.
            </p>

            <h2>Responsabilité</h2>
            <p>
              Les informations fournies sur ce site le sont à titre indicatif et ne
              sauraient engager la responsabilité de {siteConfig.name}. Nous nous
              efforçons de maintenir des informations exactes et à jour.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Les données personnelles collectées via les formulaires de ce site sont
              destinées uniquement à {siteConfig.name} et ne seront en aucun cas
              cédées à des tiers. Conformément à la loi Informatique et Libertés et au
              RGPD, vous disposez d'un droit d'accès, de rectification et de
              suppression de vos données.
            </p>
            <p>
              Pour exercer ce droit, vous pouvez nous contacter à l'adresse :{' '}
              {siteConfig.contact.email}
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et
              analyser le trafic. En continuant à naviguer sur ce site, vous acceptez
              l'utilisation de cookies.
            </p>

            <h2>Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites externes. {siteConfig.name}{' '}
              n'est pas responsable du contenu de ces sites tiers.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas
              de litige, les tribunaux français seront seuls compétents.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
