class CustomLanguageSwitcher extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-right: 1rem;
        }
        .language-button {
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          font-weight: 500;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          transition: all 0.3s;
        }
        .language-button:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .language-button.active {
          background: rgba(192, 192, 192, 0.2);
          color: #C0C0C0;
        }
        .separator {
          color: rgba(255, 255, 255, 0.5);
        }
      </style>
      <button class="language-button" data-lang="de">
        <span>DE</span>
      </button>
      <span class="separator">|</span>
      <button class="language-button" data-lang="en">
        <span>EN</span>
      </button>
    `;

    // Load saved language or detect browser language
    const savedLang = localStorage.getItem('preferredLang') || 
                     (navigator.language.startsWith('de') ? 'de' : 'en');
    this.setLanguage(savedLang);

    // Add click handlers
    this.shadowRoot.querySelectorAll('.language-button').forEach(button => {
      button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        this.setLanguage(lang);
        localStorage.setItem('preferredLang', lang);
        this.translatePage(lang);
      });
    });
  }

  setLanguage(lang) {
    document.documentElement.lang = lang;
    const buttons = this.shadowRoot.querySelectorAll('.language-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    this.shadowRoot.querySelector(`.language-button[data-lang="${lang}"]`).classList.add('active');
  }

  translatePage(lang) {
    // Get all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    
    // In a real app, you would fetch translations from a JSON file or API
    const translations = {
      'de': {
        'home': 'Home',
        'services': 'Services',
        'about': 'Über uns',
        'blog': 'Blog',
        'contact': 'Kontakt',
        'faq': 'FAQ',
        'book_visit': 'Hausbesuch buchen',
        'windows_installation': 'Windows Installation',
        'router_setup': 'Router Setup',
        'tv_smart_home': 'TV & Smart-Home',
        'remote_support': 'Fernwartung',
        // Add more translations as needed
      },
      'en': {
        'home': 'Home',
        'services': 'Services',
        'about': 'About',
        'blog': 'Blog',
        'contact': 'Contact',
        'faq': 'FAQ',
        'book_visit': 'Book Home Visit',
        'windows_installation': 'Windows Installation',
        'router_setup': 'Router Setup',
        'tv_smart_home': 'TV & Smart Home',
        'remote_support': 'Remote Support',
        // Add more translations as needed
      }
    };

    elements.forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
}

customElements.define('custom-language-switcher', CustomLanguageSwitcher);