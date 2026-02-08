const articlesIcon = document.getElementById("articles");

const ARTICLES_URL = new URL(
  "articles/article.html",
  window.location.href
).href;

function openArticles() {
  window.location.href = ARTICLES_URL;
}

// Touch-first devices
articlesIcon.addEventListener("pointerup", (e) => {
  if (e.pointerType === "touch") {
    openArticles();
  }
});

// Mouse devices
articlesIcon.addEventListener("dblclick", (e) => {
  openArticles();
});
