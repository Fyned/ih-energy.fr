import { SEO } from '@/components/seo'
import { Container } from '@/components/common'
import { Hero } from '@/components/sections'
import { siteConfig } from '@/data/siteConfig'

export function Confidentialite() {
  return (
    <>
      <SEO
        title="Politique de Confidentialité"
        description="Politique de confidentialité et de protection des données personnelles - ISO Home Energy"
        canonical="/confidentialite"
        noindex
      />

      <Hero title="Politique de Confidentialité" variant="centered" />

      <section className="py-20 bg-white">
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <p>
              La présente politique de confidentialité décrit comment {siteConfig.name}{' '}
              collecte, utilise et protège les informations personnelles que vous nous
              fournissez lors de l'utilisation de notre site web.
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est :
              <br />
              <strong>{siteConfig.name}</strong>
              <br />
              Email : {siteConfig.contact.email}
            </p>

            <h2>2. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Adresse postale (si nécessaire pour le service)</li>
              <li>Données de navigation (cookies, adresse IP)</li>
            </ul>

            <h2>3. Finalités du traitement</h2>
            <p>Vos données sont collectées pour les finalités suivantes :</p>
            <ul>
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Vous accompagner dans vos projets de rénovation énergétique</li>
              <li>Vous informer sur nos services et les aides disponibles</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2>4. Base légale du traitement</h2>
            <p>
              Le traitement de vos données repose sur votre consentement lors de la
              soumission du formulaire de contact, et sur l'exécution d'un contrat
              lorsque vous faites appel à nos services.
            </p>

            <h2>5. Destinataires des données</h2>
            <p>
              Vos données personnelles sont destinées uniquement aux services internes
              de {siteConfig.name}. Elles ne sont en aucun cas cédées ou vendues à des
              tiers.
            </p>

            <h2>6. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant une durée de 3 ans à compter de
              votre dernière interaction avec nous, ou plus longtemps si la loi
              l'exige.
            </p>

            <h2>7. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos données
              personnelles :
            </p>
            <ul>
              <li>
                <strong>Droit d'accès :</strong> obtenir une copie de vos données
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger des données
                inexactes
              </li>
              <li>
                <strong>Droit à l'effacement :</strong> demander la suppression de vos
                données
              </li>
              <li>
                <strong>Droit à la limitation :</strong> limiter le traitement de vos
                données
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> recevoir vos données dans un
                format structuré
              </li>
              <li>
                <strong>Droit d'opposition :</strong> vous opposer au traitement de
                vos données
              </li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : {siteConfig.contact.email}
            </p>

            <h2>8. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de
              navigation et analyser le trafic. Vous pouvez configurer votre
              navigateur pour refuser les cookies.
            </p>
            <p>Types de cookies utilisés :</p>
            <ul>
              <li>
                <strong>Cookies essentiels :</strong> nécessaires au fonctionnement du
                site
              </li>
              <li>
                <strong>Cookies analytiques :</strong> pour comprendre l'utilisation
                du site
              </li>
            </ul>

            <h2>9. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger
              vos données contre tout accès non autorisé, modification, divulgation ou
              destruction.
            </p>

            <h2>10. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Les modifications seront publiées sur
              cette page.
            </p>

            <h2>11. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité,
              contactez-nous :
              <br />
              Email : {siteConfig.contact.email}
            </p>

            <p className="text-sm text-neutral-500 mt-8">
              Dernière mise à jour : Janvier 2024
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
