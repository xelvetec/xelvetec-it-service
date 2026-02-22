class BlogCard extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: rgba(34, 34, 34, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        :host(:hover) {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(192, 192, 192, 0.2);
          border-color: #C0C0C0;
        }
        
        .blog-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .blog-content {
          padding: 1.5rem;
        }
        
        .blog-date {
          color: #C0C0C0;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        
        .blog-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.75rem;
          color: white;
        }
        
        .blog-excerpt {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        
        .read-more {
          color: #C0C0C0;
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .read-more:hover {
          color: white;
        }
      </style>
      
      <img src="${this.getAttribute('image')}" alt="${this.getAttribute('title')}" class="blog-image">
      <div class="blog-content">
        <div class="blog-date">${this.getAttribute('date')}</div>
        <h3 class="blog-title">${this.getAttribute('title')}</h3>
        <p class="blog-excerpt">${this.getAttribute('excerpt')}</p>
        <a href="${this.getAttribute('link')}" class="read-more">
          Weiterlesen
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    `;
  }
}

customElements.define('blog-card', BlogCard);