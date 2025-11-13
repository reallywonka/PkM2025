// [DIUBAH] Import file data yang sudah dipisah
import { html } from "../../Data/HTML_tutorial.js";
import { css } from "../../Data/CSS_tutorial.js";
import { javascript } from "../../Data/JS_tutorial.js";
import { design } from "../../Data/UIUX_tutorial.js";

import { References } from "../../Data/References.js";
import { Excersices } from "../../Data/excersices.js";

// [DIUBAH] Gabungkan semua data tutorial dalam satu objek
const tutorials = {
  html: html,
  css: css,
  javascript: javascript,
  design: design,
};

// [BARU] Buat satu "database" untuk semua sumber data
const dataSources = {
  Tutorial: tutorials,
  References: References,
  Excercise: Excersices,
};

// [BARU] Variabel untuk melacak data mana yang sedang aktif
let currentData = dataSources.Tutorial; // Default-nya adalah Tutorial

// [DIUBAH] Kita bungkus SEMUA kode di dalam event listener ini
document.addEventListener("DOMContentLoaded", () => {
  // --- Elemen Header & Navigasi Pop-up ---
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
  const sidebarTitle = document.getElementById("sidebar-title");
  const sidebarMenu = document.getElementById("sidebar-menu");
  const contentArea = document.getElementById("content-area");

  // --- Elemen untuk generate menu di pop-up ---
  const tutorialsNavContent = document.getElementById("tutorials-nav-content");
  const referencesNavContent = document.getElementById(
    "references-nav-content"
  );
  const excersicesNavContent = document.getElementById(
    "excersices-nav-content"
  );

  // --- Variabel ---
  let staticHomeContent = "";

  // --- FUNGSI-FUNGSI ---

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

  // [DIUBAH] Fungsi ini sekarang mengambil data dari 'dataObject'
  function renderContent(topicKey, lessonId, dataObject) {
    try {
      const lesson = dataObject[topicKey].lessons.find(
        (l) => l.id === lessonId
      );
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

  // [DIUBAH] Fungsi ini sekarang mengambil data dari 'dataObject'
  function renderSidebar(topicKey, menuType, dataObject) {
    const topic = dataObject[topicKey];
    if (!topic) {
      sidebar.style.display = "none";
      return;
    }

    sidebar.style.display = "block";
    const type = menuType || "Tutorial";
    sidebarTitle.textContent = `${topic.title} ${type}`;
    sidebarMenu.innerHTML = "";

    topic.lessons.forEach((lesson) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${lesson.id}`;
      a.textContent = lesson.title;
      a.dataset.topic = topicKey;
      a.dataset.lesson = lesson.id;
      a.id = `link-${lesson.id}`;
      li.appendChild(a);
      sidebarMenu.appendChild(li);
    });
  }

  function updateActiveSidebarLink(activeLessonId) {
    document
      .querySelectorAll("#sidebar-menu a")
      .forEach((link) => link.classList.remove("active"));
    const activeLink = document.getElementById(`link-${activeLessonId}`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // [DIUBAH] Fungsi ini sekarang membuat 3 menu dari 3 sumber data
  function generateNavMenus() {
    // 1. Buat Menu Tutorials (dari data 'tutorials')
    Object.keys(tutorials).forEach((topicKey) => {
      const topicData = tutorials[topicKey];
      const itemDiv = document.createElement("div");
      itemDiv.className = "nested-navigation-item";
      itemDiv.innerHTML = `
        <h2>${topicData.title}</h2>
        <button 
          class="nav-topic-btn" 
          data-topic="${topicKey}"
          data-menu-type="Tutorial" 
        >
          Learn ${topicData.title}
        </button>`;
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

  // --- EVENT LISTENERS ---

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

  // [DIUBAH] Klik di Sidebar sekarang menggunakan 'currentData'
  sidebarMenu.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
      const topicKey = e.target.dataset.topic;
      const lessonId = e.target.dataset.lesson;
      // 'currentData' sudah diset saat menu pop-up diklik
      renderContent(topicKey, lessonId, currentData);
      contentArea.scrollTo(0, 0);
    }
  });

  // [DIUBAH] Handler klik untuk SEMUA menu pop-up
  function handleNavMenuClick(event) {
    const target = event.target.closest(".nav-topic-btn");
    if (!target) return;
    event.preventDefault();

    const topicKey = target.dataset.topic;
    const menuType = target.dataset.menuType; // e.g., "Tutorial", "References"

    // [LOGIKA BARU] Pilih data source yang benar
    const dataObject = dataSources[menuType];
    currentData = dataObject; // Simpan data ini untuk klik sidebar

    if (dataObject && dataObject[topicKey]) {
      renderSidebar(topicKey, menuType, dataObject);
      const firstLessonId = dataObject[topicKey].lessons[0].id;
      renderContent(topicKey, firstLessonId, dataObject);
      closeAllPanels();
    } else {
      // Fallback jika data belum ada (misal: Excersices.js kosong)
      alert(`Materi ${menuType} untuk ${topicKey} belum tersedia.`);
      closeAllPanels();
    }
  }

  // Pasang listener ke SEMUA TIGA menu
  tutorialsNavContent.addEventListener("click", handleNavMenuClick);
  referencesNavContent.addEventListener("click", handleNavMenuClick);
  excersicesNavContent.addEventListener("click", handleNavMenuClick);

  // --- KODE INISIALISASI ---

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
    sidebar.style.display = "none";
    contentArea.innerHTML = staticHomeContent;
    closeAllPanels();
    currentData = dataSources.Tutorial; // Reset ke default
  });

  // Simpan konten beranda
  staticHomeContent = contentArea.innerHTML;

  // Generate menu pop-up
  generateNavMenus();

  // Sembunyikan sidebar di awal
  sidebar.style.display = "none";

  // [DIUBAH] Klik di Halaman Beranda (Kartu)
  contentArea.addEventListener("click", (e) => {
    // Tombol "Mulai Belajar"
    if (
      e.target.id === "home-start-btn" ||
      e.target.closest("#home-start-btn")
    ) {
      e.preventDefault();
      tutorialEL.click();
    }

    // Kartu-kartu (HTML, CSS, dll)
    const clickedCard = e.target.closest(".tech-item[data-topic]");
    if (clickedCard) {
      e.preventDefault();
      const topicKey = clickedCard.dataset.topic;

      // Pastikan ini selalu memuat data 'Tutorial'
      currentData = dataSources.Tutorial;

      if (currentData[topicKey]) {
        renderSidebar(topicKey, "Tutorial", currentData);
        const firstLessonId = currentData[topicKey].lessons[0].id;
        renderContent(topicKey, firstLessonId, currentData);
      }
    }

    // [BARU] Handler untuk tombol RUN (HTML/CSS)
    const runBtn = e.target.closest(".exc-run-btn");
    if (runBtn) {
      e.preventDefault();
      const container = runBtn.closest(".exc-container");
      const input = container.querySelector(".exc-code-input");
      const outputFrame = container.querySelector(".exc-output-frame");

      if (input && outputFrame) {
        const code = input.value;
        // srcdoc adalah cara aman untuk memuat HTML ke iframe
        outputFrame.srcdoc = code;
      }
    }

    // [BARU] Handler untuk tombol RUN JS (JavaScript)
    const runJsBtn = e.target.closest(".exc-run-js-btn");
    if (runJsBtn) {
      e.preventDefault();
      const container = runJsBtn.closest(".exc-container");
      const input = container.querySelector(".exc-code-input");
      const output = container.querySelector(".exc-js-output"); // Ini adalah <pre>

      if (input && output) {
        const code = input.value;
        output.innerHTML = ""; // Bersihkan output sebelumnya

        // --- "Menyadap" console.log ---
        const oldLog = console.log;
        console.log = function (...args) {
          const message = args.map(String).join(" ");
          output.innerHTML += `<div class="log-line">${message}</div>`;
          // Terapkan juga ke console.log asli
          oldLog.apply(console, args);
        };
        // ------------------------------

        try {
          // new Function() lebih aman dari eval()
          new Function(code)();
        } catch (err) {
          // Tangkap error jika kode pengguna salah
          output.innerHTML += `<div class="log-line error">${err}</div>`;
        }

        // Kembalikan console.log ke normal
        console.log = oldLog;
      }
    }
  });

  // --- SELESAI ---
});
