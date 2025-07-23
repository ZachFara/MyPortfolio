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
          <h1>One Degree Better</h1>
          <p className="subtitle">My writings on data science, robotics, philosophy, literature, and everything in between</p>
        </header>
        <hr />
        <div className="blog-container">
          {/* Blog Post 1 */}
          <div className="blog-card">
            <h2 className="blog-title">AI Agent Memory</h2>
            <p className="blog-description">Demystifying the different types of AI agent memory</p>
            <Link to="/blog/ai-agent-memory" className="blog-link">Read More</Link>
            <div className="blog-meta">
              <span className="blog-date">May 30, 2025</span>
              <span className="blog-read-time">4 min read</span>
              <div className="blog-tags">
                <span className="tag">AI</span>
                <span className="tag">Research</span>
                <span className="tag">Agents</span>
                <span className="tag">data-science</span>
              </div>
            </div>
          </div>

          
          {/* Blog Post 2 */}
          <div className="blog-card">
            <h2 className="blog-title">The Roadmap to AI Technical Product Manager</h2>
            <p className="blog-description">A guide to AI upskilling for Technical Product Managers</p>
            <Link to="/blog/ai-technical-product-manager" className="blog-link">Read More</Link>
            <div className="blog-meta">
              <span className="blog-date">May 18, 2025</span>
              <span className="blog-read-time">12 min read</span>
              <div className="blog-tags">
                <span className="tag">AI</span>
                <span className="tag">Machine_Learning</span>
                <span className="tag">Deep_Learning</span>
                <span className="tag">Product_Management</span>
                <span className="tag">Agents</span>
                <span className="tag">data-science</span>
              </div>
            </div>
          </div>
          
          {/* Blog Post 3 */}
          <div className="blog-card">
            <h2 className="blog-title">Reinforcement Learning Fundamentals</h2>
            <p className="blog-description">Understanding the basics of reinforcement learning algorithms</p>
            <Link to="/blog/reinforcement-learning-fundamentals" className="blog-link">Read More</Link>
            <div className="blog-meta">
              <span className="blog-date">April 15, 2025</span>
              <span className="blog-read-time">8 min read</span>
              <div className="blog-tags">
                <span className="tag">AI</span>
                <span className="tag">Machine_Learning</span>
                <span className="tag">Reinforcement_Learning</span>
              </div>
            </div>
          </div>
          
          {/* Blog Post 4 */}
          <div className="blog-card">
            <h2 className="blog-title">The Future of Robotics in Healthcare</h2>
            <p className="blog-description">How robots are transforming patient care and medical procedures</p>
            <Link to="/blog/future-of-robotics" className="blog-link">Read More</Link>
            <div className="blog-meta">
              <span className="blog-date">March 22, 2025</span>
              <span className="blog-read-time">10 min read</span>
              <div className="blog-tags">
                <span className="tag">Robotics</span>
                <span className="tag">Healthcare</span>
                <span className="tag">AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
