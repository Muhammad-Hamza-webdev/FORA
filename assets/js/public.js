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

// language dropdown ===================================================================================================================================

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("langDropdown");
  const selectedLang = document.getElementById("selectedLang");
  const optionsContainer = dropdown.querySelector(".language-options");

  // Available language options (flags only)
  const languages = [
    { code: "UK", flag: "assets/img/UK.svg" },
    { code: "US", flag: "assets/img/US.svg" },
  ];

  // Initialize with default language
  let currentLang = "UK";

  // Function to update the dropdown options
  function updateOptions() {
    // Clear existing options
    optionsContainer.innerHTML = "";

    // Add available options (excluding current selection)
    languages.forEach((lang) => {
      if (lang.code !== currentLang) {
        const option = document.createElement("div");
        option.className = "language-option";
        option.dataset.lang = lang.code;

        option.innerHTML = `<img src="${lang.flag}" alt="${lang.code}" class="language-flag">`;

        option.addEventListener("click", () => selectLanguage(lang.code));
        optionsContainer.appendChild(option);
      }
    });
  }

  // Function to handle language selection
  function selectLanguage(langCode) {
    currentLang = langCode;
    updateSelectedLang();
    updateOptions();
    closeDropdown();
  }

  // Function to update the selected language display
  function updateSelectedLang() {
    const selectedLanguage = languages.find(
      (lang) => lang.code === currentLang
    );
    selectedLang.innerHTML = `
      <img src="${selectedLanguage.flag}" alt="${currentLang}" class="language-flag">
      <img src="assets/img/Arrow-down.svg" alt="Arrow" class="arrow">
    `;
  }

  // Dropdown visibility functions
  function toggleDropdown() {
    dropdown.classList.toggle("open");
  }

  function closeDropdown() {
    dropdown.classList.remove("open");
  }

  // Event listeners
  selectedLang.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  // Initialize
  updateSelectedLang();
  updateOptions();
});
