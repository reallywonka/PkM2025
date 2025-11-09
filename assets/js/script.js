import { tutorials } from "../../Data/tutorial.js";
import { References } from "../../Data/References.js";
import { Excersices } from "../../Data/excersices.js";

// [DIUBAH] Kita bungkus SEMUA kode di dalam event listener ini
// Ini memastikan HTML sudah dimuat penuh sebelum kita mencari elemen
document.addEventListener("DOMContentLoaded", () => {
  // --- SEMUA KODE PINDAH KE SINI ---

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
  const referencesNavContent = document.getElementById("references-nav-content");
  const excersicesNavContent = document.getElementById("excersices-nav-content");

  // Variabel untuk menyimpan HTML beranda
  let staticHomeContent = "";

  // --- Fungsi-fungsi ---
  // (Fungsi didefinisikan di dalam DOMContentLoaded agar bisa
  //  langsung mengakses const di atas tanpa error)

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

  function renderContent(topicKey, lessonId) {
    try {
      const lesson = tutorials[topicKey].lessons.find((l) => l.id === lessonId);
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

  function renderSidebar(topicKey) {
    const topic = tutorials[topicKey];
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

  function generateNavMenus() {
    const tutorialTopics = Object.keys(tutorials);

    tutorialTopics.forEach((topicKey) => {
      const topicData = tutorials[topicKey];
      const itemDiv = document.createElement("div");
      itemDiv.className = "nested-navigation-item";
      let linksHTML = `<h2>${topicData.title}</h2>`;
      linksHTML += `
        <button 
          class="nav-topic-btn" 
          data-topic="${topicKey}"
        >
          Learn ${topicData.title}
        </button>`;
      itemDiv.innerHTML = linksHTML;
      tutorialsNavContent.appendChild(itemDiv);
    });

    Object.keys(References).forEach((key) => {
      if (key === "name") return;
      const category = References[key];
      const itemDiv = document.createElement("div");
      itemDiv.className = "nested-navigation-item";
      let linksHTML = `<h2>${category.name}</h2>`;
      category.menu.slice(0, 3).forEach((item) => {
        linksHTML += `<a href="${item.link}" target="_blank">${item.title}</a>`;
      });
      itemDiv.innerHTML = linksHTML;
      referencesNavContent.appendChild(itemDiv);
    });

    Object.keys(Excersices).forEach((key) => {
      if (key === "name") return;
      const category = Excersices[key];
      const itemDiv = document.createElement("div");
      itemDiv.className = "nested-navigation-item";
      let linksHTML = `<h2>${category.name}</h2>`;
      category.menu.slice(0, 3).forEach((item) => {
        linksHTML += `<a href="${item.link}" target="_blank">${item.title}</a>`;
      });
      itemDiv.innerHTML = linksHTML;
      excersicesNavContent.appendChild(itemDiv);
    });
  }

  // --- Event Listeners ---
  // (Ini juga harus di dalam, setelah const elemen didefinisikan)

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
    closeAllPAnels();
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

  sidebarMenu.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
      const topicKey = e.target.dataset.topic;
      const lessonId = e.target.dataset.lesson;
      renderContent(topicKey, lessonId);
    }
  });

  tutorialsNavContent.addEventListener("click", (e) => {
    const target = e.target.closest(".nav-topic-btn, .nav-lesson-link");
    if (!target) return;
    e.preventDefault();
    const topicKey = target.dataset.topic;
    if (target.classList.contains("nav-topic-btn")) {
      renderSidebar(topicKey);
      const firstLessonId = tutorials[topicKey].lessons[0].id;
      renderContent(topicKey, firstLessonId);
    }
    if (target.classList.contains("nav-lesson-link")) {
      const lessonId = target.dataset.lesson;
      renderSidebar(topicKey);
      renderContent(topicKey, lessonId);
    }
    closeAllPanels();
  });

  // --- Kode Inisialisasi ---
  // (Kode yang harus berjalan saat halaman pertama kali dimuat)

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

  // Event listener untuk tombol logo (kembali ke beranda)
  const logoBtn = document.getElementById("logo-btn");
  logoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.style.display = "none";
    contentArea.innerHTML = staticHomeContent; // Muat beranda yang tersimpan
    closeAllPanels();
  });

  // Simpan konten beranda awal (yang ada di HTML)
  staticHomeContent = contentArea.innerHTML;

  // Generate menu di pop-up header
  generateNavMenus();

  // Sembunyikan sidebar saat pertama kali memuat (karena ini beranda)
  sidebar.style.display = "none";

  // Event listener untuk tombol "Mulai Belajar" di beranda
  contentArea.addEventListener("click", (e) => {
    if (
      e.target.id === "home-start-btn" ||
      e.target.closest("#home-start-btn")
    ) {
      e.preventDefault();
      tutorialEL.click(); // Simulasikan klik pada menu 'Tutorials'
    }
  });

  // --- SELESAI ---
});
