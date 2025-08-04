    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all
        tabs.forEach(t => t.classList.remove('active'));
        // Add to current
        tab.classList.add('active');
      });
    });



    
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  // When user scrolls
  window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Optional: Click handler to apply active class immediately on click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });




//  Testomoniyal sccorl bar 
  let currentIndex = 0;

  function scrollToCard(index) {
    const container = document.getElementById('review-slider');
    const cards = container.querySelectorAll('.testimonial-card');
    if (cards.length === 0) return;

    // Remove active class from all
    cards.forEach(card => card.classList.remove('active'));

    const card = cards[index];
    if (!card) return;

    // Add active class to focused card
    card.classList.add('active');

    const gap = 24;
    const cardWidth = card.offsetWidth + gap;

    // Scroll so this card is centered
    const scrollX = card.offsetLeft - (container.offsetWidth / 2 - card.offsetWidth / 2);
    container.scrollTo({
      left: scrollX,
      behavior: 'smooth'
    });
  }

  function startAutoScroll() {
    const container = document.getElementById('review-slider');
    const cards = container.querySelectorAll('.testimonial-card');
    if (cards.length === 0) return;

    scrollToCard(currentIndex); // Initial focus

    setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      scrollToCard(currentIndex);
    }, 5000); // every 5s
  }

  window.addEventListener('load', startAutoScroll);



 
  window.addEventListener('load', () => {
    const container = document.getElementById('review-slider');
    const cards = container.querySelectorAll('.testimonial-card');

    const cloneCount = 3; // how many cards to clone
    for (let i = 0; i < cloneCount; i++) {
      const clone = cards[i].cloneNode(true);
      clone.classList.add('clone');
      container.appendChild(clone);
    }

    startSeamlessAutoScroll();
  });

  



  









const container = document.getElementById('review-slider');

container.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
container.addEventListener('mouseleave', startAutoScroll);
 

// cursor js 

let cursor = document.querySelector(".cursor");
let body = document.querySelector("body");
console.log(cursor);
console.log(body);

body.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.5,
    ease: "back.out",
  });
});