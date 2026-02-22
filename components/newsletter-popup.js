class NewsletterPopup extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 90%;
          max-width: 500px;
          z-index: 9999;
          background: linear-gradient(135deg, #0033A0, #E2007A);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          padding: 25px;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.5s ease;
          border: 2px solid white;
        }
        
        :host(.visible) {
          transform: translateY(0);
          opacity: 1;
        }
        
        .close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        h3 {
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        input[type="email"] {
          padding: 12px 15px;
          border-radius: 6px;
          border: none;
          font-size: 1rem;
        }
        
        .checkbox-container {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: white;
          font-size: 0.9rem;
        }
        
        .checkbox-container input {
          margin-top: 3px;
        }
        
        button[type="submit"] {
          background: white;
          color: #0033A0;
          border: none;
          padding: 12px;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        button[type="submit"]:hover {
          background: #E2007A;
          color: white;
          transform: translateY(-2px);
        }
        
        .success-message {
          display: none;
          color: white;
          text-align: center;
          font-size: 1.2rem;
          padding: 10px;
        }
        
        @media (max-width: 600px) {
          :host {
            width: calc(100% - 40px);
            right: 20px;
            left: 20px;
            bottom: 20px;
          }
        }
      </style>
      
      <button class="close-btn">✕</button>
      <h3>Keine Rabatte verpassen!</h3>
      <p>Erhalten Sie exklusive XelveTec-Rabatte für Windows-Installation, Router-Setup & TV-Einrichtung in Kreuzlingen.</p>
      
      <form name="rabatte" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="rabatte" />
        <p hidden>
          <label>Nicht ausfüllen: <input name="bot-field" /></label>
        </p>
        
        <input type="email" name="email" placeholder="Ihre E-Mail" required>
        
        <div class="checkbox-container">
          <input type="checkbox" name="consent" id="consent" required>
          <label for="consent">Ja, ich möchte Rabatt-Angebote per E-Mail (jederzeit abbestellbar)</label>
        </div>
        
        <button type="submit">Rabatte sichern!</button>
      </form>
      
      <div class="success-message">
        Perfekt! Erste Rabatte folgen.
      </div>
    `;
        // Close button
        const closeBtn = this.shadowRoot.querySelector('.close-btn');
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.closePopup();
        });
        // Close when clicking outside the popup content
        this.addEventListener('click', (e) => {
            // Check if click is directly on the host element (background)
            if (e.target === this) {
                this.closePopup();
            }
        });

        // Prevent clicks inside the popup content from closing it
        const popupContent = this.shadowRoot.querySelector('form').parentElement;
        popupContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Form submission
        const form = this.shadowRoot.querySelector('form');
form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // In a real implementation, you would submit the form to Netlify
      // For now, we'll just show the success message
      this.showSuccessMessage();
      
      // Set cookie to prevent showing again today
      document.cookie = "newsletterShown=true; max-age=86400; path=/";
    });
  }
  show() {
    this.classList.add('visible');
    // Add escape key listener
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  closePopup() {
    this.classList.remove('visible');
    document.cookie = "newsletterShown=true; max-age=86400; path=/";
    // Remove escape key listener
    document.removeEventListener('keydown', this.handleKeyDown);
    // Remove from DOM after animation
    setTimeout(() => {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    }, 500);
  }
    }
showSuccessMessage() {
    const form = this.shadowRoot.querySelector('form');
    const successMessage = this.shadowRoot.querySelector('.success-message');
    
    form.style.display = 'none';
    successMessage.style.display = 'block';
    
    setTimeout(() => {
      this.closePopup();
    }, 2000);
  }
}

customElements.define('newsletter-popup', NewsletterPopup);