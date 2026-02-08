const desktop = document.getElementById("desktop");
const icon = document.getElementById("articles");
const dialog = document.getElementById("deleteDialog");

let selected = false;
let clickTimer = null;

/* -------------------------
   ICON BEHAVIOR
   ------------------------- */

/* Single click: select icon */
icon.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent desktop deselect
  clearTimeout(clickTimer);
  clickTimer = setTimeout(selectIcon, 200);
});

/* Double click: open articles */
icon.addEventListener("dblclick", (e) => {
  e.stopPropagation();
  clearTimeout(clickTimer);
  openArticles();
});

/* -------------------------
   DESKTOP BEHAVIOR
   ------------------------- */

/* Click empty desktop: deselect */
desktop.addEventListener("click", () => {
  deselectAll();
});

/* -------------------------
   KEYBOARD BEHAVIOR
   ------------------------- */

/* Delete key: show XP dialog */
document.addEventListener("keydown", (e) => {
  if (selected && e.key === "Delete") {
    openDialog();
  }
});

/* -------------------------
   FUNCTIONS
   ------------------------- */

function selectIcon() {
  deselectAll();
  icon.classList.add("selected");
  selected = true;
}

function deselectAll() {
  document.querySelectorAll(".icon").forEach(el => {
    el.classList.remove("selected");
  });
  selected = false;
}

function openArticles() {
  window.location.href = "articles/article.html";
}

function openDialog() {
  dialog.style.display = "block";
}

function closeDialog() {
  dialog.style.display = "none";
}
