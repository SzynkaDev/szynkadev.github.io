// JavaScript code for handling the projects section of the portfolio website

document.addEventListener("DOMContentLoaded", function() {
    const projectsContainer = document.getElementById("projects-container");

    const projects = [
        {
            title: "Minecraft Server Plugin Example",
            description: "A simple plugin for Minecraft servers that enhances gameplay.",
            link: "projects/minecraft-server/plugin-example/README.md"
        },
        {
            title: "Minecraft Server Configuration",
            description: "Configuration files and setup for running a Minecraft server.",
            link: "projects/minecraft-server/server-config/README.md"
        },
        {
            title: "Discord Bot",
            description: "A bot for Discord that responds to commands and interacts with users.",
            link: "projects/discord-bot/README.md"
        },
        {
            title: "Web Tool Utility",
            description: "A web tool for various utilities, built with HTML and JavaScript.",
            link: "projects/utilities/web-tool/index.html"
        },
        {
            title: "Automation Script",
            description: "A Python script for automating tasks.",
            link: "projects/utilities/automation/example.py"
        }
    ];

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        const titleElement = document.createElement("h3");
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = project.description;

        const linkElement = document.createElement("a");
        linkElement.href = project.link;
        linkElement.textContent = "View Project";
        linkElement.target = "_blank";

        projectElement.appendChild(titleElement);
        projectElement.appendChild(descriptionElement);
        projectElement.appendChild(linkElement);
        projectsContainer.appendChild(projectElement);
    });
});