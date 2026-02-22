class CustomReviews extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin: 4rem 0;
        }
        .reviews-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .reviews-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
          text-align: center;
          color: #C0C0C0;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        .review-card {
          background: rgba(34, 34, 34, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: transform 0.3s;
        }
        .review-card:hover {
          transform: translateY(-5px);
          border-color: #C0C0C0;
        }
        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .review-name {
          font-weight: bold;
          color: #C0C0C0;
        }
        .review-date {
          color: #888;
          font-size: 0.8rem;
        }
        .review-stars {
          color: gold;
          margin: 0.5rem 0;
        }
        .review-text {
          color: #DDD;
          line-height: 1.5;
        }
        .review-service {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.3rem 0.6rem;
          background: rgba(192, 192, 192, 0.2);
          border-radius: 1rem;
          font-size: 0.8rem;
          color: #C0C0C0;
        }
        .no-reviews {
          text-align: center;
          color: #888;
          grid-column: 1 / -1;
          padding: 2rem;
        }
      </style>
      <div class="reviews-container">
        <h2 class="reviews-title">Veröffentlichte Kundenbewertungen</h2>
        <div class="reviews-grid" id="reviewsGrid">
          <div class="no-reviews">Noch keine Bewertungen vorhanden</div>
        </div>
      </div>
    `;

    // In a real app, you would fetch these from your backend
    const reviews = [
      {
        name: "Markus B.",
        date: "15.01.2026", 
        stars: 5,
        text: "Super schneller Service! Mein Router war innerhalb von 30 Minuten optimal eingerichtet. Seitdem keine WLAN-Probleme mehr. Sehr kompetent und freundlich!",
        service: "Router Setup"
      },
    {
        name: "Hakan S.",
        date: "22.01.2026",
stars: 5,
        text: "Windows Installation lief perfekt! Der Techniker war pünktlich und hat alles suepr erklärt. Jetzt läuft mein PC viel schneller als vorher. Klare Emfpehlung für XelveTec!",
service: "Windows Installation"
      },
      {
        name: "Julia A.",
        date: "28.02.2026",
        stars: 5,
        text: "Mein TV war ganz schnäll eingerichtet und die Bildqualität ist jetzt viel besser. Der Techniker war freundlich und hat alles gut erklärt. Sehr zufrieden mit dem Service!",
service: "TV & Smart-Home"
      }
];
this.renderReviews(reviews);
  }

  renderReviews(reviews) {
    const grid = this.shadowRoot.getElementById('reviewsGrid');
    
    if (reviews.length === 0) {
      grid.innerHTML = '<div class="no-reviews">Noch keine Bewertungen vorhanden</div>';
      return;
    }

    grid.innerHTML = reviews.map(review => `
      <div class="review-card">
        <div class="review-header">
          <span class="review-name">${review.name}</span>
          <span class="review-date">${review.date}</span>
        </div>
        <div class="review-stars">${'★'.repeat(review.stars)}${'☆'.repeat(5-review.stars)}</div>
        <p class="review-text">${review.text}</p>
        <span class="review-service">${review.service}</span>
      </div>
    `).join('');
  }
}

customElements.define('custom-reviews', CustomReviews);