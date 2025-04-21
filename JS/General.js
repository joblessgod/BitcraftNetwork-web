// ==================
//   NAVBAR MOBILE
// ==================

const navbars = document.querySelector('.navbars-bars');
const navMobileMenu = document.querySelector('.nav-mobile-menu');

navbars.addEventListener('click', () => {
    navbars.classList.toggle('active');
    navMobileMenu.classList.toggle('active');
});

// =====================
//     MAIN NAV ITEM
// =====================

const navinicial = document.querySelector('.nav-logo');

navinicial.addEventListener('click', () => {
    window.location.href = "../Index.html";
});


// ===== Discover Carousel Script ===== //
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
  
    let currentIndex = 0;
    let interval = setInterval(nextSlide, 5000);
  
    function showSlide(index) {
      items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      currentIndex = index;
    }
  
    function nextSlide() {
      let newIndex = (currentIndex + 1) % items.length;
      showSlide(newIndex);
    }
  
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        let index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
        resetInterval();
      });
    });
  
    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, 5000);
    }
  
    showSlide(currentIndex); // initial call
  });
  
  