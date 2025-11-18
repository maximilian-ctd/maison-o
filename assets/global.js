// Global JavaScript for Maison O Theme

class Theme {
  constructor() {
    this.init();
  }

  init() {
    this.initMobileMenu();
    this.initCart();
    this.initProductForms();
  }

  initMobileMenu() {
    const menuToggle = document.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', 
          mobileMenu.classList.contains('is-open')
        );
      });
    }
  }

  initCart() {
    // Cart functionality will be handled here
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize cart drawer or notification
    });
  }

  initProductForms() {
    const productForms = document.querySelectorAll('form[action*="/cart/add"]');
    
    productForms.forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Handle AJAX cart add
      });
    });
  }
}

// Initialize theme when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new Theme();
  });
} else {
  new Theme();
}




