document.addEventListener("DOMContentLoaded", function () {
  const menuTriggers = document.querySelectorAll(".mega-menu-trigger");

  menuTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the current mega menu element
      const parentLi = this.closest("li");
      const megaMenu =
        parentLi.querySelector(".mega-menu") ||
        parentLi.querySelector(".mega-menu-two");

      // Close all mega menus
      document
        .querySelectorAll(".mega-menu, .mega-menu-two")
        .forEach((menu) => {
          if (menu !== megaMenu) {
            menu.classList.remove("active");
          }
        });

      // Toggle the clicked one
      megaMenu.classList.toggle("active");
    });
  });

  // Optional: Click outside to close all mega menus
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-mega-menu")) {
      document
        .querySelectorAll(".mega-menu, .mega-menu-two")
        .forEach((menu) => {
          menu.classList.remove("active");
        });
    }
  });
});

// mega menu for mobile
document.addEventListener("DOMContentLoaded", function () {
  // Get all mega menu triggers
  const triggers = document.querySelectorAll(".mega-menu-trigger-m");

  // Add click event to each trigger
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target menu ID from data attribute
      const targetId = this.getAttribute("data-target");
      const targetMenu = document.getElementById(targetId);

      // Check if the clicked menu is already active
      const isActive = targetMenu.classList.contains("active");

      // Close all mega menus first
      document
        .querySelectorAll(".mega-menu-m, .mega-menu-two-m")
        .forEach((menu) => {
          menu.classList.remove("active");
        });

      // If the clicked menu wasn't active, open it
      if (!isActive) {
        targetMenu.classList.add("active");
      }
    });
  });

  // Close menus when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-mega-menu-m")) {
      document
        .querySelectorAll(".mega-menu-m, .mega-menu-two-m")
        .forEach((menu) => {
          menu.classList.remove("active");
        });
    }
  });
});

// language dropdown ===================================================================================================================================

document.addEventListener("DOMContentLoaded", function () {
  // Available language options
  const languages = [
    { code: "UK", flag: "assets/img/UK.svg" },
    { code: "US", flag: "assets/img/US.svg" },
  ];

  // Initialize all dropdowns
  const dropdowns = document.querySelectorAll(".language-dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".language-button");
    const optionsContainer = dropdown.querySelector(".language-options");
    let currentLang = "UK";

    // Update the selected language display
    function updateSelectedLang() {
      const selectedLanguage = languages.find(
        (lang) => lang.code === currentLang
      );
      button.innerHTML = `
        <img src="${selectedLanguage.flag}" alt="${currentLang}" class="language-flag">
        <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.91 0.433028L12.97 1.49403L7.193 7.27303C7.10043 7.36618 6.99036 7.44011 6.86911 7.49056C6.74786 7.54101 6.61783 7.56698 6.4865 7.56698C6.35517 7.56698 6.22514 7.54101 6.10389 7.49056C5.98264 7.44011 5.87257 7.36618 5.78 7.27303L-2.65457e-07 1.49403L1.06 0.434028L6.485 5.85803L11.91 0.433028Z"
                  fill="#FEFEFE"
                />
              </svg>
      `;
    }

    // Update the dropdown options
    function updateOptions() {
      optionsContainer.innerHTML = "";

      languages.forEach((lang) => {
        if (lang.code !== currentLang) {
          const option = document.createElement("div");
          option.className = "language-option";
          option.innerHTML = `<img src="${lang.flag}" alt="${lang.code}" class="language-flag">`;

          option.addEventListener("click", () => {
            currentLang = lang.code;
            updateSelectedLang();
            updateOptions();
            dropdown.classList.remove("open");
          });

          optionsContainer.appendChild(option);
        }
      });
    }

    // Toggle dropdown
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
    });

    // Initialize
    updateSelectedLang();
    updateOptions();
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  });
});
