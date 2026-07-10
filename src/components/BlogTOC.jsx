import { useState, useEffect } from 'react';

// Sticky "On this page" table of contents for long-form posts.
// `sections` is an array of { id, label } matching heading ids in the post.
const BlogTOC = ({ sections }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const OFFSET = 140; // topbar height + a little breathing room
    let raf = 0;

    const update = () => {
      raf = 0;
      const headings = sections
        .map((s) => document.getElementById(s.id))
        .filter(Boolean);
      if (!headings.length) return;

      // Near the page bottom the last section can't reach the offset line,
      // so force it active once we've scrolled to the end.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveId(headings[headings.length - 1].id);
        return;
      }

      // Otherwise: the last heading whose top has crossed the offset line.
      let current = headings[0].id;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= OFFSET) current = h.id;
        else break;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sections]);

  // A <base> tag makes bare "#id" links resolve against the base URL (the
  // homepage), so scroll manually and set the hash with an explicit path.
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `${window.location.pathname}#${id}`);
    setActiveId(id);
  };

  return (
    <aside className="blog-toc" aria-label="Table of contents">
      <p className="blog-toc__label">On this page</p>
      <nav>
        <ol>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => handleClick(e, s.id)}
                className={activeId === s.id ? 'is-active' : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
};

export default BlogTOC;
