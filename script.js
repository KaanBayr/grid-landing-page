// Die Elemente, mit denen wir arbeiten, einmal aus dem HTML holen
const menuButton = document.querySelector(".top-nav button");
const menuIcon = menuButton.querySelector("img");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

// Öffnet (open = true) oder schließt (open = false) das Menü
function setMenu(open) {
  // Klasse "is-open" an- oder ausschalten, das CSS zeigt dann Menü und Overlay
  menu.classList.toggle("is-open", open);
  overlay.classList.toggle("is-open", open);

  // Screenreader erfahren, ob das Menü gerade offen ist
  menuButton.setAttribute("aria-expanded", open);

  // Hamburger-Icon gegen Schließen-Icon tauschen
  menuIcon.src = open
    ? "assets/images/icon-close.svg"
    : "assets/images/icon-menu.svg";
  menuIcon.alt = open ? "Close menu" : "Open menu";
}

// Klick auf den Button: Zustand umschalten
menuButton.addEventListener("click", function () {
  setMenu(!menu.classList.contains("is-open"));
});

// Klick auf den abgedunkelten Bereich schließt das Menü
overlay.addEventListener("click", function () {
  setMenu(false);
});

// Klick auf einen Menüpunkt schließt das Menü ebenfalls
menu.addEventListener("click", function (event) {
  if (event.target.closest("a")) {
    setMenu(false);
  }
});

// Escape schließt das Menü und setzt den Fokus zurück auf den Button
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && menu.classList.contains("is-open")) {
    setMenu(false);
    menuButton.focus();
  }
});
