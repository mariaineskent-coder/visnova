// Carrito e interactividad simple para VisNova Wellness
document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');
    const toastElement = document.getElementById('toast');
    const cartBtn = document.getElementById('cart-btn');
    const newsletterForm = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email-input');

    // Función para mostrar notificación Toast
    function showToast(message) {
        toastElement.textContent = message;
        toastElement.classList.add('show');
        setTimeout(() => {
            toastElement.classList.remove('show');
        }, 2800);
    }

    // Añadir al carrito
    const addButtons = document.querySelectorAll('.btn-add-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-name');
            cartCount++;
            cartCountElement.textContent = cartCount;

            // Animación sutil en el botón
            e.target.textContent = '✓ Añadido';
            e.target.style.backgroundColor = 'var(--accent-terracotta)';
            setTimeout(() => {
                e.target.textContent = 'Añadir +';
                e.target.style.backgroundColor = '';
            }, 1200);

            showToast(`🌿 "${productName}" añadido a tu carrito`);
        });
    });

    // Clic en el botón del carrito
    cartBtn.addEventListener('click', () => {
        if (cartCount === 0) {
            showToast('🛒 Tu carrito está vacío');
        } else {
            showToast(`🛒 Tienes ${cartCount} producto${cartCount > 1 ? 's' : ''} en tu carrito`);
        }
    });

    // Formulario de suscripción newsletter
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();
            if (email) {
                showToast(`✨ ¡Bienvenido/a a VisNova! Te enviamos tu 10% de descuento.`);
                newsletterForm.reset();
            }
        });
    }
});
