import { Helmet } from 'react-helmet';

const CurriculumVitae = () => {
  return (
    <>
      <Helmet>
        <title>Curriculum Vitae - Zachariah Farahany</title>
      </Helmet>

      <section className="cv">
        <div className="wrap">
          <header className="page-head">
            <div className="page-head__row"><span className="page-head__idx">04 / CV</span></div>
            <h1>Curriculum Vitae</h1>
            <p className="page-head__desc">Quantitative ML practitioner: publications, production systems, and research.</p>
            <div className="page-head__actions">
              <a className="btn" href="Zachariah-Farahany-Resume.pdf" target="_blank" rel="noopener noreferrer">Download résumé <span className="arw">↓</span></a>
            </div>
          </header>

        <div className="section basics">
          <h2 className="section-title">Basics</h2>
          <dl className="def-grid">
            <dt>Name</dt>
            <dd>Zachariah Farahany</dd>

            <dt>Email</dt>
            <dd>
              <a className="link" href="mailto:zfarahany193@gmail.com">
                <img src="images/Gmail logo.png" alt="Gmail Icon" style={{width:'16px', height:'16px', verticalAlign:'middle', marginRight:'5px'}} />
                zfarahany193@gmail.com
              </a>
            </dd>

            <dt>LinkedIn</dt>
            <dd>
              <a className="link" href="https://www.linkedin.com/in/zachariah-farahany-3818aa1bb/" target="_blank" rel="noopener noreferrer">
                <img src="images/Linkedin icon.png" alt="LinkedIn Icon" style={{width:'16px', height:'16px', verticalAlign:'middle', marginRight:'5px'}} />
                LinkedIn
              </a>
            </dd>

            <dt>GitHub</dt>
            <dd>
              <a className="link" href="https://github.com/ZachFara" target="_blank" rel="noopener noreferrer">
                <img src="images/GitHub logo.png" alt="GitHub Icon" style={{width:'16px', height:'16px', verticalAlign:'middle', marginRight:'5px'}} />
                ZachFara
              </a>
            </dd>

            <dt>Summary</dt>
            <dd>Quantitative ML practitioner with a research thread. I build, deploy, and research production ML and agentic systems. My background spans the full stack from data pipelines and model development to agentic LLM architectures and interpretability research, with first and co-author IEEE publications and production deployments across finance, insurance, and industrial IoT. Currently a Quantitative Analytics Associate at Wells Fargo working on production credit risk models and quantitative risk systems.</dd>
          </dl>
        </div>

        <div className="section publications">
          <h2 className="section-title">Publications</h2>

          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <h3 className="job-title">Oversampling Techniques for Predicting COVID-19 Patient Length of Stay</h3>
                <p><span className="label">Venue</span>: IEEE Big Data 2022</p>
                <p><span className="label">Authors</span>: Zachariah Farahany, K M Sajjadul Islam, Jiawei Wu, Praveen Madiraju</p>
                <p><span className="label">arXiv</span>: <a className="link" href="https://arxiv.org/abs/2511.15048" target="_blank" rel="noopener noreferrer">arXiv:2511.15048</a></p>
                <p><span className="label">GitHub</span>: <a className="link" href="https://github.com/ZachFara/Oversampling-Techniques-for-Predicting-COVID-19-Patient-Length-of-Stay" target="_blank" rel="noopener noreferrer">ZachFara/Oversampling-Techniques-for-Predicting-COVID-19-Patient-Length-of-Stay</a></p>
                <p><span className="label">Role</span>: First author</p>
                <ul className="education-description">
                  <li>Binary classification of hospital length of stay (&gt;7 days) as a severity proxy for resource allocation, on a high-dimensional sparse EHR dataset (n=11,235, ~25,000 features after processing).</li>
                  <li>ANN with Bayesian hyperparameter optimization and SMOTE-style oversampling on an imbalanced ~80/20 class split.</li>
                  <li>Best model reached 85.79% F1 (95.50% accuracy, 91.23% AUC), outperforming comparable published benchmarks of 49–80% F1.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <h3 className="job-title">A Machine Learning Approach to Predict Length of Stay for Opioid Overdose Admitted Patients</h3>
                <p><span className="label">Venue</span>: IEEE Big Data 2021</p>
                <p><span className="label">Authors</span>: Jiawei Wu, Priyanka Annapureddy, Zach Farahany, Praveen Madiraju</p>
                <p><span className="label">DOI</span>: <a className="link" href="https://doi.org/10.1109/BigData52589.2021.9671933" target="_blank" rel="noopener noreferrer">10.1109/BigData52589.2021.9671933</a></p>
                <p><span className="label">Role</span>: Co-author</p>
                <ul className="education-description">
                  <li>Contributed experimental design, methodology review, and results communication on a length-of-stay prediction problem applied to opioid overdose patients.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section work">
          <h2 className="section-title">Work</h2>

          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <p className="date-range">2025.07 – present</p>
                <h3 className="job-title">Quantitative Analytics Associate</h3>
                <p><span className="label">Company</span>: Wells Fargo</p>
                <ul className="education-description">
                  <li>Selected into a competitive rotational development program rotating across lines of business, with formal training in banking, finance, and regulation.</li>
                  <li><strong>WIM Model Risk (Jan 2026 – Jul 2026):</strong> Validated the tracking-error prediction model used for risk projection across Wells Fargo wealth-management client portfolios, benchmarked against BlackRock Aladdin.</li>
                  <li>Implemented and compared multiple factor models (Fama-French 5-factor, a 12-factor model, full sample covariance, experimental PCA factors) from research papers, with research-based extensions focused on covariance and volatility scaling — market-cap covariance scaling, EWMA weighting, and Barra-style GARCH/GJR-GARCH and MF2-GARCH volatility scaling — that improved tracking-error accuracy.</li>
                  <li>Built a full backtesting engine supporting fixed and varying benchmark/portfolio configurations, plus a Dirichlet-based testing-portfolio construction method that holds portfolios market-cap weighted on average while modeling realistic variance across the client base.</li>
                  <li><strong>Risk Modeling Group, Auto Decisioning (Jul 2025 – Dec 2025):</strong> Built and shipped to production the second-stage Eagle model, a probability-of-charge-off model that makes the final approve/decline decision on all Wells Fargo auto originations.</li>
                  <li>Handled variable selection for fairness compliance, monotonicity validation against drivers like FICO, and segment-level error analysis on realized vs. predicted charge-off.</li>
                  <li>Separately built an automated auditing tool for credit-bureau attributes, replacing a manual process that required a team of ten analysts working multiple weeks.</li>
                  <li>The tool parses the attribute specification sheet, applies its rules to applicant credit histories, and reconciles against the data provider, raising validated coverage from under 1% of applicants to 25%+ in a single day.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <p className="date-range">2025.01 – 2025.05</p>
                <h3 className="job-title">AI Engineer <span style={{fontWeight:'normal', fontSize:'0.85em', opacity:0.7}}>(Contract)</span></h3>
                <p><span className="label">Company</span>: Seyon Solutions</p>
                <ul className="education-description">
                  <li>Architected and built from scratch an agentic LlamaIndex assistant for a chemical-processing client operating two plants (650+ employees), letting managers query worker performance and plant operations in natural language.</li>
                  <li>Designed a multi-tool agent: a primary few-shot SQL tool (~100 pre-written CTEs stored with natural-language descriptions in a vector database, similarity-matched at query time and passed as few-shot examples to a SQL-writing LLM with schema context), an AWS OpenSearch vector-search fallback, and a graphing tool that produced charts directly from natural-language queries.</li>
                  <li>Designed and implemented a bronze-silver-gold medallion pipeline on AWS: append-only event JSON landed via Lambda into a terabyte-scale bronze store, a Lambda-triggered silver layer maintaining active state and full history via Delta Lake, and a Glue job aggregating to production gold tables every five minutes.</li>
                  <li>Deployed to real users with ~90% query accuracy by end of engagement.</li>
                  <li>Stack: LlamaIndex, AWS OpenSearch, Streamlit, AWS Lambda, AWS Glue, Delta Lake, SQL.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <p className="date-range">2024.08 – 2025.01</p>
                <h3 className="job-title">AI Solutions Consultant <span style={{fontWeight:'normal', fontSize:'0.85em', opacity:0.7}}>(Contract)</span></h3>
                <p><span className="label">Company</span>: Chartwell Insurance Services</p>
                <p><span className="label">GitHub</span>: <a className="link" href="https://github.com/ZachFara/Chartwell-Insurance-AI" target="_blank" rel="noopener noreferrer">ZachFara/Chartwell-Insurance-AI</a></p>
                <ul className="education-description">
                  <li>Built a production RAG-powered customer-service assistant for Chartwell's support team.</li>
                  <li>The system ingested insurance policy documents, chunked and indexed them into Pinecone for semantic search, and retrieved context at query time to generate professional email-formatted responses.</li>
                  <li>Built a dedicated hyperparameter-tuning harness that swept chunk size, overlap, top-k, and prompt variations against a question dataset with results logged across iterations, and experimented with alternative chunking strategies.</li>
                  <li>Modular architecture separating agent orchestration, vector-store management, document loading, and configuration, with live document upload to keep the knowledge base current.</li>
                  <li>Stack: GPT-4, Pinecone, Streamlit, LlamaParse.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <p className="date-range">2024.06 – 2024.08</p>
                <h3 className="job-title">Quantitative Analytics Intern</h3>
                <p><span className="label">Company</span>: Wells Fargo</p>
                <ul className="education-description">
                  <li>Worked on Fargo, Wells Fargo's production AI virtual assistant in the consumer banking app (245M+ interactions in 2024 across 33M+ mobile active users).</li>
                  <li>Designed and ran a demographic bias-evaluation suite for Fargo's intent-classification model, systematically varying gendered pronouns and ethnicity references across hundreds of queries to measure output consistency, including edge cases where demographic context is legitimately relevant.</li>
                  <li>Measured 90%+ classification consistency across demographic variations.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <p className="date-range">2023.06 – 2024.06</p>
                <h3 className="job-title">Data Scientist, Engineer I</h3>
                <p><span className="label">Company</span>: Badger Meter Inc.</p>
                <ul className="education-description">
                  <li>Built a large-scale AWS EMR + Spark ETL pipeline aggregating 5 TB of structured and unstructured telemetry from DynamoDB into a central warehouse, optimized with multithreading, parallel computing, and C++/Python interoperability.</li>
                  <li>Engineered a gradient-boosting classifier to predict device failure from voltage telemetry on a highly imbalanced dataset with few labeled failures (~60% F1, a strong result given the signal and label constraints), plus a time-series regression model for voltage-degradation patterns.</li>
                  <li>The model formed the basis of a proposed paid device-health API for out-of-warranty devices.</li>
                  <li>Served as the sole quantitative source of truth for fleet health across a 1,000+ device pilot (path to a 3M+ device fleet), delivering monthly diagnostics to senior leadership.</li>
                  <li>Stack: AWS EMR, Spark, DynamoDB, Python, C++, XGBoost, time-series modeling.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <p className="date-range">2020.08 – 2023.05</p>
                <h3 className="job-title">Data Science Researcher</h3>
                <p><span className="label">Company</span>: Marquette University</p>
                <ul className="education-description">
                  <li>Joined a CS research lab alongside PhD students (partially funded by NSF grant #1950826).</li>
                  <li>First-authored and co-authored back-to-back IEEE Big Data publications (2022 and 2021) on hospital length-of-stay prediction from electronic health records, owning the full pipeline on the 2022 paper: data processing, modeling, Bayesian hyperparameter sweep, results, and analysis.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section teaching">
          <h2 className="section-title">Teaching</h2>

          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <p className="date-range">2025.04 – present</p>
                <h3 className="job-title">Teaching Assistant, MS Applied Data Science</h3>
                <p><span className="label">University</span>: University of Chicago</p>
                <ul className="education-description">
                  <li>Selected by faculty to teach in the MS Applied Data Science program after completing my thesis under the same professor.</li>
                  <li>TA for two courses: a robotics capstone (programmatic control of Tello drones via Python APIs, computer vision, and student thesis projects including a drone light show and drone painting) and Data Engineering (GCP, SQL, Snowflake, ETL/ELT, database design, OLAP vs. OLTP, star and snowflake schemas, slowly changing dimensions).</li>
                  <li>Given creative latitude to develop and deliver lectures on topics including Git/GitHub, vibe coding, and Model Context Protocol.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section education">
          <h2 className="section-title">Education</h2>

          <div className="education-item">
            <p className="date-range">2023 – 2024</p>
            <h3 className="education-title">Master of Science, Applied Data Science</h3>
            <p><span className="label">University</span>: University of Chicago</p>
            <ul className="education-description">
              <li>Coursework: Machine Learning, Natural Language Processing and Cognitive Computing, Time Series Analysis and Forecasting, MLOps, Data Engineering, Data Mining, Supply Chain Optimization, Linear and Non-Linear Modeling, Statistics, Linear Algebra.</li>
              <li>Thesis: Autonomous drone search using multimodal computer vision and large language models for zero-shot, open-vocabulary object identification (SkySearch).</li>
            </ul>
          </div>

          <div className="education-item">
            <p className="date-range">2019 – 2023</p>
            <h3 className="education-title">Bachelor of Science, Mathematics and Computer Science</h3>
            <p><span className="label">University</span>: Marquette University</p>
            <ul className="education-description">
              <li>Coursework: Calculus I–III, Linear Algebra, Real Analysis, Differential Equations, Probability and Statistics, Numerical Methods, Discrete Mathematics, Data Structures and Algorithms, Data Mining, Fundamentals of Artificial Intelligence, Database Systems, Software Engineering.</li>
            </ul>
          </div>
        </div>

        <div className="section projects">
          <h2 className="section-title">Selected Projects</h2>

          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <h3 className="job-title">SkySearch: Open-Vocabulary UAV Object Search (MS Thesis)</h3>
                <p><span className="label">GitHub</span>: <a className="link" href="https://github.com/ZachFara/SkySearch" target="_blank" rel="noopener noreferrer">ZachFara/SkySearch</a></p>
                <ul className="education-description">
                  <li>Multimodal LLM system for autonomous drone search that handles open-vocabulary and reasoning-based target descriptions, going beyond fixed-class detectors like YOLO (You Only Look Once).</li>
                  <li>MLLM-agnostic architecture (tested GPT-4o, Gemini 1.5, Claude 3 Haiku) querying a 3×3×3 spatial grid to resolve target direction across left/right, up/down, and near/far axes.</li>
                  <li>Built GLAD, a custom anti-contamination benchmark of 100 campus images with spatial annotations and paired negatives, to evaluate spatial localization on novel data.</li>
                  <li>Live flights reached 95% success (90% true zero-shot, first attempt) across 20 courses, including abstract targets like "a book by Frank Herbert receiving a film adaptation" and "a textbook to prepare for a coding interview at Meta."</li>
                  <li>Total live-flight inference cost under $1. Writeup available on GitHub.</li>
                  <li>Stack: Python, OpenAI/Google/Anthropic APIs, DJI Tello SDK.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-content">
              <div className="job-details">
                <h3 className="job-title">Concept Paths: Concept Geometry Interpretability</h3>
                <ul className="education-description">
                  <li>Research toolkit for studying how semantic concepts (sentiment, concreteness) are geometrically encoded across transformer hidden layers in the GPT-2 and OPT families.</li>
                  <li>Captures layerwise activations along concept axes and computes geometry metrics (PC1 explained variance, k-threshold dimensionality, subspace rotation), with permutation nulls and bootstrap controls, neuron-ablation dose-response curves, cross-concept subspace similarity, and a layerwise ridge-probe behavioral readout.</li>
                  <li>Stack: Python, PyTorch, HuggingFace Transformers, nnsight.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section certifications">
          <h2 className="section-title">Certifications</h2>
          <ul className="education-description">
            <li><a className="link" href="https://www.credly.com/badges/9fe43ed9-be3e-409c-a851-9ff90b73ecce/public_url" target="_blank" rel="noopener noreferrer">Google Cloud: Professional Data Engineer</a></li>
            <li><a className="link" href="https://www.credly.com/badges/cb2a3b54-bf94-463c-a977-b13b765137ed/public_url" target="_blank" rel="noopener noreferrer">Google Cloud: Professional Data Leader</a></li>
            <li><a className="link" href="https://graphacademy.neo4j.com/c/38cf0312-5268-4ccd-b81b-1b44df07a891/" target="_blank" rel="noopener noreferrer">Neo4j Certification</a></li>
          </ul>
        </div>

        <div className="section skills">
          <h2 className="section-title">Skills</h2>
          <dl className="def-grid">
            <dt>Languages</dt>
            <dd>Python, R, SQL, JavaScript/TypeScript</dd>

            <dt>ML / AI</dt>
            <dd>PyTorch, TensorFlow/Keras, Scikit-learn, HuggingFace Transformers, XGBoost, Neural networks, Reinforcement learning, Computer vision, Bayesian hyperparameter optimization, SMOTE/oversampling, Time-series modeling, Model validation</dd>

            <dt>LLM / Agentic</dt>
            <dd>RAG design and tuning, Agentic system design (tool registries, orchestration), Memory management, MLLM evaluation and benchmarking, Few-shot prompting, LlamaIndex, AWS Bedrock, OpenAI / Anthropic / Google Cloud Model Garden APIs</dd>

            <dt>Data Engineering &amp; Cloud</dt>
            <dd>Apache Spark (AWS EMR), AWS Lambda, AWS Glue, S3, Delta Lake/Parquet, DynamoDB, Pinecone, AWS OpenSearch, Medallion architecture, Snowflake, GCP/BigQuery, ETL design</dd>

            <dt>Interpretability</dt>
            <dd>Activation analysis, Concept-geometry/subspace analysis, Ablation studies, Behavioral readout</dd>

            <dt>Dev Tools</dt>
            <dd>Git/GitHub, Docker, Weights &amp; Biases, Streamlit, Dev Containers, pytest</dd>
          </dl>
        </div>
        </div>
      </section>
    </>
  );
};

export default CurriculumVitae;
