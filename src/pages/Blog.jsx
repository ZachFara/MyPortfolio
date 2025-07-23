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

        <div className="posts">
          {/* Blog Post 1 */}
          <article className="post">
            <Link to="/blog/ai-agent-memory" className="post-link">
              <h2>AI Agent Memory</h2>
            </Link>
            <p className="post-desc">Demystifying the different types of AI agent memory</p>
            <div className="post-meta">
              <span className="post-date">May 30, 2025</span>
              <span className="read-time">4 min read</span>
            </div>
            <div className="post-tags">
              <span className="tag">AI</span>
              <span className="tag">Research</span>
              <span className="tag">Agents</span>
              <span className="tag">data-science</span>
            </div>
          </article>

          <hr />

          {/* Blog Post 2 */}
          <article className="post">
            <Link to="/blog/ai-technical-product-manager" className="post-link">
              <h2>The Roadmap to AI Technical Product Manager</h2>
            </Link>
            <p className="post-desc">A guide to AI upskilling for Technical Product Managers</p>
            <div className="post-meta">
              <span className="post-date">May 18, 2025</span>
              <span className="read-time">12 min read</span>
            </div>
            <div className="post-tags">
              <span className="tag">AI</span>
              <span className="tag">Machine_Learning</span>
              <span className="tag">Deep_Learning</span>
              <span className="tag">Product_Management</span>
              <span className="tag">Agents</span>
              <span className="tag">data-science</span>
            </div>
          </article>

          <hr />

          {/* Blog Post 3 */}
          <article className="post">
            <Link to="/blog/reinforcement-learning-fundamentals" className="post-link">
              <h2>Reinforcement Learning Fundamentals</h2>
            </Link>
            <p className="post-desc">Understanding the basics of reinforcement learning algorithms</p>
            <div className="post-meta">
              <span className="post-date">April 15, 2025</span>
              <span className="read-time">8 min read</span>
            </div>
            <div className="post-tags">
              <span className="tag">AI</span>
              <span className="tag">Machine_Learning</span>
              <span className="tag">Reinforcement_Learning</span>
            </div>
          </article>

          <hr />

          {/* Blog Post 4 */}
          <article className="post">
            <Link to="/blog/future-of-robotics" className="post-link">
              <h2>The Future of Robotics in Healthcare</h2>
            </Link>
            <p className="post-desc">How robots are transforming patient care and medical procedures</p>
            <div className="post-meta">
              <span className="post-date">March 22, 2025</span>
              <span className="read-time">10 min read</span>
            </div>
            <div className="post-tags">
              <span className="tag">Robotics</span>
              <span className="tag">Healthcare</span>
              <span className="tag">AI</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Blog;
