import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar-components.css';

const BlogSidebar = () => {
  // Sample blog posts for the sidebar
  const recentPosts = [
    {
      id: 'why-do-we-need-agents',
      title: 'Why Do We Need Agents?',
      date: 'July 24, 2025',
      readTime: '7 min read'
    },
    {
      id: 'ai-agent-memory',
      title: 'Agentic Memory from Llama Index',
      date: 'May 30, 2025',
      readTime: '4 min read'
    }
  ];

  return (
    <section className="mini-posts">
      <header>
        <h2>Recent Blog Posts</h2>
      </header>
      <div className="sidebar-blog-posts">
        {recentPosts.map((post) => (
          <article key={post.id} className="sidebar-blog-post">
            <Link to={`/blog/${post.id}`} className="sidebar-blog-title">
              <h3>{post.title}</h3>
            </Link>
            <div className="sidebar-blog-meta">
              <span>{post.date}</span> · <span>{post.readTime}</span>
            </div>
          </article>
        ))}
      </div>
      <footer>
        <Link to="/blog" className="button">View All Posts</Link>
      </footer>
    </section>
  );
};

export default BlogSidebar;
