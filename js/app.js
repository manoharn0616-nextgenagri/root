// Mobile navigation toggle (present on every page)
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Highlight the current page in the nav
const currentPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();
document.querySelectorAll(".nav-links a[data-page]").forEach((link) => {
  if (link.getAttribute("data-page") === currentPage) {
    link.classList.add("active");
  }
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// "Notify Me" form (products page)
const notifyForm = document.getElementById("notifyForm");
if (notifyForm) {
  const notifyEmail = document.getElementById("notifyEmail");
  const formMsg = document.getElementById("formMsg");

  notifyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = notifyEmail.value.trim();

    if (!emailPattern.test(value)) {
      formMsg.textContent = "Please enter a valid email address.";
      formMsg.style.color = "#fecaca";
      return;
    }

    formMsg.textContent = "Thank you! We'll let you know as soon as we launch.";
    formMsg.style.color = "";
    notifyForm.reset();
  });
}

// Contact form (contact page)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const contactMsg = document.getElementById("contactMsg");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = contactForm.email.value.trim();
    const name = contactForm.name.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !emailPattern.test(email) || !message) {
      contactMsg.textContent = "Please fill in your name, a valid email, and a message.";
      contactMsg.style.color = "#dc2626";
      return;
    }

    contactMsg.textContent = "Thank you, " + name + "! Your message has been received.";
    contactMsg.style.color = "var(--green-700)";
    contactForm.reset();
  });
}

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
