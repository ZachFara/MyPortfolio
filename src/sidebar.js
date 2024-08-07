const sidebar = `
<div id="sidebar">
    <div class="inner">

        <!-- Search -->
            <section id="search" class="alt">
                <form method="post" action="#">
                    <input type="text" name="query" id="query" placeholder="Search" />
                </form>
            </section>

        <!-- Menu -->
            <nav id="menu">
                <header class="major">
                    <h2>Menu</h2>
                </header>
                <ul class="menu"></ul>
                <script src="src/menu.js"></script>
            </nav>

        <!-- Section -->
            <section>
                <header class="major">
                    <h2>Recent Projects</h2>
                </header>
                <div class="mini-posts">
                    <article>
                        <a href="projects.html#skysearch" class="image sidebar"><img src="images/skysearch.webp" alt="" /></a>
                        <p>Check out SkySearch UAVs</p>
                    </article>
                    <article>
                        <a href="projects.html#diffusionmodels" class="image sidebar"><img src="images/diffusionmodel.webp" alt="" /></a>
                        <p>Image GenAI with Stable Denoising Diffusion models</p>
                    </article>
                </div>
                <ul class="actions">
                    <li><a href="#" class="button">More</a></li>
                </ul>
            </section>

        <!-- Section -->
            <section>
                <header class="major">
                    <h2>Get in touch</h2>
                </header>
                <p></p>
                <ul class="contact">
                    <li class="icon solid fa-envelope"><a href="mailto:zachariah.farahany@gmail.com">zachariah.farahany@gmail.com</a></li>
                    <li class="icon solid fa-phone">(847) 502-5010</li>
                    <li class="icon solid fa-home">711 N. Broadway Ave.<br />
                    Park Ridge, IL 60068</li>
                </ul>
            </section>

        <!-- Footer -->
    </div>
</div>
`
document.write(sidebar)