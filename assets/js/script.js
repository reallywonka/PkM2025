/*
  PERHATIKAN: Path import sudah diperbaiki (menggunakan ../../)
*/
import { tutorials } from "../../Data/tutorial.js";
import { References } from "../../Data/References.js";
import { Excersices } from "../../Data/excersices.js";

/* Mengambil semua elemen DOM yang kita butuhkan,
  baik yang lama maupun yang baru.
*/

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

// [BARU] Elemen Konten Utama
const sidebar = document.getElementById("sidebar");
const sidebarTitle = document.getElementById("sidebar-title");
const sidebarMenu = document.getElementById("sidebar-menu");
const contentArea = document.getElementById("content-area");

// [BARU] Elemen untuk generate menu di pop-up
const tutorialsNavContent = document.getElementById("tutorials-nav-content");
const referencesNavContent = document.getElementById("references-nav-content");
const excersicesNavContent = document.getElementById("excersices-nav-content");

/*
  Logika Lama (milikmu) untuk tombol header (Tutorials, Refs, Excs).
  Logika ini sudah benar dan kita pertahankan.
*/
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

function closeAllPanels() {
  NestedNavigation.classList.add("nested_navigation_hidden");
  NestedNavigationRefs.classList.add("nested_navigation_hidden");
  NestedNavigationExcs.classList.add("nested_navigation_hidden");

  tutorialEL.classList.remove("bg-black", "text-white");
  referencesEL.classList.remove("bg-black", "text-white");
  excersicesEL.classList.remove("bg-black", "text-white");
}

/*
  --- [LOGIKA BARU] Dimulai dari sini ---
*/

// [BARU] Fungsi untuk me-render konten materi ke area utama
function renderContent(topicKey, lessonId) {
  try {
    const lesson = tutorials[topicKey].lessons.find((l) => l.id === lessonId);
    if (lesson) {
      contentArea.innerHTML = lesson.content;
      // Update link aktif di sidebar
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

// [BARU] Fungsi untuk mengisi sidebar berdasarkan topik yang dipilih
function renderSidebar(topicKey) {
  const topic = tutorials[topicKey];
  if (!topic) {
    sidebar.style.display = "none"; // Sembunyikan sidebar jika topik tidak ada
    return;
  }

  sidebar.style.display = "block"; // Tampilkan sidebar
  sidebarTitle.textContent = `Materi ${topic.title}`;
  sidebarMenu.innerHTML = ""; // Kosongkan menu sebelumnya

  topic.lessons.forEach((lesson) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${lesson.id}`;
    a.textContent = lesson.title;
    a.dataset.topic = topicKey; // Simpan info topik
    a.dataset.lesson = lesson.id; // Simpan info lesson id
    a.id = `link-${lesson.id}`; // ID unik untuk styling 'active'
    li.appendChild(a);
    sidebarMenu.appendChild(li);
  });
}

// [BARU] Fungsi untuk menandai link sidebar yang sedang aktif
function updateActiveSidebarLink(activeLessonId) {
  // Hapus kelas 'active' dari semua link
  document
    .querySelectorAll("#sidebar-menu a")
    .forEach((link) => link.classList.remove("active"));
  
  // Tambahkan kelas 'active' ke link yang diklik
  const activeLink = document.getElementById(`link-${activeLessonId}`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// [BARU] Event listener untuk sidebar (menggunakan event delegation)
sidebarMenu.addEventListener("click", (e) => {
  e.preventDefault(); // Mencegah URL berubah dengan #hash
  
  if (e.target.tagName === "A") {
    const topicKey = e.target.dataset.topic;
    const lessonId = e.target.dataset.lesson;
    renderContent(topicKey, lessonId);
  }
});

// [BARU] Fungsi untuk generate menu di pop-up header
function generateNavMenus() {
  // 1. Generate Menu Tutorials
  // 'tutorials' adalah object, kita perlu ambil keys-nya (html, css, js)
  const tutorialTopics = Object.keys(tutorials);
  
  // Buat satu 'item' (kolom) untuk setiap topik
  tutorialTopics.forEach(topicKey => {
    const topicData = tutorials[topicKey];
    const itemDiv = document.createElement('div');
    itemDiv.className = 'nested-navigation-item';
    
    let linksHTML = `<h2>${topicData.title}</h2>`;
    
    // Tombol 'Learn' utama untuk topik itu
    linksHTML += `
      <button 
        class="nav-topic-btn" 
        data-topic="${topicKey}"
      >
        Learn ${topicData.title}
      </button>`;
    
    // (Opsional) Kamu bisa tambahkan link ke 2-3 materi pertama di sini
    topicData.lessons.slice(0, 2).forEach(lesson => {
       linksHTML += `
         <a href="#" 
           class="nav-lesson-link" 
           data-topic="${topicKey}" 
           data-lesson="${lesson.id}"
         >
           ${lesson.title}
         </a>`;
    });
    
    itemDiv.innerHTML = linksHTML;
    tutorialsNavContent.appendChild(itemDiv);
  });

  // 2. Generate Menu References (Ini pakai struktur datamu yang lama, tapi di-generate)
  Object.keys(References).forEach(key => {
    if (key === 'name') return;
    const category = References[key];
    const itemDiv = document.createElement('div');
    itemDiv.className = 'nested-navigation-item';
    
    let linksHTML = `<h2>${category.name}</h2>`;
    category.menu.slice(0, 3).forEach(item => { // Ambil 3 pertama
      linksHTML += `<a href="${item.link}" target="_blank">${item.title}</a>`;
    });
    
    itemDiv.innerHTML = linksHTML;
    referencesNavContent.appendChild(itemDiv);
  });
  
  // 3. Generate Menu Excersices (Sama seperti References)
  Object.keys(Excersices).forEach(key => {
    if (key === 'name') return;
    const category = Excersices[key];
    const itemDiv = document.createElement('div');
    itemDiv.className = 'nested-navigation-item';
    
    let linksHTML = `<h2>${category.name}</h2>`;
    category.menu.slice(0, 3).forEach(item => { // Ambil 3 pertama
      linksHTML += `<a href="${item.link}" target="_blank">${item.title}</a>`;
    });
    
    itemDiv.innerHTML = linksHTML;
    excersicesNavContent.appendChild(itemDiv);
  });
}

// [BARU] Event listener untuk tombol di dalam pop-up menu tutorials
tutorialsNavContent.addEventListener('click', (e) => {
  const target = e.target.closest('.nav-topic-btn, .nav-lesson-link');
  if (!target) return;
  
  e.preventDefault();
  const topicKey = target.dataset.topic;
  
  // Jika klik 'Learn HTML', 'Learn CSS', dll.
  if (target.classList.contains('nav-topic-btn')) {
    renderSidebar(topicKey);
    // Muat materi pertama dari topik itu
    const firstLessonId = tutorials[topicKey].lessons[0].id;
    renderContent(topicKey, firstLessonId);
  }
  
  // Jika klik link materi spesifik (misal: 'HTML Elemen')
  if (target.classList.contains('nav-lesson-link')) {
    const lessonId = target.dataset.lesson;
    renderSidebar(topicKey); // Tetap render sidebar
    renderContent(topicKey, lessonId); // Muat materi yang diklik
  }
  
  closeAllPanels(); // Tutup pop-up setelah diklik
});


// [BARU] Inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  generateNavMenus(); // Generate semua menu di header
  renderSidebar("html"); // Tampilkan sidebar HTML sebagai default
  renderContent("html", "html-intro"); // Tampilkan materi pertama HTML
});