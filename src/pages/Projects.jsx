import { Helmet } from 'react-helmet';

const PROJECTS = [
  {
    num: '01', cat: 'Robotics',
    title: 'SkySearch UAVs',
    desc: 'Open-source, multi-modal autonomous drone search — open-vocabulary target identification driven by multimodal LLMs. My MS thesis.',
    tech: 'Python · Computer Vision · MLLM · DJI Tello',
    href: 'https://github.com/ZachFara/SkySearch',
    img: 'images/skysearch.webp',
  },
  {
    num: '02', cat: 'Machine Learning',
    title: 'Denoising Diffusion Models',
    desc: 'Improving denoising-diffusion image generation through optimized noise scheduling for adversarial purification.',
    tech: 'PyTorch · Diffusion Models',
    href: 'https://github.com/ZachFara/Penn-State-REU-2021-DenoisingDiffusionForAdversarialPurification',
    img: 'images/diffusionmodel.webp',
  },
  {
    num: '03', cat: 'Machine Learning',
    title: 'Predicting COVID-19 Length of Stay',
    desc: 'Neural-network length-of-stay prediction on high-dimensional EHR data — the basis of an IEEE Big Data conference paper.',
    tech: 'ANN · SMOTE · Bayesian Optimization',
    href: 'https://github.com/ZachFara/Oversampling-Techniques-for-Predicting-COVID-19-Patient-Length-of-Stay',
    img: 'images/covid.webp',
  },
  {
    num: '04', cat: 'Distributed Systems',
    title: 'Autonomous Weather Trading',
    desc: 'A multi-server platform that simulates a trading environment and trades commodities on weather-derived signals.',
    tech: 'Distributed Systems · Signals',
    href: 'https://github.com/ZachFara/RealTime-AutonamousWeatherTrading',
    img: 'images/server.webp',
  },
  {
    num: '05', cat: 'Generative AI',
    title: 'Chartwell Insurance Assistant',
    desc: 'A production RAG-powered email-automation assistant that answers Chartwell’s most frequent support questions.',
    tech: 'GPT-4 · Pinecone · RAG',
    href: 'https://github.com/ZachFara/Chartwell-Insurance-AI/tree/revamp',
    img: 'images/genai.webp',
  },
];

const Projects = () => (
  <>
    <Helmet>
      <title>Projects — Zachariah Farahany</title>
    </Helmet>

    <section className="projects-page">
      <div className="wrap">
        <header className="page-head">
          <div className="page-head__row">
            <span className="page-head__idx">02 / Projects</span>
          </div>
          <h1>Selected Work</h1>
          <p className="page-head__desc">
            Research, production systems, and things built to answer a question. Five of them below.
          </p>
        </header>

        <ol className="index">
          {PROJECTS.map((p) => (
            <li className="index__row" key={p.num}>
              <span className="index__num">{p.num}</span>
              <div className="index__body">
                <span className="index__cat">{p.cat}</span>
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  <h2 className="index__title">{p.title}</h2>
                </a>
                <p className="index__desc">{p.desc}</p>
                <span className="index__tech">{p.tech}</span>
              </div>
              <div className="index__media"><img src={p.img} alt={p.title} /></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  </>
);

export default Projects;
