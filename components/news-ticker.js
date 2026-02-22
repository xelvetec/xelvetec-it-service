class NewsTicker extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 40px;
          background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .ticker-container {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 20px;
        }
        
        .ticker-text {
          color: white;
          font-weight: 700;
          font-size: 17px;
          white-space: nowrap;
          padding-right: 20px;
          animation: scroll 30s linear infinite;
        }
        
        .ticker-button {
          background: #00d4aa;
          color: white;
          font-weight: 700;
          font-size: 14px;
          padding: 5px 15px;
          border-radius: 20px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        
        .ticker-button:hover {
          background: #00ff88;
          transform: translateY(-1px);
        }
        
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @media (min-width: 768px) {
          :host {
            height: 45px;
          }
          
          .ticker-text {
            font-size: 19px;
          }
          
          .ticker-button {
            padding: 8px 20px;
          }
        }
        
        @media (max-width: 480px) {
          .ticker-text {
            animation-duration: 15s;
          }
        }
        
        .ticker-container:hover .ticker-text {
          animation-play-state: paused;
        }
      </style>
      
      <div class="ticker-container">
        <div class="ticker-text">
          NEUKUNDEN ANGEBOT: Erster IT-Einsatz nur CHF 99.- bis 25. Februar 2026! Virenentfernung & mehr – jetzt buchen!
        </div>
        <a href="#booking" class="ticker-button">Jetzt sparen!</a>
      </div>
    `;
  }
}

customElements.define('news-ticker', NewsTicker);