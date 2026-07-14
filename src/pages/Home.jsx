import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import WORK from '../data/workItems';

const CAPS = [
  { n: '01', t: 'Machine Learning', d: 'Credit-risk models shipped to production, with Bayesian tuning, validation, and segment-level error analysis.' },
  { n: '02', t: 'Generative & Agentic AI', d: 'RAG systems, multi-tool agents, and MLLM evaluation, plus LLM interpretability research.' },
  { n: '03', t: 'ML Operations', d: 'Automated deployment, testing, and monitoring of models on cloud infrastructure, with resource optimization and MLFlow-based management.' },
  { n: '04', t: 'Big Data', d: 'Terabyte-scale ETL on Spark and medallion pipelines on AWS, taking raw telemetry through to production feature stores and warehouses.' },
];

const SELECTED = ['03', '01', '05']
  .map((num) => WORK.find((p) => p.num === num))
  .map((p, i) => ({ ...p, num: String(i + 1).padStart(2, '0') }));

const Home = () => (
  <>
    <Helmet>
      <title>Zachariah Farahany - Quantitative ML Engineer</title>
    </Helmet>

    {/* Hero */}
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__lead">
          <p className="eyebrow hero__eyebrow"><span className="tick">/</span> Quantitative ML · Interpretability · Agents</p>
          <h1 className="hero__title">
            <span className="l1">Zachariah</span>
            <span className="l2">Farahany</span>
          </h1>
          <p className="hero__intro">
            I build, deploy, and research production ML and agentic systems.
          </p>
          <dl className="hero__meta">
            <div><dt>Now</dt><dd>Quantitative Analytics @ Wells Fargo</dd></div>
            <div><dt>Focus</dt><dd>LLM interpretability · Credit-risk ML · Factor models</dd></div>
            <div><dt>Studied</dt><dd>M.S. Applied Data Science, UChicago</dd></div>
          </dl>
          <div className="hero__actions">
            <Link to="/work" className="btn btn--solid">Selected work</Link>
            <Link to="/cv" className="btn">Curriculum vitae</Link>
          </div>
        </div>

        <div className="hero__portrait">
          <figure>
            <img src="images/LinkedInImages.jpg" alt="Zachariah Farahany" />
          </figure>
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section>
      <div className="wrap">
        <div className="cap__head">
          <p className="eyebrow"><span className="tick">◇</span> Capabilities</p>
        </div>
        <div className="caps">
          {CAPS.map((c) => (
            <article className="cap" key={c.n}>
              <span className="cap__num">{c.n}</span>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Selected work */}
    <section>
      <div className="wrap">
        <div className="cap__head">
          <p className="eyebrow"><span className="tick">→</span> Selected work</p>
        </div>
        <ol className="index">
          {SELECTED.map((p) => (
            <li className="index__row" key={p.num}>
              <span className="index__num">{p.num}</span>
              <div className="index__body">
                <span className="index__cat">{p.cat}</span>
                <a href={p.links.github} target="_blank" rel="noopener noreferrer">
                  <h3 className="index__title">{p.title}</h3>
                </a>
                <p className="index__desc">{p.desc}</p>
                <span className="index__tech">{p.tech}</span>
              </div>
              <div className={`index__media${p.imageFit === 'contain' ? ' index__media--contain' : ''}`} aria-hidden="true">
                <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
              </div>
            </li>
          ))}
        </ol>
        <div style={{ marginTop: '2.5rem' }}>
          <Link to="/work" className="arrow-link">All work <span className="arw">↗</span></Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
