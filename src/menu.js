document.addEventListener("DOMContentLoaded", function() {
    const menuHTML = `
        <li><a href="index.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="repositories.html">Repositories</a></li>
        <li><a href="CV.html">Curriculum Vitae</a></li>
    `;
    document.querySelectorAll('.menu').forEach(menu => {
        menu.innerHTML = menuHTML;
    });
});