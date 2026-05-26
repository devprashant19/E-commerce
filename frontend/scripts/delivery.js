// ELEMENTS
const elements = {
    scrollBtn: document.getElementById('scroll-top'),
    deliveryHeaders: document.querySelectorAll('#delivery-content h3')
};

// SCROLL TO TOP
if (elements.scrollBtn) {
    window.addEventListener('scroll', () => {
        elements.scrollBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });
    elements.scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// HOVER EFFECTS ON SECTIONS
elements.deliveryHeaders.forEach((header) => {
    header.addEventListener('mouseenter', () => {
        header.style.color = '#088178';
        header.style.transition = '0.3s ease';
    });
    header.addEventListener('mouseleave', () => {
        header.style.color = '';
    });
});
