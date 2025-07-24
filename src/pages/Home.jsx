import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Zachariah Farahany</title>
      </Helmet>
      
      {/* Banner */}
      <section id="banner">
        <div className="content">
          <header style={{ marginBottom: '1.5rem' }}>
            <h1 style={{ marginBottom: '0.5rem' }}>Zachariah Farahany<br /></h1>
            <p style={{ marginBottom: '1rem' }}>M.S. Applied Data Science University of Chicago</p>
          </header>
          <p>I am a data scientist and machine learning engineer holding an M.S. from the University of Chicago and with 4+ years of experience enhancing the efficiency, scalability, and performance of data processing systems. I am passionate about solving complex problems, implementing innovative machine learning solutions, and continuously learning to stay ahead in the rapidly evolving fields of AI, machine learning, and data science.</p>
        </div>
        <span className="image object">
          <img src="images/LinkedInImages.jpg" alt="Zachariah Farahany" style={{ maxWidth: '80%', maxHeight: '90%' }} />
        </span>
      </section>

      {/* Key Skills Section */}
      <section>
        <header className="major">
          <h2>Key Skills</h2>
        </header>
        <div className="features">
          <article>
            <span className="icon solid fa-database"></span>
            <div className="content">
              <h3>Big Data</h3>
              <p>Skilled in handling large datasets and deploying anomaly detection models. Utilized Hadoop and Spark for efficient data processing and insights.</p>
            </div>
          </article>
          <article>
            <span className="icon solid fa-cogs"></span>
            <div className="content">
              <h3>Machine Learning Operations</h3>
              <p>Automated deployment, testing, and monitoring of ML models using cloud resources. Experienced in optimizing resource usage and implementing MLFlow for model management.</p>
            </div>
          </article>
          <article>
            <span className="icon solid fa-signal"></span>
            <div className="content">
              <h3>Data Science</h3>
              <p>Conducted research and developed risk classification models. Presented technical papers at international conferences, proficient in Python, SQL, and various data science libraries.</p>
            </div>
          </article>
          <article>
            <span className="icon solid fa-brain"></span>
            <div className="content">
              <h3>Generative AI</h3>
              <p>Developed and optimized generative AI models, including transformer-based classifiers and diffusion models, enhancing performance and accuracy.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
