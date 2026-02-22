class CustomHeader extends HTMLElement {
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
                    z-index: 1000;
                    background: rgba(34, 34, 34, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
.container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-family: 'Space Mono', monospace;
                    font-weight: 700;
                    font-size: 1.75rem;
color: white;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .logo span {
                    color: #FF0000;
                    text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
                    position: relative;
                    background: linear-gradient(90deg, #FF0000, #FFFFFF, #FF0000);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shine 3s linear infinite;
                    font-size: 1.8rem;
                }
.logo i {
                    color: #FF0000;
                    stroke-width: 2;
                    animation: pulse 1.5s infinite, shine 3s infinite;
                }

                @keyframes shine {
                    0% {
                        background-position: 0% center;
                    }
                    100% {
                        background-position: 200% center;
                    }
                }
nav ul {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                }
                
                nav a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    position: relative;
                }
                
                nav a:hover {
                    color: #C0C0C0;
}
                
                nav a::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #C0C0C0;
transition: width 0.3s;
                }
                
                nav a:hover::after {
                    width: 100%;
                }
.mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
                @keyframes pulse {
                    0% {
                        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
                    }
                    70% {
                        box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
                    }
                }
                
                @keyframes shine-logo {
                    0% {
                        filter: brightness(1);
                    }
                    50% {
                        filter: brightness(1.5);
                    }
                    100% {
                        filter: brightness(1);
                    }
                }
@media (max-width: 1024px) {
                    nav ul {
                        gap: 1rem;
                    }
                }
                
                @media (max-width: 768px) {
                    .container {
                        padding: 1rem;
                    }
                    
                    nav {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background: rgba(10, 10, 10, 0.95);
                        backdrop-filter: blur(10px);
                        padding: 2rem;
                        transform: translateY(-150%);
                        transition: transform 0.3s ease-in-out;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    }
                    
                    nav.active {
                        transform: translateY(0);
                    }
                    
                    nav ul {
                        flex-direction: column;
                        gap: 1.5rem;
                    }
                    
                    .mobile-menu-button {
                        display: block;
                    }
                    
                    .contact-buttons {
                        display: none;
                    }
                }
            </style>
            
            <div class="container">
                <a href="/" class="logo">
                    <span class="text-white">XelveTec</span>
<i data-feather="zap"></i>
                </a>
<button class="mobile-menu-button">
                    <i data-feather="menu"></i>
                </button>
                
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#services">Services</a></li>
<li><a href="https://xelvetec.blogspot.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        <li><a href="/impressum.html">Impressum</a></li>
                    </ul>
</nav>
</div>
        `;
        
        // Initialize mobile menu
        const menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const nav = this.shadowRoot.querySelector('nav');
        
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = menuButton.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
        
        // Replace icons after rendering
        feather.replace();
    }
}

customElements.define('custom-header', CustomHeader);