import { Helmet } from 'react-helmet';

const REPOS = [
  {
    title: 'SkySearch UAVs',
    desc: 'An open-source Python package for simple, flexible DJI drone-swarm capabilities, using a multi-modal model to identify anything.',
    href: 'https://github.com/ZachFara/SkySearch', stars: 3,
  },
  {
    title: 'Denoising Diffusion Models',
    desc: 'Code for improving denoising-diffusion image generation with optimized noise levels.',
    href: 'https://github.com/ZachFara/Penn-State-REU-2021-DenoisingDiffusionForAdversarialPurification', stars: 1,
  },
  {
    title: 'Predicting COVID-19 Length of Stay',
    desc: 'Code for the conference paper "Oversampling Techniques for Predicting COVID-19 Patient LOS" — a neural network to enhance patient outcomes.',
    href: 'https://github.com/ZachFara/Oversampling-Techniques-for-Predicting-COVID-19-Patient-Length-of-Stay', stars: 2,
  },
  {
    title: 'Autonomous Weather Trading',
    desc: 'Two servers simulating a trading environment that acts on weather-based trading signals.',
    href: 'https://github.com/ZachFara/RealTime-AutonamousWeatherTrading', stars: 1,
  },
  {
    title: 'Chartwell Insurance Chatbot',
    desc: 'An OpenAI-based project that automates Chartwell’s most frequently asked support questions by email.',
    href: 'https://github.com/ZachFara/Chartwell-Insurance-AI/tree/revamp', stars: 1,
  },
];

const Repositories = () => (
  <>
    <Helmet>
      <title>Repositories — Zachariah Farahany</title>
    </Helmet>

    <section>
      <div className="wrap">
        <header className="page-head">
          <div className="page-head__row"><span className="page-head__idx">03 / Repositories</span></div>
          <h1>Open Source</h1>
          <p className="page-head__desc">
            Public repositories — research code, tools, and production experiments.
          </p>
        </header>

        <div className="repo-container">
          {REPOS.map((r) => (
            <div className="repo-card" key={r.title}>
              <h2 className="repo-title">{r.title}</h2>
              <p className="repo-description">{r.desc}</p>
              <div className="repo-meta">
                <span className="repo-stars">★ {r.stars}</span>
                <span className="repo-language"><i className="fab fa-python"></i> Python</span>
              </div>
              <a className="repo-link" href={r.href} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Repositories;
