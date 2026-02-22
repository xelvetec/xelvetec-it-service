class ReviewsContainer extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin: 4rem 0;
        }
        
        .reviews-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .reviews-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }
        
        .review-card {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
          background: rgba(34, 34, 34, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .review-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
        }
        
        .stars {
          display: flex;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }
        
        .star {
          color: #FFA500;
          font-size: 2rem;
        }
        
        .rating {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
        }
        
        .review-button {
          display: inline-block;
          background: #00d4aa;
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.3s;
          margin-top: 1rem;
        }
        
        .review-button:hover {
          background: #00b894;
          transform: translateY(-2px);
        }
        
        @media (min-width: 768px) {
          .reviews-grid {
            flex-direction: row;
            gap: 1.5rem;
          }
          
          .review-card {
            flex: 1;
          }
        }
        
        @media (max-width: 767px) {
          .reviews-grid {
            flex-direction: column;
          }
          
          .review-card {
            width: 100%;
          }
        }
      </style>
      
      <div class="reviews-wrapper">
        <div class="reviews-grid">
          <!-- Google Review Card -->
          <div class="review-card">
            <h3 class="review-title">Google Bewertungen</h3>
            <div class="stars">
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
            </div>
            <div class="rating">5.0</div>
            <a href="https://maps.app.goo.gl/8wboAM56MXeku5fC7" target="_blank" class="review-button">Bewertungen ansehen</a>
          </div>
          
          <!-- Existing Trustpilot Card (unchanged) -->
          <div class="review-card">
            <h3 class="review-title">Trustpilot Bewertungen</h3>
            <div class="stars">
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
            </div>
            <div class="rating">4.9</div>
            <a href="https://ch.trustpilot.com/review/xelvetec.ch" target="_blank" class="review-button">Jetzt bewerten</a>
          </div>
        </div>
      </div>
    `;

    // Load Google Reviews data
    this.loadGoogleReviews();
  }

  async loadGoogleReviews() {
    try {
      // In a real implementation, you would fetch from Google Places API
      // For now, we'll just simulate the data
      const googleRating = 5.0;
      const ratingElement = this.shadowRoot.querySelector('.review-card:first-child .rating');
      if (ratingElement) {
        ratingElement.textContent = googleRating.toFixed(1);
      }
    } catch (error) {
      console.error('Error loading Google reviews:', error);
    }
  }
}

customElements.define('reviews-container', ReviewsContainer);