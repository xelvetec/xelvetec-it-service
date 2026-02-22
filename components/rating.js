class CustomRating extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin: 2rem 0;
        }
        .rating-container {
          background: rgba(34, 34, 34, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .rating-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #C0C0C0;
          text-align: center;
        }
        .stars {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .star {
          cursor: pointer;
          color: #444;
          font-size: 2rem;
          transition: all 0.2s;
        }
        .star:hover,
        .star.active {
          color: gold;
          transform: scale(1.1);
        }
        .rating-message {
          text-align: center;
          margin-top: 1rem;
          color: #C0C0C0;
          font-size: 0.9rem;
        }
        .thank-you {
          color: #C0C0C0;
          text-align: center;
          font-weight: bold;
          display: none;
        }
        .review-link {
          display: block;
          margin-top: 1rem;
          text-align: center;
          color: #C0C0C0;
          font-size: 0.9rem;
        }
        .review-link a {
          color: #00A0E0;
          text-decoration: none;
        }
        .review-link a:hover {
          text-decoration: underline;
        }
</style>
      <div class="rating-container">
        <div class="rating-title">Wie zufrieden sind Sie mit unserem Service?</div>
        <div class="stars">
          <div class="star" data-rating="1">★</div>
          <div class="star" data-rating="2">★</div>
          <div class="star" data-rating="3">★</div>
          <div class="star" data-rating="4">★</div>
          <div class="star" data-rating="5">★</div>
        </div>
        <div class="rating-message">Bitte bewerten Sie uns mit 1-5 Sternen</div>
        <div class="thank-you">Vielen Dank für Ihre Bewertung!</div>
        <div class="review-link">Nach Abschluss des Auftrags erhalten Sie einen Link um Ihre detaillierte Bewertung zu veröffentlichen.</div>
</div>
    `;

    const stars = this.shadowRoot.querySelectorAll('.star');
    const thankYou = this.shadowRoot.querySelector('.thank-you');
    const ratingMessage = this.shadowRoot.querySelector('.rating-message');

    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        
        // Highlight selected stars
        stars.forEach((s, i) => {
          if (i < rating) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });

        // Send rating to server (simulated)
        setTimeout(() => {
          thankYou.style.display = 'block';
          ratingMessage.style.display = 'none';
          stars.forEach(s => s.style.display = 'none');
        }, 500);

        // In a real app, you would send this to your backend
        console.log(`User rated: ${rating} stars`);
      });

      star.addEventListener('mouseover', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        stars.forEach((s, i) => {
          if (i < rating) {
            s.style.color = 'gold';
          }
        });
      });

      star.addEventListener('mouseout', () => {
        stars.forEach(s => {
          if (!s.classList.contains('active')) {
            s.style.color = '#444';
          }
        });
      });
    });
  }
}

customElements.define('custom-rating', CustomRating);