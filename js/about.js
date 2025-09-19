document.addEventListener("DOMContentLoaded", () => {
  // Animate fade-in elements
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach(el => {
    el.style.animationPlayState = "running";
  });

  // Accessibility: allow keyboard focus on team cards and show hover content
  document.querySelectorAll('.team-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('focus', function() {
      const box = this.querySelector('.team-hover-content');
      if (box) box.style.opacity = '1';
    });
    card.addEventListener('blur', function() {
      const box = this.querySelector('.team-hover-content');
      if (box) box.style.opacity = '0';
    });
  });
});