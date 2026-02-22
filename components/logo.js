class CustomLogo extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          font-size: 1.75rem;
          color: white;
        }
        
        .logo-icon {
          width: 2.5rem;
          height: 2.5rem;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-icon svg {
          width: 100%;
          height: 100%;
        }
        
        .logo-text {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .logo-text span {
          position: relative;
          background: linear-gradient(90deg, #00A0E0, #0033A0, #00A0E0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }

        .logo-accent {
          color: #E2007A;
          animation: pulse 1.5s infinite;
        }
        
        @keyframes shine {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      </style>
      
      <a href="/" class="logo-container">
        <div class="logo-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#00A0E0" />
                <stop offset="50%" stop-color="#0033A0" />
                <stop offset="100%" stop-color="#00A0E0" />
              </linearGradient>
            </defs>
            <path fill="url(#logoGradient)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path fill="#E2007A" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            <path fill="#00A0E0" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </div>
        <div class="logo-text">
          <span>Xelve</span><span class="logo-accent">Tec</span>
        </div>
      </a>
    `;
  }
}

customElements.define('custom-logo', CustomLogo);

// Add floating animation to logo
document.addEventListener('DOMContentLoaded', () => {
  const logos = document.querySelectorAll('custom-logo');
  logos.forEach(logo => {
    logo.shadowRoot.querySelector('.logo-icon').style.animation = 'float 3s ease-in-out infinite';
  });
});