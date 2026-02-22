class RemoteBanner extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .banner-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }
        
        .text-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .title {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .subtitle {
          font-size: 1.5rem;
          color: rgba(255,255,255,0.8);
          margin-bottom: 2rem;
          line-height: 1.4;
        }
        
        .cta-button {
          background: #00d4aa;
          color: white;
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 212, 170, 0.3);
          font-size: 1.2rem;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 212, 170, 0.4);
          background: #00e6b8;
        }
        
        .devices-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          width: 100%;
        }
        
        .device {
          position: relative;
          width: 280px;
          height: 500px;
          background: #111;
          border-radius: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          overflow: hidden;
          border: 8px solid #222;
        }
        
        .laptop {
          width: 450px;
          height: 300px;
          background: #111;
          border-radius: 10px 10px 0 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border: 8px solid #222;
          border-bottom: none;
        }
        
        .laptop:after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: -8px;
          right: -8px;
          height: 15px;
          background: #222;
          border-radius: 0 0 5px 5px;
        }
        
        .screen {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }
        
        .arrow-icon {
          width: 60px;
          height: 60px;
          color: #00d4aa;
        }
        
        @media (max-width: 768px) {
          .devices-container {
            flex-direction: column;
          }
          
          .title {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1.2rem;
          }
          
          .device {
            width: 200px;
            height: 350px;
          }
          
          .laptop {
            width: 300px;
            height: 200px;
          }
        }
      </style>
      
      <div class="banner-container" data-aos="fade-up">
        <div class="text-content">
          <h2 class="title">Schnelle Fernwartung – Von Handy bis PC</h2>
          <p class="subtitle">Einfach Bildschirm teilen, wir fixen remote!</p>
          <a href="https://remotedesktop.google.com/" target="_blank" class="cta-button">Jetzt Fernwartung starten</a>
        </div>
        
        <div class="devices-container">
          <div class="device">
            <div class="screen">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M8 4h8v4H8z"></path>
              </svg>
            </div>
          </div>
          
          <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          
          <div class="laptop">
            <div class="screen">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <path d="M2 17h20M12 17v4"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('remote-banner', RemoteBanner);