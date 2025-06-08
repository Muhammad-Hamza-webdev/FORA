document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.querySelector(".marquee");
  const images = document.querySelectorAll(".marquee img");
  const container = document.querySelector(".marquee-container");

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

// counter code

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");
  const counterSection = document.querySelector(".counter");
  let animationStarted = false;

  function formatNumber(number, format) {
    if (!format) return number.toString();

    if (format === "M+") {
      return (number / 1000000).toFixed(0) + "M+";
    }
    if (format === "+") {
      return number.toString() + "+";
    }
    return number.toString();
  }

  function animateCounters() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const format = counter.getAttribute("data-format");
      const duration = 3000; // animation duration in ms
      const step = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = formatNumber(Math.floor(current), format);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = formatNumber(target, format);
        }
      };

      updateCounter();
    });
  }

  function checkScroll() {
    const sectionTop = counterSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.6; // 60% of viewport

    if (sectionTop < triggerPoint && !animationStarted) {
      animationStarted = true;
      animateCounters();
      // Remove the scroll event listener after triggering
      window.removeEventListener("scroll", checkScroll);
    }
  }

  // Initial check in case the section is already visible
  checkScroll();

  // Add scroll event listener
  window.addEventListener("scroll", checkScroll);
});
