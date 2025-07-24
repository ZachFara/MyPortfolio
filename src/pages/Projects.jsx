import { Helmet } from 'react-helmet';
import { useEffect, useRef } from 'react';
import CardTransitionStyles from '../components/CardTransitionStyles';

const Projects = () => {
  const skysearchRef = useRef(null);
  const diffusionmodelsRef = useRef(null);

  useEffect(() => {
    // Check for hash in URL and scroll to the corresponding section
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      
      setTimeout(() => {
        let element;
        if (hash === 'skysearch' && skysearchRef.current) {
          element = skysearchRef.current;
        } else if (hash === 'diffusionmodels' && diffusionmodelsRef.current) {
          element = diffusionmodelsRef.current;
        }
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects - Zachariah Farahany</title>
      </Helmet>
      <CardTransitionStyles />
      
      <section>
        <header className="main">
          <h1>Projects</h1>
        </header>
      
        {/* Robotics Subsection */}
        <div className="subsection" style={{ marginBottom: '50px' }}>
          <hr />
          <h2 style={{ marginBottom: '0' }}>Robotics</h2>
          <div className="projects-container" id="skysearch" ref={skysearchRef}>
            <a href="https://github.com/duncancalvert/SkySearch" className="project-link" target="_blank" rel="noopener noreferrer">
              <div className="project-card">
                <div className="project-image" style={{ overflow: "hidden" }}>
                  <img src="images/skysearch.webp" alt="Project Image" />
                </div>
                <div className="project-info">
                  <h2>SkySearch UAVs</h2>
                  <p>Multi-modal model powered UAVs</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      
        {/* Machine Learning Subsection */}
        <div className="subsection" style={{ marginBottom: '50px' }}>
          <hr />
          <h2 style={{ marginBottom: '0' }}>Machine Learning</h2>
          <div className="projects-container" id="diffusionmodels" ref={diffusionmodelsRef}>
            <a href="https://github.com/ZachFara/Penn-State-REU-2021-DenoisingDiffusionForAdversarialPurification" className="project-link" target="_blank" rel="noopener noreferrer">
              <div className="project-card">
                <img src="images/diffusionmodel.webp" alt="Project Image" className="project-image" />
                <div className="project-info">
                  <h2>Denoising Diffusion Models</h2>
                  <p>Optimizing denoising diffusion models</p>
                </div>
              </div>
            </a>

            <a href="https://github.com/ZachFara/Oversampling-Techniques-for-Predicting-COVID-19-Patient-Length-of-Stay" className="project-link" target="_blank" rel="noopener noreferrer">
              <div className="project-card">
                <img src="images/covid.webp" alt="Project Image" className="project-image" />
                <div className="project-info">
                  <h2>Predicting COVID-19 Length of Stay</h2>
                  <p>Enhancing patient outcomes with ML</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      
        {/* Distributed Systems */}
        <div className="subsection" style={{ marginBottom: '50px' }}>
          <hr />
          <h2 style={{ marginBottom: '0' }}>Distributed Systems</h2>
          <div className="projects-container">
            <a href="https://github.com/ZachFara/RealTime-AutonamousWeatherTrading" className="project-link" target="_blank" rel="noopener noreferrer">
              <div className="project-card" id="trading">
                <img src="images/server.webp" alt="Project Image" className="project-image" />
                <div className="project-info">
                  <h2>Autonamous Weather based commodity trading</h2>
                  <p>Deploying a multi-server trading platform</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      
        {/* Generative AI */}
        <div className="subsection" style={{ marginBottom: '50px' }}>
          <hr />
          <h2 style={{ marginBottom: '0' }}>Generative AI</h2>
          <div className="projects-container">
            <a href="https://github.com/ZachFara/Chartwell-Insurance-AI" className="project-link" target="_blank" rel="noopener noreferrer">
              <div className="project-card">
                <img src="images/genai.webp" alt="Project Image" className="project-image" />
                <div className="project-info">
                  <h2>Chartwell Insurance E-Mail chatbot</h2>
                  <p>OpenAI based email automation solution</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
