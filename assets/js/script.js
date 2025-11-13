// [DIUBAH] Import file data yang sudah dipisah
// Kita tetap butuh ini untuk generate menu di header
import { html } from "../../Data/HTML_tutorial.js";
import { css } from "../../Data/CSS_tutorial.js";
import { javascript } from "../../Data/JS_tutorial.js";
import { design } from "../../Data/UIUX_tutorial.js";

import { References } from "../../Data/References.js";
import { Excersices } from "../../Data/excersices.js";

// [BARU] Gabungkan semua data tutorial yang terpisah ke dalam satu objek
const tutorials = {
  html: html,
  css: css,
  javascript: javascript,
  design: design,
};

// [BARU] Peta untuk halaman topik (Model MPA)
// Pastikan nama filenya cocok dengan yang akan kamu buat nanti
const topicPageMap = {
  html: "HTML_topic.html",
  css: "CSS_topic.html",
  javascript: "JS_topic.html",
  design: "UIUX_topic.html",
};

document.addEventListener("DOMContentLoaded", () => {
  // Elemen Header & Navigasi Pop-up
  const NestedNavigation = document.getElementById("nested-navigation_id");
  const tutorialEL = document.getElementById("tutorial-btn");
  const nestedNavigationCloseBtn = document.getElementById(
    "nested-navigation-close-Btn"
  );
  const NestedNavigationRefs = document.getElementById(
    "nested-navigation_references"
  );
  const referencesEL = document.getElementById("references-btn");
  const nestedNavigationCloseBtnRefs = document.getElementById(
    "nested-navigation-close-Btn-refs"
  );
  const NestedNavigationExcs = document.getElementById(
    "nested-navigation_excersices"
  );
  const excersicesEL = document.getElementById("excersices-btn");
  const nestedNavigationCloseBtnExcs = document.getElementById(
    "nested-navigation-close-Btn-excs"
  );

  // --- Elemen Konten Utama ---
  const sidebar = document.getElementById("sidebar");
  const contentArea = document.getElementById("content-area");

  // --- Elemen untuk generate menu di pop-up ---
  const tutorialsNavContent = document.getElementById("tutorials-nav-content");
  const referencesNavContent = document.getElementById(
    "references-nav-content"
  );
  const excersicesNavContent = document.getElementById(
    "excersices-nav-content"
  );

  // --- Fungsi-fungsi (HANYA UNTUK HEADER & HOMEPAGE) ---

  function closeAllPanels() {
    NestedNavigation.classList.add("nested_navigation_hidden");
    NestedNavigationRefs.classList.add("nested_navigation_hidden");
    NestedNavigationExcs.classList.add("nested_navigation_hidden");

    tutorialEL.classList.remove("bg-black", "text-white");
    referencesEL.classList.remove("bg-black", "text-white");
    excersicesEL.classList.remove("bg-black", "text-white");
  }

  // [DIUBAH] Fungsi ini sekarang membuat link <a> ke halaman topik
  function generateNavMenus() {
    const tutorialTopics = Object.keys(tutorials);

    tutorialTopics.forEach((topicKey) => {
      const topicData = tutorials[topicKey];
      const pageUrl = topicPageMap[topicKey] || "#"; // Ambil URL dari Peta

      const itemDiv = document.createElement("div");
      itemDiv.className = "nested-navigation-item";
      let linksHTML = `<h2>${topicData.title}</h2>`;
      linksHTML += `
        <a 
          href="${pageUrl}" 
          class="nav-topic-link" 
          data-topic="${topicKey}"
          data-menu-type="Tutorial" 
        >
          Learn ${topicData.title}
        </a>`;
      itemDiv.innerHTML = linksHTML;
      tutorialsNavContent.appendChild(itemDiv);
    });

    // 2. Buat Menu References (dari data 'References')
    Object.keys(References).forEach((topicKey) => {
      const topicData = References[topicKey];
      const itemDiv = document.createElement("div");
      itemDiv.className = "nested-navigation-item";
      itemDiv.innerHTML = `
        <h2>${topicData.title} References</h2>
        <button 
          class="nav-topic-btn" 
          data-topic="${topicKey}"
          data-menu-type="References"
        >
          ${topicData.title} References
        </button>`;
      referencesNavContent.appendChild(itemDiv);
    });

    // 3. Buat Menu Excercises (dari data 'Excersices')
    // (Jika Excersices.js kosong, bagian ini tidak akan menampilkan apa-apa)
    Object.keys(Excersices).forEach((topicKey) => {
      const topicData = Excersices[topicKey];
      const itemDiv = document.createElement("div");
      itemDiv.className = "nested-navigation-item";
      itemDiv.innerHTML = `
        <h2>${topicData.title} Excercise</h2>
        <button 
          class="nav-topic-btn" 
          data-topic="${topicKey}"
          data-menu-type="Excercise"
        >
          ${topicData.title} Excercise
        </button>`;
      excersicesNavContent.appendChild(itemDiv);
    });
  }

  // --- Event Listeners (HANYA UNTUK HEADER & HOMEPAGE) ---

  // Tombol Buka/Tutup Menu Header
  tutorialEL.addEventListener("click", () => {
    const isOpening = NestedNavigation.classList.contains(
      "nested_navigation_hidden"
    );
    closeAllPanels();
    if (isOpening) {
      tutorialEL.classList.add("bg-black", "text-white");
      NestedNavigation.classList.remove("nested_navigation_hidden");
    }
  });
  nestedNavigationCloseBtn.addEventListener("click", () => {
    closeAllPanels();
  });

  referencesEL.addEventListener("click", () => {
    const isOpening = NestedNavigationRefs.classList.contains(
      "nested_navigation_hidden"
    );
    closeAllPanels();
    if (isOpening) {
      referencesEL.classList.add("bg-black", "text-white");
      NestedNavigationRefs.classList.remove("nested_navigation_hidden");
    }
  });
  nestedNavigationCloseBtnRefs.addEventListener("click", () => {
    closeAllPanels();
  });

  excersicesEL.addEventListener("click", () => {
    const isOpening = NestedNavigationExcs.classList.contains(
      "nested_navigation_hidden"
    );
    closeAllPanels();
    if (isOpening) {
      excersicesEL.classList.add("bg-black", "text-white");
      NestedNavigationExcs.classList.remove("nested_navigation_hidden");
    }
  });
  nestedNavigationCloseBtnExcs.addEventListener("click", () => {
    closeAllPanels();
  });

  // [DIHAPUS] Semua listener untuk sidebar dan konten SPA dihapus
  // sidebarMenu.addEventListener("click", ...);
  // tutorialsNavContent.addEventListener("click", ...);

  // --- Kode Inisialisasi (Hanya untuk Homepage) ---

  // Logika Light/Dark Mode
  const lightDarkBtn = document.getElementById("light-dark-toggle");
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
  lightDarkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    let theme = "light";
    if (document.body.classList.contains("dark-mode")) {
      theme = "dark";
    }
    localStorage.setItem("theme", theme);
  });

  // Tombol Logo
  const logoBtn = document.getElementById("logo-btn");
  logoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeAllPanels(); // Cukup tutup panel, kita sudah di home
  });

  // Generate menu di pop-up header
  generateNavMenus();

  // [INTI MASALAH] Sembunyikan sidebar di homepage
  sidebar.style.display = "none";

  // Event listener untuk tombol "Mulai Belajar" di beranda
  contentArea.addEventListener("click", (e) => {
    // Tombol "Mulai Belajar"
    if (
      e.target.id === "home-start-btn" ||
      e.target.closest("#home-start-btn")
    ) {
      e.preventDefault();
      tutorialEL.click();
    }

    // [DIHMUS] Logika klik kartu SPA dihapus total.
  });

  // --- SELESAI ---
});
