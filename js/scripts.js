const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000); // change every 5 seconds

// hamburger menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-bar ul');
const menuIcon = menuToggle.querySelector('.bx-menu');
const closeIcon = menuToggle.querySelector('.bx-x');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    navLinks.style.display = 'flex';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'inline';
  } else {
    navLinks.style.display = 'none';
    menuIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
  }
});

    // Hide navLinks when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navLinks.style.display = 'none';
    menuIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
  });
});

// Hide navLinks when clicking outside
document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('active') &&
    !navLinks.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navLinks.classList.remove('active');
    navLinks.style.display = 'none';
    menuIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
  }
});

// Smooth Scrolling
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });

    document.getElementById("readMoreBtn").addEventListener("click", function() {
      const moreText = document.getElementById("moreText");
      const btn = document.getElementById("readMoreBtn");

      if (moreText.style.display === "none") {
          moreText.style.display = "inline";
          btn.textContent = "Read Less";

      } else{
          moreText.style.display = "none";
          btn.textContent = "Read More";
      }
  });

    // Form Validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
event.preventDefault();

// Collect form data
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

// Basic validation
if (!name || !email || !message) {
    alert("Please fill out all the fields.");
    return;
}

alert(`Thank you! ${name} Your message has been sent.`);

event.target.reset();
});



  

  




        

        