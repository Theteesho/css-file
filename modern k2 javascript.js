// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Find button to toggle slide-out blade - make sure your form has a button with ID 'open-blade-btn'
  const openBladeBtn = document.getElementById('open-blade-btn');
  const slideOutBlade = document.querySelector('.slide-out-blade');
  const closeBtn = document.querySelector('.slide-out-blade .close-btn');

  if (!openBladeBtn || !slideOutBlade || !closeBtn) return;

  // Open blade on button click
  openBladeBtn.addEventListener('click', () => {
    slideOutBlade.classList.add('active');
  });

  // Close blade on close button click
  closeBtn.addEventListener('click', () => {
    slideOutBlade.classList.remove('active');
  });

  // Optional: close blade if user clicks outside blade area
  document.addEventListener('click', (e) => {
    if (
      slideOutBlade.classList.contains('active') &&
      !slideOutBlade.contains(e.target) &&
      e.target !== openBladeBtn
    ) {
      slideOutBlade.classList.remove('active');
    }
  });
});
