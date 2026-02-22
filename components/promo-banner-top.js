class PromoBannerTop extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          background: #1a1a2e;
          padding: 12px 20px;
          position: relative;
          height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .promo-text {
          color: white;
          font-weight: 700;
          font-size: 18px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-right: 15px;
        }
        
        .promo-button {
          background: #00d4aa;
          color: white;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 25px;
          text-decoration: none;
          white-space: nowrap;
          font-size: 14px;
          flex-shrink: 0;
          transition: background 0.3s;
        }
        
        .promo-button:hover {
          background: #00b894;
        }
        
        @media (max-width: 768px) {
          :host {
            height: 45px;
          }
          
          .promo-text {
            font-size: 16px;
          }
          
          .promo-button {
            padding: 6px 12px;
            font-size: 14px;
          }
        }
      </style>
      
      <div class="promo-text">NEUKUNDEN-ANGEBOT: Erster Einsatz nur CHF 99.-</div>
      <a href="#kontaktformular" class="promo-button">Jetzt buchen</a>
    `;
  }
}

customElements.define('promo-banner-top', PromoBannerTop);