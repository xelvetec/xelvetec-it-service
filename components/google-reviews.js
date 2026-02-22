class GoogleReviewsBadge extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 180px;
          margin: 2rem auto;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .badge-container {
          background: #0F172A;
          border-radius: 8px;
          padding: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .stars {
          display: flex;
          justify-content: center;
          gap: 2px;
          margin-bottom: 4px;
        }
        
        .star {
          color: #FFA500;
          font-size: 18px;
        }
        
        .google-text {
          color: white;
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 2px;
        }
        
        .rating {
          color: white;
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 2px;
        }
        
        .reviews-count {
          color: rgba(255, 255, 255, 0.8);
          font-size: 12px;
        }
        
        :host(:hover) {
          transform: translateY(-2px);
        }
        
        :host(:hover) .badge-container {
          box-shadow: 0 0 10px rgba(255, 165, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          :host {
            margin: 1.5rem auto;
          }
        }
      </style>
      
      <div class="badge-container" id="googleBadge">
        <div class="stars">
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
        </div>
        <div class="google-text">GOOGLE</div>
        <div class="rating">5.0</div>
        <div class="reviews-count">11 Reviews</div>
      </div>
    `;

    // Fetch Google Reviews data
    this.fetchGoogleReviews();
    
    // Add click handler
    this.shadowRoot.getElementById('googleBadge').addEventListener('click', () => {
      window.open('https://maps.app.goo.gl/8wboAM56MXeku5fC7', '_blank');
    });
  }

  async fetchGoogleReviews() {
    try {
      // In a real implementation, you would fetch from Google API
      // This is a placeholder that simulates the response
      const response = {
        rating: 5.0,
        reviewCount: 11
      };
      
      this.updateBadge(response.rating, response.reviewCount);
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
    }
  }

  updateBadge(rating, reviewCount) {
    const ratingElement = this.shadowRoot.querySelector('.rating');
    const reviewsElement = this.shadowRoot.querySelector('.reviews-count');
    
    if (ratingElement) ratingElement.textContent = rating.toFixed(1);
    if (reviewsElement) reviewsElement.textContent = `${reviewCount} Reviews`;
  }
}

customElements.define('google-reviews-badge', GoogleReviewsBadge);