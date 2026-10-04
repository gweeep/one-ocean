/* =========================================
   ONE OCEAN
   INTERACTIONS
========================================= */


/* -----------------------------------------
   NAVBAR
----------------------------------------- */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


/* -----------------------------------------
   SCROLL REVEAL
----------------------------------------- */

const animatedElements = document.querySelectorAll(
  ".about-copy, .about-collage, .sail-card, .process-step, .testimonial, .gallery-item, .gallery-note"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.15
  }
);


animatedElements.forEach((element, index) => {

  /*
    Small stagger between elements.
  */

  element.style.transitionDelay =
    `${(index % 5) * 0.08}s`;

  observer.observe(element);

});


/* -----------------------------------------
   SAIL CARD MOUSE EFFECT
----------------------------------------- */

const cards = document.querySelectorAll(".sail-card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (event) => {

    const rect = card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const rotateX =
      ((y / rect.height) - 0.5) * -3;

    const rotateY =
      ((x / rect.width) - 0.5) * 3;

    card.style.transform =
      `perspective(800px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(800px) rotateX(0) rotateY(0)";

  });

});


/* -----------------------------------------
   PARALLAX HERO
----------------------------------------- */

const heroImage =
  document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

  const scroll =
    window.scrollY;

  if (scroll < window.innerHeight) {

    heroImage.style.transform =
      `scale(1.04) translateY(${scroll * 0.15}px)`;

  }

});


/* -----------------------------------------
   NEWSLETTER
----------------------------------------- */

const newsletterForm =
  document.querySelector(".newsletter form");

newsletterForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const input =
    newsletterForm.querySelector("input");

  if (!input.value) {
    input.focus();
    return;
  }

  input.value = "";

  alert(
    "Thanks for joining the One Ocean journal."
  );

});