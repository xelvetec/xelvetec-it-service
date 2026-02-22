class OfferModal extends HTMLElement {
  connectedCallback() {
    // Check if modal was shown in last 24 hours
    const lastShown = localStorage.getItem('offerModalLastShown');
    const now = new Date().getTime();
    
    if (lastShown && now - lastShown < 86400000) { // 24 hours
      return;
    }

    this.renderModal();
  }

  renderModal() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'offer-modal-overlay';
    document.body.appendChild(overlay);

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'offer-modal';
    modal.innerHTML = `
      <button class="offer-modal-close">×</button>
      <h2 class="offer-title">NEUKUNDEN ANGEBOT!</h2>
      <p class="offer-subtitle">Erster IT-Einsatz nur CHF 99.- bis 25. Februar 2026! Virenentfernung, Reparatur & mehr.</p>
      <a href="#booking" class="offer-button">Jetzt buchen!</a>
    `;

    document.body.appendChild(modal);

    // Add close handlers
    const closeBtn = modal.querySelector('.offer-modal-close');
    closeBtn.addEventListener('click', () => this.closeModal(overlay, modal));

    overlay.addEventListener('click', () => this.closeModal(overlay, modal));

    // Store timestamp
    localStorage.setItem('offerModalLastShown', new Date().getTime());
  }

  closeModal(overlay, modal) {
    modal.style.animation = 'scaleUp 0.3s ease-out reverse forwards';
    overlay.style.opacity = '0';
    
    setTimeout(() => {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      if (modal.parentNode) modal.parentNode.removeChild(modal);
    }, 300);
  }
}

customElements.define('offer-modal', OfferModal);