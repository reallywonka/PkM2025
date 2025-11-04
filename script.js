import { tutorial } from "./Data/tutorial.js";
import { References } from "./Data/References.js";

const NestedNavigation = document.getElementById("nested-navigation_id");
let tutorialEL = document.getElementById("tutorial-btn");
const nestedNavigationCloseBtn = document.getElementById(
  "nested-navigation-close-Btn"
);

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
  NestedNavigation.classList.add("nested_navigation_hidden");
  tutorialEL.classList.remove("bg-black", "text-white");
});

/**** tutorial data ****/
console.log(tutorial);

/**** references-btn ****/
const NestedNavigationRefs = document.getElementById(
  "nested-navigation_references"
);
let referencesEL = document.getElementById("references-btn");
const nestedNavigationCloseBtnRefs = document.getElementById(
  "nested-navigation-close-Btn-refs"
);

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
  NestedNavigationRefs.classList.add("nested_navigation_hidden");
  referencesEL.classList.remove("bg-black", "text-white");
});
/**** references data ****/
console.log("Data References:", References);

/**** excersices-btn ****/
const NestedNavigationExcs = document.getElementById(
  "nested-navigation_excersices"
);
let excersicesEL = document.getElementById("excersices-btn");
const nestedNavigationCloseBtnExcs = document.getElementById(
  "nested-navigation-close-Btn-excs"
);

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
/** excersices data ****/
console.log("Data Excersices:", Excersices);

nestedNavigationCloseBtnExcs.addEventListener("click", () => {
  NestedNavigationExcs.classList.add("nested_navigation_hidden");
  excersicesEL.classList.remove("bg-black", "text-white");
});

function closeAllPanels() {
  // Sembunyikan semua panel
  NestedNavigation.classList.add("nested_navigation_hidden");
  NestedNavigationRefs.classList.add("nested_navigation_hidden");
  NestedNavigationExcs.classList.add("nested_navigation_hidden");

  // Nonaktifkan semua tombol
  tutorialEL.classList.remove("bg-black", "text-white");
  referencesEL.classList.remove("bg-black", "text-white");
  excersicesEL.classList.remove("bg-black", "text-white");
}
