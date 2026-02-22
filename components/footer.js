class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #222222;
                    color: #FFFFFF;
padding: 4rem 0 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                }
                
                .footer-logo {
                    font-family: 'Space Mono', monospace;
                    font-weight: 700;
                    font-size: 1.75rem;
color: white;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                }
                .footer-logo span {
                    color: #C0C0C0;
                    text-shadow: 0 0 10px rgba(192, 192, 192, 0.5);
                    font-size: 1.8rem;
                }
.footer-logo i {
                    color: #FF0000;
                    animation: shine 3s infinite;
}
                
                .footer-about p {
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
                
                .footer-heading {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: #FFFFFF;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                }
                
                .footer-links li {
                    margin-bottom: 0.75rem;
                }
                
                .footer-links a {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .footer-links a:hover {
                    color: #C0C0C0;
}
                
                .footer-contact p {
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .footer-contact i {
                    width: 1rem;
                    height: 1rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    transition: all 0.3s;
                }
                .social-link:hover {
                    background: #FF0000;
                    color: white;
                    animation: pulse 1.5s infinite;
transform: translateY(-2px);
                }
        .footer-bottom {
                    max-width: 1200px;
                    margin: 3rem auto 0;
                    padding: 0 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.875rem;
                }

                /* Swiss flag (small, emoji-like size) */
                .swissmade {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-top: 0.25rem;
                }
                .swiss-flag {
                    width: 1.1em;
                    height: 1.1em;
                    background: #d52b1e;
                    border-radius: 0.2em;
                    position: relative;
                    display: inline-block;
                    box-shadow: 0 0 0 1px rgba(255,255,255,0.12);
                    flex: 0 0 auto;
                }
                .swiss-flag::before,
                .swiss-flag::after {
                    content: "";
                    position: absolute;
                    background: #ffffff;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 0.08em;
                }
                .swiss-flag::before {
                    width: 62%;
                    height: 18%;
                }
                .swiss-flag::after {
                    width: 18%;
                    height: 62%;
                }
                
                .impressum-button {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    margin-top: 0.5rem;
                    transition: color 0.3s;
                }
                
                .impressum-button:hover {
                    color: #C0C0C0;
                    text-decoration: underline;
                }
.footer-bottom p {
                    margin: 0.25rem 0;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            </style>
            
            <div class="footer-container">
                <div class="footer-about">
                <a href="/" class="footer-logo">
                    <span class="text-white">XelveTec</span>
<i data-feather="zap"></i>
                </a>
<p>Ihr professioneller IT-Dienstleister in Kreuzlingen. Schnell, zuverlässig und kompetent für alle Ihre IT-Probleme.</p>
</div>
                <div class="footer-services">
                    <h3 class="footer-heading">Services</h3>
                    <ul class="footer-links">
                        <li><a href="#services">Windows Installation</a></li>
                        <li><a href="#services">Router Setup</a></li>
                        <li><a href="#services">TV & Smart-Home</a></li>
                    </ul>
                </div>
<div class="footer-services">
                    <h3 class="footer-heading">Kontakt</h3>
                    <ul class="footer-links">
                        <li><i data-feather="map-pin"></i> Egelseestrasse 31, 8280 Kreuzlingen</li>
                        <li><i data-feather="mail"></i> info@xelvetec.ch</li>
<li><i data-feather="phone"></i> 076 844 33 75</li>
                        <li><i data-feather="clock"></i> Nach Vereinbarung</li>
                    </ul>
                </div>
</div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} XelveTec. Alle Rechte vorbehalten.</p>

                <p class="swissmade">
                    <span>Swiss Made</span>
                    <span class="swiss-flag" aria-label="Schweizer Flagge" title="Schweiz"></span>
                </p>

                <p class="text-xs text-white/50 mt-2 relative group">
                    <span class="cursor-help border-b border-dotted border-white/50">*</span>
                    <span class="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 bg-dark/90 backdrop-blur-sm text-white text-xs p-3 rounded-lg border border-light/10 shadow-lg z-50">
                        * Wir bedienen keine Swisscom-Kunden und keine autorisierten Swisscom-Partner (z.B. KMU-Partnerprogramm-Mitglieder, ICT-Service-Provider oder Third-Party-Partner aus dem Swisscom Ökosystem). Für Router-, TV- & Smart-Home-Services kontaktieren Sie bitte Swisscom direkt oder deren zertifizierte Partner. 
                        * Richtzeit bei Standard-Aufträgen in Kreuzlingen; kann je nach Aufwand abweichen.
                    </span>
                </p>
<a href="/impressum.html" class="impressum-button">Impressum & Rechtliche Hinweise</a>
            </div>
`;
        
        // Replace icons after rendering
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);