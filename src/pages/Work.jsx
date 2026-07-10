import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';

// Merged projects + repositories. Each entry is a piece of work with its
// public repo (link, stars, language) attached.
const WORK = [
  {
    num: '01', cat: 'Robotics',
    title: 'SkySearch UAVs',
    desc: 'Open-source, multi-modal autonomous drone search with open-vocabulary target identification driven by multimodal LLMs. My MS thesis; 95% live-flight success.',
    tech: 'Python · Computer Vision · MLLM · DJI Tello',
    href: 'https://github.com/ZachFara/SkySearch',
    stars: 3, lang: 'Python',
  },
  {
    num: '02', cat: 'Machine Learning',
    title: 'Denoising Diffusion Models',
    desc: 'Improving denoising-diffusion image generation through optimized noise scheduling for adversarial purification.',
    tech: 'PyTorch · Diffusion Models',
    href: 'https://github.com/ZachFara/Penn-State-REU-2021-DenoisingDiffusionForAdversarialPurification',
    stars: 1, lang: 'Python',
  },
  {
    num: '03', cat: 'Machine Learning',
    title: 'Predicting COVID-19 Length of Stay',
    desc: 'Neural-network length-of-stay prediction on high-dimensional EHR data, and the basis of an IEEE Big Data conference paper.',
    tech: 'ANN · SMOTE · Bayesian Optimization',
    href: 'https://github.com/ZachFara/Oversampling-Techniques-for-Predicting-COVID-19-Patient-Length-of-Stay',
    stars: 2, lang: 'Python',
  },
  {
    num: '04', cat: 'Distributed Systems',
    title: 'Autonomous Weather Trading',
    desc: 'A multi-server platform that simulates a trading environment and trades commodities on weather-derived signals.',
    tech: 'Distributed Systems · Signals',
    href: 'https://github.com/ZachFara/RealTime-AutonamousWeatherTrading',
    stars: 1, lang: 'Python',
  },
  {
    num: '05', cat: 'Generative AI',
    title: 'Chartwell Insurance Assistant',
    desc: 'A production RAG-powered email-automation assistant that answers Chartwell’s most frequent support questions.',
    tech: 'GPT-4 · Pinecone · RAG',
    href: 'https://github.com/ZachFara/Chartwell-Insurance-AI/tree/revamp',
    stars: 1, lang: 'Python',
  },
];

const FILTERS = ['All', ...Array.from(new Set(WORK.map((w) => w.cat)))];

const Work = () => {
  const [filter, setFilter] = useState('All');
  const items = useMemo(
    () => (filter === 'All' ? WORK : WORK.filter((w) => w.cat === filter)),
    [filter],
  );

  return (
    <>
      <Helmet>
        <title>Work - Zachariah Farahany</title>
      </Helmet>

      <section className="work-page">
        <div className="wrap">
          <header className="page-head">
            <div className="page-head__row">
              <span className="page-head__idx">02 / Work</span>
            </div>
            <h1>Selected Work</h1>
            <p className="page-head__desc">
              Research, production systems, and things built to answer a question. Each one ships with its code.
            </p>
          </header>

          <div className="filters" role="tablist" aria-label="Filter work by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={`chip${filter === f ? ' chip--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
                {f !== 'All' && (
                  <span className="chip__count">{WORK.filter((w) => w.cat === f).length}</span>
                )}
              </button>
            ))}
          </div>

          <ol className="index work-index">
            {items.map((p) => (
              <li className="index__row" key={p.num}>
                <span className="index__num">{p.num}</span>
                <div className="index__body">
                  <span className="index__cat">{p.cat}</span>
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    <h2 className="index__title">{p.title}</h2>
                  </a>
                  <p className="index__desc">{p.desc}</p>
                  <span className="index__tech">{p.tech}</span>
                  <div className="work-repo">
                    <span className="work-repo__stat">★ {p.stars}</span>
                    <span className="work-repo__stat"><i className="fab fa-python" /> {p.lang}</span>
                    <a className="work-repo__link" href={p.href} target="_blank" rel="noopener noreferrer">
                      View on GitHub ↗
                    </a>
                  </div>
                </div>
                <div className="index__media index__media--ph" aria-hidden="true">
                  <span className="index__media-num">{p.num}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default Work;
