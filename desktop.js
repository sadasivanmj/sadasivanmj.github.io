const articlesIcon = document.getElementById("articles");

// Utility: detect touch-first devices
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

// --- OPEN ACTION ---
function openArticles() {
  window.location.href = "./article/article.html";
}

// --- DESKTOP BEHAVIOR (double-click) ---
if (!isTouchDevice) {
  articlesIcon.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    openArticles();
  });

  // Optional: single-click just selects
  articlesIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    articlesIcon.classList.add("selected");
  });
}

// --- MOBILE BEHAVIOR (single tap) ---
if (isTouchDevice) {
  articlesIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    openArticles();
  });
}

const ARTICLES_URL = new URL(
  "articles/article.html",
  window.location.href
).href;

function openArticles() {
  window.location.href = ARTICLES_URL;
}
