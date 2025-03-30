document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Close mobile menu when clicking a nav link
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        hamburger.classList.remove("active")
      }
    })
  })

  // Add active class to nav links on scroll
  const sections = document.querySelectorAll("section")
  const navLi = document.querySelectorAll(".nav-links li a")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id")
      }
    })

    navLi.forEach((li) => {
      li.classList.remove("active")
      if (li.getAttribute("href").substring(1) === current) {
        li.classList.add("active")
      }
    })
  })

  // Add scroll animation for elements
  const fadeInElements = document.querySelectorAll(".timeline-item, .skill-category, .education-item, .contact-item")

  const fadeInOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      } else {
        entry.target.classList.add("fade-in")
        fadeInObserver.unobserve(entry.target)
      }
    })
  }, fadeInOptions)

  fadeInElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    fadeInObserver.observe(element)
  })

  document.addEventListener("scroll", () => {
    fadeInElements.forEach((element) => {
      const position = element.getBoundingClientRect()

      // If element is in viewport
      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  })
})

