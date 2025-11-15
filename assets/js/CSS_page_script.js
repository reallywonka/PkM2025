import { html as htmlTutorial } from "/Data/HTML_tutorial.js";
import { css as cssTutorial } from "/Data/CSS_tutorial.js";
import { javascript as jsTutorial } from "/Data/JS_tutorial.js";
import { design as uiuxTutorial } from "/Data/UIUX_tutorial.js";

import { References } from "/Data/References.js";
import { Excersices } from "/Data/excersices.js";

const tutorials = {
  html: htmlTutorial,
  css: cssTutorial,
  javascript: jsTutorial,
  design: uiuxTutorial,
};

const topicPageMap = {
  html: "HTML_topic.html",
  css: "CSS_topic.html",
  javascript: "JavaScript_topic.html",
  design: "UIUX_topic.html",
};

// Peta Data khusus untuk halaman CSS
const cssDataSources = {
  tutorial: cssTutorial,
  references: References.css,
  excersices: Excersices.css,
};

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const contentType = urlParams.get("type") || "tutorial";
  const currentData = cssDataSources[contentType];

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
  const sidebar = document.getElementById("sidebar");
  const sidebarTitle = document.getElementById("sidebar-title");
  const sidebarMenu = document.getElementById("sidebar-menu");
  const contentArea = document.getElementById("content-area");
  const tutorialsNavContent = document.getElementById("tutorials-nav-content");
  const referencesNavContent = document.getElementById(
    "references-nav-content"
  );
  const excersicesNavContent = document.getElementById(
    "excersices-nav-content"
  );

  // variabel untuk menyimpan instance editor
  let codeEditorInstance = null;

  // Fungsi untuk inisialisasi latihan interaktif
  function initializeInteractiveExercises() {
    const codeTextarea = contentArea.querySelector(".exc-code-input");

    if (codeTextarea) {
      codeEditorInstance = CodeMirror.fromTextArea(codeTextarea, {
        lineNumbers: true,
        mode: "xml",
        theme: "default",
      });

      codeEditorInstance.setSize("100%", "auto");
    }

    // tombol "Run"
    const runButton = contentArea.querySelector(".exc-run-btn");
    if (runButton) {
      runButton.addEventListener("click", () => {
        if (codeEditorInstance) {
          const editorId = runButton.dataset.editorId;
          const frameId = runButton.dataset.frameId;

          const code = codeEditorInstance.getValue();

          const outputFrame = document.getElementById(frameId);

          if (outputFrame) {
            outputFrame.srcdoc = code;
          }
        }
      });
    }

    const runJsButton = contentArea.querySelector(".exc-run-js-btn");
    if (runJsButton) {
    }
  }

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
      let lesson;
      if (currentData && currentData.lessons) {
        if (lessonId) {
          lesson = currentData.lessons.find((l) => l.id === lessonId);
        }
        if (!lesson) {
          lesson = currentData.lessons[0];
        }
      }

      if (lesson) {
        contentArea.innerHTML = lesson.content;
        addCopyButtonsToCodeBlocks();
        updateActiveSidebarLink(lesson.id);
        initializeInteractiveExercises();
      } else {
        contentArea.innerHTML =
          "<h1>Materi tidak ditemukan</h1><p>Data untuk topik ini sepertinya kosong.</p>";
      }
    } catch (e) {
      console.error("Error rendering content:", e, currentData);
      contentArea.innerHTML =
        "<h1>Terjadi kesalahan</h1><p>Gagal memuat materi.</p>";
    }
  }

  function renderSidebar() {
    const topic = currentData;
    if (!topic || !topic.lessons) {
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
      a.dataset.topic = contentType;
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

    // Menu Tutorials
    tutorialTopics.forEach((topicKey) => {
      const topicData = tutorials[topicKey];
      const pageUrl = topicPageMap[topicKey] || "#";
      const itemDiv = document.createElement("div");
      itemDiv.className = "nested-navigation-item";
      let linksHTML = `<h2>${topicData.title}</h2>`;
      linksHTML += `
        <a 
          href="${pageUrl}?type=tutorial" 
          class="nav-topic-link" 
          data-topic="${topicKey}"
        >
          Learn ${topicData.title}
        </a>`;
      itemDiv.innerHTML = linksHTML;
      tutorialsNavContent.appendChild(itemDiv);
    });

    // Menu References
    Object.keys(References).forEach((topicKey) => {
      const topicData = References[topicKey];
      const pageUrl = topicPageMap[topicKey] || "#";
      const itemDiv = document.createElement("div");
      itemDiv.className = "nested-navigation-item";
      itemDiv.innerHTML = `
        <h2>${topicData.title} References</h2>
        <a 
          href="${pageUrl}?type=references"
          class="nav-topic-link" 
          data-topic="${topicKey}"
        >
          ${topicData.title} References
        </a>`;
      referencesNavContent.appendChild(itemDiv);
    });

    // Menu Excercises
    Object.keys(Excersices).forEach((topicKey) => {
      const topicData = Excersices[topicKey];
      const pageUrl = topicPageMap[topicKey] || "#";
      const itemDiv = document.createElement("div");
      itemDiv.className = "nested-navigation-item";
      itemDiv.innerHTML = `
        <h2>${topicData.title} Excercise</h2>
        <a 
          href="${pageUrl}?type=excersices"
          class="nav-topic-link" 
          data-topic="${topicKey}"
        >
          ${topicData.title} Excercise
        </a>`;
      excersicesNavContent.appendChild(itemDiv);
    });
  }

  // --- Event Listeners ---
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
    closeAllSPanels();
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
      const lessonId = e.target.dataset.lesson;
      renderContent(lessonId);
      contentArea.scrollTo(0, 0);
      sidebar.style.scrollBehavior = "auto";
      sidebar.scrollTop = 0;
      sidebar.style.scrollBehavior = "smooth";
    }
  });

  // --- Kode Inisialisasi ---
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

  const logoBtn = document.getElementById("logo-btn");
  logoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "Index.html";
  });

  generateNavMenus();

  renderSidebar();
  renderContent();
});
