import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const CAPS = [
  { n: '01', t: 'Machine Learning', d: 'Credit-risk models, factor models, and time-series forecasting shipped to production, with Bayesian tuning, validation, and backtesting.' },
  { n: '02', t: 'ML Operations', d: 'Automated deployment, testing, and monitoring of models on cloud infrastructure, with resource optimization and MLFlow-based management.' },
  { n: '03', t: 'Data & Big Data', d: 'Terabyte-scale ETL on Spark and medallion pipelines on AWS, taking raw telemetry through to production feature stores and warehouses.' },
  { n: '04', t: 'Generative & Agentic AI', d: 'RAG systems, multi-tool agents, and MLLM evaluation, plus interpretability research into how these models actually work.' },
];

const SELECTED = [
  { num: '01', cat: 'Robotics', title: 'SkySearch UAVs', desc: 'Open-vocabulary autonomous drone search driven by multimodal LLMs. MS thesis; 95% live-flight success.', tech: 'Python · CV · MLLM', href: 'https://github.com/ZachFara/SkySearch' },
  { num: '02', cat: 'Machine Learning', title: 'Denoising Diffusion Models', desc: 'Improving diffusion image generation through optimized noise scheduling.', tech: 'PyTorch · Diffusion', href: 'https://github.com/ZachFara/Penn-State-REU-2021-DenoisingDiffusionForAdversarialPurification' },
  { num: '03', cat: 'Distributed Systems', title: 'Autonomous Weather Trading', desc: 'A multi-server platform trading commodities on weather-derived signals.', tech: 'Distributed · Signals', href: 'https://github.com/ZachFara/RealTime-AutonamousWeatherTrading' },
];

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
            I build, deploy, then research production ML and agentic systems to understand how they actually work.
          </p>
          <dl className="hero__meta">
            <div><dt>Now</dt><dd>Quantitative Analytics @ Wells Fargo</dd></div>
            <div><dt>Focus</dt><dd>Credit-risk ML · Factor models · Interpretability</dd></div>
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
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  <h3 className="index__title">{p.title}</h3>
                </a>
                <p className="index__desc">{p.desc}</p>
                <span className="index__tech">{p.tech}</span>
              </div>
              <div className="index__media index__media--ph" aria-hidden="true">
                <span className="index__media-num">{p.num}</span>
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
