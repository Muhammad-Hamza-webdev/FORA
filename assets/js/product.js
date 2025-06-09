document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.querySelector(".marquee-prod");
  const images = document.querySelectorAll(".marquee-prod img");
  const container = document.querySelector(".marquee-container-prod");

  // Clone all images for seamless looping
  const cloneGroup = marquee.cloneNode(true);
  marquee.appendChild(cloneGroup);

  // Calculate total width of original images
  let totalWidth = 0;
  images.forEach((img) => {
    totalWidth += img.offsetWidth;
  });

  // Set animation duration based on width and desired speed
  const pixelsPerSecond = 50; // Adjust this for speed control
  const duration = totalWidth / pixelsPerSecond;

  // Create the animation
  const tl = gsap.timeline({ repeat: -1 });

  // Animate the marquee
  tl.to(marquee, {
    x: -totalWidth,
    duration: duration,
    ease: "none",
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
    },
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initMarquee, 100);
  });

  function initMarquee() {
    // Recalculate width on resize
    totalWidth = 0;
    images.forEach((img) => {
      totalWidth += img.offsetWidth;
    });

    // Reset position and restart animation
    gsap.set(marquee, { x: 0 });
    tl.restart();
  }
});

// slider ad card code ===================================================

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".slider-prod-card");
  const dots = document.querySelectorAll(".dot");
  const nextBtns = document.querySelectorAll(".nxt-btn");
  const prevBtns = document.querySelectorAll(".prev-btn");
  let currentIndex = 0;

  // Function to update the slider
  function updateSlider(index) {
    // Update cards
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Next button click handler
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateSlider(currentIndex);
    });
  });

  // Previous button click handler
  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateSlider(currentIndex);
    });
  });

  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
});

// Technical Details ===============================================
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".inner-technical-dtl");
  const nextBtn = document.querySelector(".nxt-btn-trs");
  const prevBtn = document.querySelector(".prev-btn-trs");
  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });
  }

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  });

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  });

  // Initialize first card
  showCard(0);
});

// client about us =======================================================
document.addEventListener("DOMContentLoaded", function () {
  // Get all elements
  const clientCards = document.querySelectorAll(".clients-card");
  const nextBtn = document.querySelector(".nxt-btn-trs-1");
  const prevBtn = document.querySelector(".prev-btn-trs-1");
  let currentIndex = 0;

  // Function to show specific card
  function showClientCard(index) {
    clientCards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });
  }

  // Next button click handler
  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % clientCards.length;
    showClientCard(currentIndex);
  });

  // Previous button click handler
  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + clientCards.length) % clientCards.length;
    showClientCard(currentIndex);
  });

  // Initialize by showing the first card
  showClientCard(0);
});
