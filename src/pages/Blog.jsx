import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const POSTS = [
  {
    to: '/blog/why-do-we-need-agents',
    title: 'Why Do We Need Agents?',
    desc: 'Understanding the role and importance of AI agents in modern applications.',
    date: 'Jul 24, 2025', read: '7 min',
    tags: ['#AI', '#Agents', '#LlamaIndex', '#data-science'],
  },
  {
    to: '/blog/ai-agent-memory',
    title: 'Agentic Memory from Llama Index',
    desc: 'Demystifying the different types of AI agent memory.',
    date: 'May 30, 2025', read: '4 min',
    tags: ['#AI', '#Research', '#Agents', '#data-science'],
  },
];

const Blog = () => (
  <>
    <Helmet>
      <title>Blog - Zachariah Farahany</title>
    </Helmet>

    <section>
      <div className="wrap">
        <header className="page-head">
          <div className="page-head__row"><span className="page-head__idx">03 / Blog</span></div>
          <h1>Beyond the Mean</h1>
          <p className="page-head__desc">Notes on data science, machine learning, and the systems in between.</p>
        </header>

        <div className="blog-container">
          {POSTS.map((p) => (
            <article className="blog-card" key={p.to}>
              <div className="blog-meta">
                <span className="blog-date">{p.date}</span>
                <span className="blog-read-time">{p.read}</span>
              </div>
              <div className="blog-card__body">
                <Link to={p.to} className="blog-link"><h2 className="blog-title">{p.title}</h2></Link>
                <p className="blog-description">{p.desc}</p>
                <div className="blog-tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <Link to={p.to} className="arrow-link blog-card__go">Read <span className="arw">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
