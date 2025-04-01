document.addEventListener("DOMContentLoaded", () => {
  // Calculate experience duration
  const calculateExperience = () => {
    const startDate = new Date(2018, 4, 1)
    const currentDate = new Date()

    let years = currentDate.getFullYear() - startDate.getFullYear()
    let months = currentDate.getMonth() - startDate.getMonth()

    if (months < 0) {
      years--
      months += 12
    }

    const experienceText = `${years} years, ${months} months`
    document.getElementById("experience-duration").textContent = experienceText
  }

  calculateExperience()

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Navigation and Section Handling
  const sections = document.querySelectorAll(".section")
  const navItems = document.querySelectorAll(".nav-links a")

  // Function to show a specific section
  const showSection = (sectionId) => {
    sections.forEach((section) => {
      section.classList.remove("active")
    })

    navItems.forEach((item) => {
      item.classList.remove("active")
    })

    document.getElementById(sectionId).classList.add("active")
    document.querySelector(`a[href="#${sectionId}"]`).classList.add("active")
  }

  // Handle navigation clicks
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      const sectionId = item.getAttribute("href").substring(1)
      showSection(sectionId)

      // Close mobile menu if open
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        hamburger.classList.remove("active")
      }

      // Update URL without page reload
      history.pushState(null, null, `#${sectionId}`)
    })
  })

  // Handle initial load and browser back/forward
  const handleHashChange = () => {
    const hash = window.location.hash.substring(1) || "about"
    showSection(hash)
  }

  window.addEventListener("hashchange", handleHashChange)
  handleHashChange()

  // Skills Tab Functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab")

      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      button.classList.add("active")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Timeline item expansion
  const timelineItems = document.querySelectorAll(".timeline-item")

  timelineItems.forEach((item) => {
    const achievementsContainer = item.querySelector(".achievements-container")

    item.addEventListener("click", () => {
      achievementsContainer.classList.toggle("expanded")
    })
  })

  // Add animation for elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".timeline-item, .education-card, .contact-card")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    elements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      observer.observe(element)
    })
  }

  animateOnScroll()
})

