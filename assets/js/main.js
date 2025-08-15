// This file contains JavaScript code for the main functionality of the portfolio website.

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Toggle mobile navigation
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Project filtering
    const filterButtons = document.querySelectorAll(".filter-button");
    const projects = document.querySelectorAll(".project-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filterValue = this.getAttribute("data-filter");
            projects.forEach(project => {
                if (filterValue === "all" || project.classList.contains(filterValue)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});