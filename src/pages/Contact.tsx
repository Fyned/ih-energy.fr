import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button } from '@/components/common'
import { Hero } from '@/components/sections'
import { siteConfig } from '@/data/siteConfig'
import { cn } from '@/utils/cn'

const contactSchema = z.object({
  firstName: z.string().min(2, 'Prénom requis'),
  lastName: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide').optional().or(z.literal('')),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  subject: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // TODO: Integrate EmailJS here
    console.log('Form data:', data)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
  }

  return (
    <>
      <SEO
        title="Contact | Devis gratuit ITE et rénovation Vosges & Grand Est"
        description="Contactez ISO Home Energy pour votre projet de rénovation énergétique dans les Vosges et le Grand Est. Devis gratuit ITE, ravalement, isolation. Nos experts locaux vous accompagnent."
        canonical="/contact"
      />

      <Hero
        title="Contactez-nous"
        description="Une question ? Un projet d'ITE ou de ravalement de façade dans les Vosges ou le Grand Est ? Notre équipe locale est à votre écoute pour vous accompagner dans votre rénovation énergétique."
        variant="centered"
        backgroundImage="/images/hero/contact-hero.webp"
      />

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                {siteConfig.contact.phone && (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-accent/5 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Phone className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Téléphone</p>
                      <p className="text-neutral-600">{siteConfig.contact.phone}</p>
                    </div>
                  </a>
                )}

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-accent/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Mail className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <p className="text-neutral-600">{siteConfig.contact.email}</p>
                  </div>
                </a>

                {siteConfig.contact.address && (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Adresse</p>
                      <p className="text-neutral-600">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Info Box */}
              <div className="mt-8 p-6 bg-accent/5 rounded-2xl border border-accent/20">
                <h3 className="font-bold text-primary mb-2">
                  Devis gratuit & sans engagement
                </h3>
                <p className="text-sm text-neutral-600">
                  Notre équipe vous répond sous 48h et vous accompagne dans le
                  montage de votre dossier d'aides.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Demander un devis gratuit
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      Merci pour votre demande. Notre équipe vous contactera dans
                      les plus brefs délais.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Envoyer un autre message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-primary mb-2"
                        >
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          {...register('firstName')}
                          className={cn(
                            'w-full px-4 py-3 rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50',
                            errors.firstName
                              ? 'border-red-500'
                              : 'border-neutral-200 hover:border-neutral-300'
                          )}
                          placeholder="Votre prénom"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-primary mb-2"
                        >
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          {...register('lastName')}
                          className={cn(
                            'w-full px-4 py-3 rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50',
                            errors.lastName
                              ? 'border-red-500'
                              : 'border-neutral-200 hover:border-neutral-300'
                          )}
                          placeholder="Votre nom"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-primary mb-2"
                        >
                          Email <span className="text-neutral-400 font-normal">(facultatif)</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register('email')}
                          className={cn(
                            'w-full px-4 py-3 rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50',
                            errors.email
                              ? 'border-red-500'
                              : 'border-neutral-200 hover:border-neutral-300'
                          )}
                          placeholder="votre@email.fr"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-primary mb-2"
                        >
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone')}
                          className={cn(
                            'w-full px-4 py-3 rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50',
                            errors.phone
                              ? 'border-red-500'
                              : 'border-neutral-200 hover:border-neutral-300'
                          )}
                          placeholder="06 00 00 00 00"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Sujet <span className="text-neutral-400 font-normal">(facultatif)</span>
                      </label>
                      <select
                        id="subject"
                        {...register('subject')}
                        className="w-full px-4 py-3 rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 border-neutral-200 hover:border-neutral-300"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="isolation">Isolation</option>
                        <option value="ite">Isolation thermique par l'extérieur (ITE)</option>
                        <option value="ravalement">Ravalement de façade</option>
                        <option value="chauffage">Chauffage / Pompe à chaleur</option>
                        <option value="menuiserie">Menuiserie (fenêtres, portes, volets)</option>
                        <option value="chauffe-eau">Chauffe-eau thermodynamique</option>
                        <option value="vmc">VMC</option>
                        <option value="aides">Questions sur les aides</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Message <span className="text-neutral-400 font-normal">(facultatif)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register('message')}
                        className={cn(
                          'w-full px-4 py-3 rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none',
                          errors.message
                            ? 'border-red-500'
                            : 'border-neutral-200 hover:border-neutral-300'
                        )}
                        placeholder="Décrivez votre projet..."
                      />
                    </div>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register('consent')}
                          className="mt-1 w-4 h-4 rounded border-neutral-300 text-accent focus:ring-accent"
                        />
                        <span className="text-sm text-neutral-600">
                          J'accepte que mes données soient traitées conformément à
                          la{' '}
                          <a
                            href="/confidentialite"
                            className="text-accent hover:underline"
                          >
                            politique de confidentialité
                          </a>{' '}
                          *
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.consent.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Envoi en cours...'
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
