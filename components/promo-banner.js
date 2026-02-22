class PromoBanner extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
          padding: 1.5rem 2rem;
          text-align: center;
        }
        
        .promo-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }
        
        .promo-text {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.3;
        }
        
        .promo-button {
          background: #00d4aa;
          color: white;
          font-weight: 700;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 212, 170, 0.3);
        }
        
        .promo-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 212, 170, 0.4);
          filter: brightness(1.1);
        }
        
        @media (min-width: 768px) {
          :host {
            padding: 2rem;
          }
          
          .promo-content {
            flex-direction: row;
            justify-content: space-between;
          }
          
          .promo-text {
            font-size: 1.5rem;
            text-align: left;
          }
        }
        
        @media (max-width: 480px) {
          .promo-text {
            font-size: 1.25rem;
          }
        }
      </style>
      
      <div class="promo-content">
        <div class="promo-text">
          Neukunden Angebot: Erster IT-Einsatz nur CHF 99.- bis 25. Februar 2026! Virenentfernung & mehr.
        </div>
        <a href="#kontaktformular" class="promo-button">Jetzt buchen!</a>
      </div>
    `;
  }
}

customElements.define('promo-banner', PromoBanner);