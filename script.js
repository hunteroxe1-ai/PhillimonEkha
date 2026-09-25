/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

  setTimeout(() => {

    document
      .getElementById("loader")
      .classList.add("hide");

  }, 700);

});


/* =========================
   TYPING EFFECT
   KEEPING YOUR EFFECT
========================= */

const typing = document.getElementById("typing");

const words = [
  "Phill AI Creator",
  "Software Developer",
  "Ethical Hacker",
  "Graphic Designer",
  "Photo Editor",
  "Digital Creator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

  const word = words[wordIndex];

  if (!deleting) {

    typing.textContent =
      word.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === word.length) {

      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }

  } else {

    typing.textContent =
      word.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      wordIndex =
        (wordIndex + 1) % words.length;

    }

  }

  setTimeout(
    typeEffect,
    deleting ? 55 : 90
  );

}

typeEffect();


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("open");

  const icon =
    menuBtn.querySelector("i");

  if (navLinks.classList.contains("open")) {

    icon.className =
      "fa-solid fa-xmark";

  } else {

    icon.className =
      "fa-solid fa-bars";

  }

});


document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuBtn.querySelector("i").className =
        "fa-solid fa-bars";

    });

  });


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
  document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const icon =
    themeBtn.querySelector("i");

  if (document.body.classList.contains("light")) {

    icon.className =
      "fa-solid fa-sun";

    localStorage.setItem(
      "theme",
      "light"
    );

  } else {

    icon.className =
      "fa-solid fa-moon";

    localStorage.setItem(
      "theme",
      "dark"
    );

  }

});


/* =========================
   REMEMBER THEME
========================= */

const savedTheme =
  localStorage.getItem("theme");

if (savedTheme === "light") {

  document.body.classList.add("light");

  themeBtn.querySelector("i").className =
    "fa-solid fa-sun";

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(element => {

  observer.observe(element);

});


/* =========================
   BACK TO TOP
========================= */

const topBtn =
  document.getElementById("topBtn");


window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    topBtn.classList.add("show");

  } else {

    topBtn.classList.remove("show");

  }

});


topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll("section[id]");

const links =
  document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const top =
      section.offsetTop - 180;

    if (window.scrollY >= top) {

      current =
        section.getAttribute("id");

    }

  });


  links.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {

      link.classList.add("active");

    }

  });

});
