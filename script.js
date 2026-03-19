const projects = [
  {
    title: "Personal Finance Tracker",
    description: "Track income, expenses, and monthly savings with visual charts.",
    demo: "#",
    repo: "#",
  },
  {
    title: "Task Management App",
    description: "Kanban-style board for organizing tasks by priority and status.",
    demo: "#",
    repo: "#",
  },
  {
    title: "Weather Dashboard",
    description: "City-based weather app with forecast cards and recent-search history.",
    demo: "#",
    repo: "#",
  },
];

const projectGrid = document.getElementById("project-grid");

projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-links">
      <a href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>
      <a href="${project.repo}" target="_blank" rel="noreferrer">Repository</a>
    </div>
  `;
  projectGrid.appendChild(card);
});

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
