// FAQ Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active");
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Mobile menu toggle (basic implementation)
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");

  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", () => {
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
  }

  // Add scroll effect to header
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)";
    }
  });
});

// Form submission handling (basic)
function handleEnrollment() {
  alert(
    "Thank you for your interest! You will be redirected to the enrollment page."
  );
  // In a real implementation, this would redirect to a payment/enrollment form
}

// Add click handlers to enrollment buttons
document.addEventListener("DOMContentLoaded", () => {
  const enrollButtons = document.querySelectorAll(".btn-primary, .btn-cta");

  enrollButtons.forEach((button) => {
    if (button.textContent.includes("Enroll")) {
      button.addEventListener("click", handleEnrollment);
    }
  });
});
