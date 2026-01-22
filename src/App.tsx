import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/layout'

import { Home } from '@/pages/Home'
import { Contact } from '@/pages/Contact'
import { IsoHomeEnergy } from '@/pages/IsoHomeEnergy'
import { ServicesIndex } from '@/pages/services'
import { ServiceDetail } from '@/pages/services/ServiceDetail'
import { AidesIndex } from '@/pages/aides'
import { AideDetail } from '@/pages/aides/AideDetail'
import { ActualitesIndex } from '@/pages/actualites'
import { ArticleDetail } from '@/pages/actualites/ArticleDetail'
import { MentionsLegales } from '@/pages/legal/MentionsLegales'
import { Confidentialite } from '@/pages/legal/Confidentialite'
import { Realisations } from '@/pages/Realisations'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/iso-home-energy" element={<IsoHomeEnergy />} />

            {/* Services */}
            <Route path="/nos-services" element={<ServicesIndex />} />
            <Route path="/nos-services/:slug" element={<ServiceDetail />} />

            {/* Aides */}
            <Route path="/les-aides" element={<AidesIndex />} />
            <Route path="/les-aides/:slug" element={<AideDetail />} />

            {/* Actualites */}
            <Route path="/actualites" element={<ActualitesIndex />} />
            <Route path="/actualites/:slug" element={<ArticleDetail />} />

            {/* Realisations */}
            <Route path="/nos-realisations" element={<Realisations />} />

            {/* Legal */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />

            {/* 404 - Redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
