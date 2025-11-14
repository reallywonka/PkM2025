import { html } from "/Data/HTML_tutorial.js";
import { css } from "/Data/CSS_tutorial.js";
import { javascript } from "/Data/JS_tutorial.js";
import { design } from "/Data/UIUX_tutorial.js";

import { References } from "/Data/References.js";
import { Excersices } from "/Data/excersices.js";

// Gabungkan semua data tutorial (untuk menu pop-up)
const tutorials = {
  html: html,
  css: css,
  javascript: javascript,
  design: design,
};

const topicPageMap = {
  html: "HTML_topic.html",
  css: "UIUX_topic.html",
  javascript: "JavaScript_topic.html",
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

  // Elemen Konten Utama
  const sidebar = document.getElementById("sidebar");
  const sidebarTitle = document.getElementById("sidebar-title");
  const sidebarMenu = document.getElementById("sidebar-menu");
  const contentArea = document.getElementById("content-area");

  // Elemen untuk generate menu di pop-up
  const tutorialsNavContent = document.getElementById("tutorials-nav-content");
  const referencesNavContent = document.getElementById(
    "references-nav-content"
  );
  const excersicesNavContent = document.getElementById(
    "excersices-nav-content"
  );

  // --- Fungsi-fungsi ---

  function closeAllPanels() {
    NestedNavigation.classList.add("nested_navigation_hidden");
    NestedNavigationRefs.classList.add("nested_navigation_hidden");
    NestedNavigationExcs.classList.add("nested_navigation_hidden");

    tutorialEL.classList.remove("bg-black", "text-white");
    referencesEL.classList.remove("bg-black", "text-white");
    excersicesEL.classList.remove("bg-black", "text-white");
  }

  function copyToClipboard(text, button) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);

    try {
      document.execCommand("copy");
      button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      button.disabled = true;
    } catch (err) {
      console.error("Gagal menyalin: ", err);
      button.innerText = "Failed!";
    }

    document.body.removeChild(tempTextArea);

    setTimeout(() => {
      button.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
      button.disabled = false;
    }, 2000);
  }

  function addCopyButtonsToCodeBlocks() {
    const allCodeBlocks = contentArea.querySelectorAll("pre");

    allCodeBlocks.forEach((preElement) => {
      if (preElement.parentNode.classList.contains("code-block-wrapper")) {
        return;
      }

      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper";

      const button = document.createElement("button");
      button.className = "copy-code-btn";
      button.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';

      button.addEventListener("click", () => {
        const codeToCopy = preElement.innerText;
        copyToClipboard(codeToCopy, button);
      });

      preElement.parentNode.insertBefore(wrapper, preElement);
      wrapper.appendChild(preElement);
      wrapper.appendChild(button);
    });
  }

  function renderContent(lessonId) {
    try {
      // Mengambil dari data UIUX
      const lesson = tutorials.design.lessons.find((l) => l.id === lessonId);
      if (lesson) {
        contentArea.innerHTML = lesson.content;
        addCopyButtonsToCodeBlocks();
        updateActiveSidebarLink(lessonId);
      } else {
        contentArea.innerHTML = "<h1>Materi tidak ditemukan</h1>";
      }
    } catch (e) {
      console.error("Error rendering content:", e);
      contentArea.innerHTML =
        "<h1>Terjadi kesalahan</h1><p>Gagal memuat materi.</p>";
    }
  }

  function renderSidebar() {
    // Render sidebar UIUX
    const topic = tutorials.design;
    if (!topic) {
      sidebar.style.display = "none";
      return;
    }

    sidebar.style.display = "block";
    sidebarTitle.textContent = `${topic.title}`;
    sidebarMenu.innerHTML = "";

    topic.lessons.forEach((lesson) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${lesson.id}`;
      a.textContent = lesson.title;
      a.dataset.topic = "design";
      a.dataset.lesson = lesson.id;
      a.id = `link-${lesson.id}`;
      li.appendChild(a);
      sidebarMenu.appendChild(li);
    });
  }

  function updateActiveSidebarLink(activeLessonId) {
    // ... (kode updateActiveSidebarLink tidak berubah) ...
    document
      .querySelectorAll("#sidebar-menu a")
      .forEach((link) => link.classList.remove("active"));

    const activeLink = document.getElementById(`link-${activeLessonId}`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  function generateNavMenus() {
    // ... (kode generateNavMenus sama persis seperti di script.js) ...
    const tutorialTopics = Object.keys(tutorials);

    tutorialTopics.forEach((topicKey) => {
      const topicData = tutorials[topicKey];
      const pageUrl = topicPageMap[topicKey] || "#";

      const itemDiv = document.createElement("div");
      itemDiv.className = "nested-navigation-item";
      let linksUIUX = `<h2>${topicData.title}</h2>`;
      linksUIUX += `
        <a 
          href="${pageUrl}" 
          class="nav-topic-link" 
          data-topic="${topicKey}"
        >
          Learn ${topicData.title}
        </a>`;
      itemDiv.innerHTML = linksUIUX;
      tutorialsNavContent.appendChild(itemDiv);
    });

    // Perbaikan untuk References & Excersices
    Object.keys(References).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(References, key)) {
        const category = References[key];
        if (typeof category === "object" && category.title) {
          const itemDiv = document.createElement("div");
          itemDiv.className = "nested-navigation-item";
          let linksUIUX = `<h2>${category.title} References</h2>`;
          if (Array.isArray(category.lessons)) {
            linksUIUX += `
              <a href="#" class="nav-topic-link" data-topic="${key}">
                View ${category.title} References
              </a>`;
          }
          itemDiv.innerHTML = linksUIUX;
          referencesNavContent.appendChild(itemDiv);
        }
      }
    });

    Object.keys(Excersices).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(Excersices, key)) {
        const category = Excersices[key];
        if (typeof category === "object" && category.title) {
          const itemDiv = document.createElement("div");
          itemDiv.className = "nested-navigation-item";
          let linksUIUX = `<h2>${category.title} Excercise</h2>`;
          if (Array.isArray(category.lessons)) {
            linksUIUX += `
              <a href="#" class="nav-topic-link" data-topic="${key}">
                Try ${category.title} Excercises
              </a>`;
          }
          itemDiv.innerHTML = linksUIUX;
          excersicesNavContent.appendChild(itemDiv);
        }
      }
    });
  }

  // --- Event Listeners ---
  tutorialEL.addEventListener("click", () => {
    // ... (kode event listener header tidak berubah) ...
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
    // ... (kode event listener header tidak berubah) ...
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
    // ... (kode event listener header tidak berubah) ...
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

  // Event listener sidebar
  sidebarMenu.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
      const lessonId = e.target.dataset.lesson;
      renderContent(lessonId); // Panggil renderContent versi simpel
      contentArea.scrollTo(0, 0);
    }
  });

  // --- Kode Inisialisasi ---
  // Logika Light/Dark Mode (SAMA)
  const lightDarkBtn = document.getElementById("light-dark-toggle");
  // ... (kode dark mode tidak berubah) ...
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

  // Event listener untuk tombol logo
  const logoBtn = document.getElementById("logo-btn");
  logoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "Index.html"; // Pastikan kembali ke home
  });

  // Generate menu di pop-up header
  generateNavMenus();

  // Langsung muat sidebar dan konten UIUX
  renderSidebar();
  renderContent("design-intro"); // Langsung tampilkan materi pertama
});
