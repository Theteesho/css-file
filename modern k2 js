// modern-style-profile.js

document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll('.theme-entry input, .theme-entry select, .theme-entry textarea');

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.transition = 'box-shadow 0.3s ease';
      input.style.boxShadow = '0 0 8px rgba(0, 120, 215, 0.4)';
    });

    input.addEventListener('blur', () => {
      input.style.boxShadow = 'none';
    });
  });

  const buttons = document.querySelectorAll('.theme-entry button.k2-button, .theme-entry input[type="submit"].k2-button');

  buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.98)';
    });

    button.addEventListener('mouseup', () => {
      button.style.transform = 'scale(1)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
});
