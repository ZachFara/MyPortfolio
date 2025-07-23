import { Helmet } from 'react-helmet';
import CardTransitionStyles from '../components/CardTransitionStyles';

const Repositories = () => {
  return (
    <>
      <Helmet>
        <title>Repositories - Zachariah Farahany</title>
      </Helmet>
      <CardTransitionStyles />
      
      <section>
        <header className="main">
          <h1>Repositories</h1>
        </header>
        <hr />
        <div className="repo-container">
          <div className="repo-card" style={{
            transition: "transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
            cursor: "pointer"
          }}>
            <h2 className="repo-title">Skysearch UAVs</h2>
            <p className="repo-description">Skysearch is an open source Python package that allows for simple and flexible DJI drone swarm capabilities utilizing a multi-modal model to identify anything</p>
            <a className="repo-link" href="https://github.com/duncancalvert/SkySearch" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <div className="repo-meta">
              <span className="repo-stars">★ 3</span>
              <span className="repo-language"><i className="fab fa-python"></i> Python</span>
            </div>
          </div>
          
          <div className="repo-card">
            <h2 className="repo-title">Denoising Diffusion Models</h2>
            <p className="repo-description">This repository contains code for improving denoising diffusion image generation with optimized noise levels.</p>
            <a className="repo-link" href="https://github.com/ZachFara/Penn-State-REU-2021-DenoisingDiffusionForAdversarialPurification" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <div className="repo-meta">
              <span className="repo-stars">★ 1</span>
              <span className="repo-language"><i className="fab fa-python"></i> Python</span>
            </div>
          </div>
          
          <div className="repo-card">
            <h2 className="repo-title">Predicting COVID-19 Length of Stay</h2>
            <p className="repo-description">This is the code for a conference paper "Oversampling Techniques for Predicting COVID-19 Patient LOS" in which I utilize a neural network to enhance patient outcomes.</p>
            <a className="repo-link" href="https://github.com/ZachFara/Oversampling-Techniques-for-Predicting-COVID-19-Patient-Length-of-Stay" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <div className="repo-meta">
              <span className="repo-stars">★ 2</span>
              <span className="repo-language"><i className="fab fa-python"></i> Python</span>
            </div>
          </div>
          
          <div className="repo-card">
            <h2 className="repo-title">Autonamous Weather based commodity trading</h2>
            <p className="repo-description">A repository which utilizes two servers to simulate a trading environment and use weather based trading signals.</p>
            <a className="repo-link" href="https://github.com/ZachFara/RealTime-AutonamousWeatherTrading" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <div className="repo-meta">
              <span className="repo-stars">★ 1</span>
              <span className="repo-language"><i className="fab fa-python"></i> Python</span>
            </div>
          </div>
          
          <div className="repo-card">
            <h2 className="repo-title">Chartwell Insurance E-mail chatbot</h2>
            <p className="repo-description">An OpenAI based project in which help automate some of Chartwells most frequently asked questions by email. 
              <span style={{ fontSize: '0.9em', color: 'grey', display: 'block' }}>*Not yet public</span>
            </p>
            <a className="repo-link" href="" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <div className="repo-meta">
              <span className="repo-stars">★ 1</span>
              <span className="repo-language"><i className="fab fa-python"></i> Python</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Repositories;
