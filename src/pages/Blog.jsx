import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CardTransitionStyles from '../components/CardTransitionStyles';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zachariah Farahany</title>
      </Helmet>
      <CardTransitionStyles />
      
      <section>
        <header className="main">
          <h1>Beyond the Mean</h1>
          <div className="text-center">
            <p className="subtitle">Beyond the basics in data science and technology — exploring the subtle, the surprising, and the statistically counterintuitive.</p>
          </div>
        </header>
        <hr />
        <div className="blog-container">
          {/* Blog Post 1 */}
          <div className="blog-card" style={{
            transition: "transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
            cursor: "pointer"
          }}>
            <Link to="/blog/why-do-we-need-agents" className="blog-link">
              <h2 className="blog-title">Why Do We Need Agents?</h2>
            </Link>
            <p className="blog-description">Understanding the role and importance of AI agents in modern applications</p>
            <div className="blog-meta">
              <span className="blog-date">July 24, 2025</span>
              <span className="blog-read-time">7 min read</span>
            </div>
            <div className="blog-tags">
              <span className="tag">#AI</span>
              <span className="tag">#Agents</span>
              <span className="tag">#LlamaIndex</span>
              <span className="tag">#data-science</span>
            </div>
          </div>
          
          {/* Blog Post 2 */}
          <div className="blog-card" style={{
            transition: "transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
            cursor: "pointer"
          }}>
            <Link to="/blog/ai-agent-memory" className="blog-link">
              <h2 className="blog-title">AI Agent Memory</h2>
            </Link>
            <p className="blog-description">Demystifying the different types of AI agent memory</p>
            <div className="blog-meta">
              <span className="blog-date">May 30, 2025</span>
              <span className="blog-read-time">4 min read</span>
            </div>
            <div className="blog-tags">
              <span className="tag">#AI</span>
              <span className="tag">#Research</span>
              <span className="tag">#Agents</span>
              <span className="tag">#data-science</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
