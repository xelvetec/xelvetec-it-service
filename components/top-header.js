class CustomTopHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #222222;
          color: white;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
        }
.container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1.5rem;
        }
        .whatsapp-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .whatsapp-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }
.whatsapp-icon {
          width: 16px;
          height: 16px;
          filter: none;
        }
@media (max-width: 768px) {
          .container {
            justify-content: center;
          }
        }
      </style>
      <div class="container">
        <a href="https://wa.me/41768443375" class="whatsapp-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="whatsapp-icon">
WhatsApp
        </a>
        <a href="mailto:info@xelvetec.ch" class="whatsapp-button">
<i data-feather="mail" class="email-icon"></i>
          <span>info@xelvetec.ch</span>
        </a>
</div>
    `;
    feather.replace();
  }
}

customElements.define('custom-top-header', CustomTopHeader);