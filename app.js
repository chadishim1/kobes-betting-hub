const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const checkoutPreview = document.getElementById('checkout-preview');
if (checkoutPreview) checkoutPreview.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('preview-message').textContent = 'Payments are not live yet. No membership or charge was created.';
});
