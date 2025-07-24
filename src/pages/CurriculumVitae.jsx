import { Helmet } from 'react-helmet';

const CurriculumVitae = () => {
  return (
    <>
      <Helmet>
        <title>Curriculum Vitae - Zachariah Farahany</title>
      </Helmet>
      
      <section>
        <header className="main">
          <h1>Curriculum Vitae</h1>
        </header>
        
        <div className="section basics">
          <h2 className="section-title">Basics</h2>
          <p><span className="label">Name</span>: Zachariah Farahany</p>
          <p><span className="label">Title</span>: Machine Learning Engineer</p>
          <p>
            <span className="label">Email</span>: &nbsp;&nbsp;
            <a className="link" href="mailto:zachariah.farahany@gmail.com">
              <img src="images/Gmail logo.png" alt="Gmail Icon" style={{width:'16px', height:'16px', verticalAlign:'middle', marginRight:'5px'}} /> 
              zachariah.farahany@gmail.com
            </a>
          </p>
          <p>
            <span className="label">LinkedIn</span>: &nbsp;&nbsp;
            <a className="link" href="https://www.linkedin.com/in/zachariah-farahany-3818aa1bb/" target="_blank" rel="noopener noreferrer">
              <img src="images/Linkedin icon.png" alt="LinkedIn Icon" style={{width:'16px', height:'16px', verticalAlign:'middle', marginRight:'5px'}} /> 
              LinkedIn
            </a>
          </p>
          <p><span className="label">Summary</span>: Highly motivated Machine Learning Engineer with 4+ years of experience in improving the efficiency, scalability, and performance of data processing. Accomplished in maximizing the effectiveness of conventional machine learning algorithms and in the implementation of experimental deep learning methods. In addition, I have recently gained a passion for integrating machine learning within robotics.</p>
        </div>
        
        <div className="section education">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <p className="date-range">2023 - 2024</p>
            <h3 className="education-title">Masters of Science, Applied Data Science</h3>
            <p><span className="label">University</span>: University of Chicago</p>
            <ul className="education-description">
              <li>Time Series Analysis and Forecasting, Natural Language Processing and Cognitive Computing, Supply Chain Optimization, MLOps, Machine Learning, Data Mining, Linear Algebra, Data Engineering, Statistics, Linear and Non-Linear Modeling</li>
              <li>Thesis: Autonomous drone swarms employing multimodal computer vision and large language models for zero-shot object identification</li>
            </ul>
          </div>
          <div className="education-item">
            <p className="date-range">2019 - 2023</p>
            <h3 className="education-title">Bachelor's of Science, Math and Computer Science</h3>
            <p><span className="label">University</span>: Marquette University</p>
            <ul className="education-description">
              <li>
                Calculus I - III, Linear Algebra, Discrete Mathematics, Probability and Statistics, Real Analysis, Differential Equations, Data Structures and Algorithms, Data Mining, Fundamentals of Artificial Intelligence, Database Systems, Software Engineering, Numerical Methods
              </li>
              <li>Final Project: Automatic scraping of Milwaukee crime data and analysis for neighborhood monitoring bias</li>
            </ul>
          </div>
        </div>
        
        <div className="section work">
          <h2 className="section-title">Work</h2>
        
          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <p className="date-range">2024.05 - 2024.08</p>
                <h3 className="job-title">Quantitative Analytics Intern</h3>
                <p><span className="label">Company</span>: Wells Fargo</p>
                <ul className="education-description">
                  <li>Enhanced a generative AI chatbot built on top of a popular cloud NLP platform, using a classifier to better categorize customer queries and direct them to tasks in our banking app</li>
                  <li>Mitigated reputational risk by performing bias and fairness testing on Fargo over a variety of ethnic and gender dimensions</li>
                </ul>
              </div>
              {/* <img src="images/Wells Fargo logo.jpeg" alt="Wells Fargo Banner" className="company-banner"> */}
            </div>
          </div>
        
          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <p className="date-range">2023.05 - 2024.05</p>
                <h3 className="job-title">Data Scientist - Engineer I</h3>
                <p><span className="label">Company</span>: Badger Meter Inc.</p>
                <ul className="education-description">
                  <li>Deployed an anomaly detection model based on 5 TB of data, offering key insights into device integrity and constituting a new paid API in the company SaaS platform</li>
                  <li>Reduces bottlenecks in data processing by 50% by utilizing multithreading, parallel computing, distributed computing supported by Spark, and C++ Python interoperability</li>
                  <li>Utilized NoSQL data from DynamoDB and ElasticSearch to gain insights into device failures and conduct survival analysis on device longevity</li>
                </ul>
              </div>
              {/* <img src="images/bm.jpeg" alt="Badger Meter Banner" className="company-banner"> */}
            </div>
          </div>
        
          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <p className="date-range">2022.05 - 2022.08</p>
                <h3 className="job-title">Machine Learning Researcher</h3>
                <p><span className="label">Company</span>: Pennsylvania State University</p>
                <ul className="education-description">
                  <li>Implemented state-of-the-art diffusion models for image generation and subsequently improved upon them using denoising optimization improving image quality</li>
                  <li>Utilized cloud computing resources to automate the deployment testing and monitoring of deep learning experiments, maximizing cost effectiveness of cloud resources</li>
                </ul>
              </div>
              {/* <img src="images/psu.jpeg" alt="Penn State Banner" className="company-banner"> */}
            </div>
          </div>
        
          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <p className="date-range">2020.08 - 2023.05</p>
                <h3 className="job-title">Data Science Researcher</h3>
                <p><span className="label">Company</span>: Marquette University</p>
                <ul className="education-description">
                  <li>Led a team of researchers through the preparation, submission and presentation of a technical machine learning paper for the Big Data Conference 2022 in Osaka, Japan</li>
                  <li>Developed risk classification model for COVID-19 using heterogeneous electronic health records, improving classification accuracy by 20% (Python and SQL)</li>
                  <li>Verified statistical relevance of machine learning models using 5-fold cross validation</li>
                </ul>
              </div>
              {/* <img src="images/Marquette University logo.jpeg" alt="Marquette University Banner" className="company-banner"> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurriculumVitae;
