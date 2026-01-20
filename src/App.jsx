import './App.css'

function App() {
  return (
    <div className="maintenance-page">
      {/* Background Elements */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Logo */}
          <div className="logo-section">
            <img
              src="/logo.svg"
              alt="ISO Home Energy"
              className="main-logo"
            />
          </div>

          {/* Divider */}
          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </span>
            <span className="divider-line"></span>
          </div>

          {/* Text Content */}
          <div className="text-content">
            <h1>Notre site fait peau neuve</h1>
            <p className="lead">
              Nous sommes en train de préparer quelque chose de formidable pour vous.
            </p>
            <p className="description">
              ISO Home Energy travaille actuellement sur un nouveau site web afin de mieux
              vous accompagner dans vos projets d'isolation et d'amélioration de
              l'efficacité énergétique de votre habitat.
            </p>
          </div>

          {/* Status Badge */}
          <div className="status-section">
            <div className="status-badge">
              <span className="pulse-dot"></span>
              <span className="status-text">Lancement imminent</span>
            </div>
          </div>

          {/* Features Preview */}
          <div className="features-preview">
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span>Isolation thermique</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              </div>
              <span>Efficacité énergétique</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <span>Qualité garantie</span>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <p>Une question ? Besoin d'un devis ?</p>
            <p className="contact-cta">Contactez-nous dès maintenant</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} ISO Home Energy. Tous droits réservés.</p>
          <p className="footer-tagline">Solutions d'isolation pour un habitat durable</p>
        </div>
      </footer>
    </div>
  )
}

export default App
