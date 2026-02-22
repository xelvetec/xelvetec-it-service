class FixedBanner extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #2a2a2a;
          color: white;
          padding: 0.75rem 1rem;
          z-index: 999;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .banner-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        
        .banner-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .highlight {
          color: #ff0000;
          font-weight: 800;
          text-shadow: 
            -1px -1px 0 #fff,
            1px -1px 0 #fff,
            -1px 1px 0 #fff,
            1px 1px 0 #fff;
          margin-right: 0.5rem;
        }
        
        .small-text {
          color: #aaa;
          font-size: 0.9rem;
        }
        
        .cta-button {
          background: #00d4aa;
          color: white;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          border-radius: 4px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        
        .cta-button:hover {
          background: #00e6b8;
          box-shadow: 0 0 10px rgba(0, 212, 170, 0.5);
        }
        
        .close-btn {
          background: none;
          border: none;
          color: #aaa;
          cursor: pointer;
          padding: 0 0.5rem;
          margin-left: 0.5rem;
          font-size: 1.1rem;
          transition: color 0.3s;
        }
        
        .close-btn:hover {
          color: white;
        }
        
        @media (max-width: 768px) {
          .banner-container {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
          
          .banner-content {
            flex-direction: column;
            gap: 0.25rem;
          }
          
          .highlight {
            margin-right: 0;
          }
        }
      </style>
      
      <div class="banner-container">
        <div class="banner-content">
          <span class="highlight">NEUKUNDEN: Erster IT-Einsatz nur CHF 99!</span>
          <span class="small-text">statt CHF 149 – jetzt buchen</span>
        </div>
        <a href="#kontaktformular" class="cta-button">Jetzt buchen</a>
      </div>
    `;

    // Optional: Add close button functionality
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
      this.style.display = 'none';
      document.cookie = "bannerClosed=true; max-age=86400; path=/"; // Hide for 24h
    });
    this.shadowRoot.querySelector('.banner-container').appendChild(closeBtn);

    // Check if banner was closed
    if (document.cookie.includes('bannerClosed=true')) {
      this.style.display = 'none';
    }
  }
}

customElements.define('fixed-banner', FixedBanner);