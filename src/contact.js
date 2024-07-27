document.addEventListener("DOMContentLoaded", function() {
    const menuHTML = `
        <li class="icon solid fa-envelope"><a href="#">zachariah.farahany@gmail.com</a></li>
										<li class="icon solid fa-phone">(847) 502-5010</li>
										<li class="icon solid fa-home">711 N. Broadway Ave.<br />
										Park Ridge, IL 60068</li>
    `;
    document.querySelectorAll('.contact').forEach(menu => {
        menu.innerHTML = menuHTML;
    });
});