import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const WhyDoWeNeedAgents = () => {
  return (
    <>
      <Helmet>
        <title>Why Do We Need Agents? - Zachariah Farahany</title>
      </Helmet>

      <article className="blog-post">
        <header className="main">
          <h1>Why Do We Need Agents?</h1>
          
          <div className="blog-featured-image" style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              margin: '2rem auto 2.5rem',
              maxWidth: '90%'
            }}>
            <img 
              src="images/ai-agent-diagram.webp" 
              alt="AI Agent Architecture Diagram" 
              className="img-fluid"
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                marginBottom: '0'
              }}
            />
          </div>
          
          <div className="blog-meta">
            <span className="blog-date">Created on July 24, 2025</span>
          </div>
          <div className="blog-tags">
            <span className="tag">#AI</span>
            <span className="tag">#Agents</span>
            <span className="tag">#LlamaIndex</span>
            <span className="tag">#data-science</span>
          </div>
        </header>

        <div className="blog-content">
          
          <p>
            Imagine juggling a dozen different dashboards, APIs, and databases to answer a single question then forgetting what you did ten minutes ago. That's the fate of traditional chatbots without additional capabilities: powerful yet perpetually stateless. An <strong>AI agent</strong>, by contrast, is truly like having a second brain that can remember context, plan multi-step actions, react to failures, and learn from past interactions.
          </p>

          <h2>What Is an AI Agent?</h2>
          <p>
            An agent is more than a chatbot. It embodies a <strong>cognitive loop</strong>:
          </p>
          <ol>
            <li><strong>Perception</strong>: Grasping user intent and environmental signals.</li>
            <li><strong>Planning</strong>: Decomposing complex requests into ordered actions.</li>
            <li><strong>Execution</strong>: Delegating each action to the right service or function.</li>
            <li><strong>Reflection & Memory</strong>: Storing outcomes and context for future interactions.</li>
          </ol>
          <p>
            Without this loop, the tool becomes a static script rigidly following pre-defined branches without adapting to new contexts or learning from past interactions, much like a program without if-else logic or loops.
          </p>

          <h2>Core Components & Intuition</h2>

          <h3>Perception</h3>
          <p>
            Think of this as the agent's "ears" and "eyes." By translating free-form text into structured intents, the agent understands whether you're asking for a database query, a similarity search, or a chart.
          </p>

          <h3>Planning</h3>
          <p>
            This is the step where the agent interprets the desires of the user and then creates a plan to fetch the relevant results, crafting a plan like "First query yesterday's sales in Athena, then fetch related reports from OpenSearch." In addition, after each execution step, the agent reflects on the output and then drafts a new plan, allowing it to course-correct if something goes wrong or respond early if it already has enough information.
          </p>

          <h3>Execution</h3>
          <p>
            During this step the agent calls the tools that it planned out during the planning stage. Each tool, such as a SQL query engine that prunes your database, a graphing tool that generates visuals, and a vector-based search for RAG, works together. The executor stitches these outputs into a cohesive response.          
          </p>
          <h3>Memory</h3>
          <p>
            Memory is the agent’s context store. It captures prior queries, tool outputs, and decisions, then re-injects them when relevant. This makes follow up question faster and more natural, building continuity across interactions.
          </p>

          <h2>LlamaIndex: The Glue That Binds</h2>
          <p>
            <em>Note: Some of the modules mentioned are slightly out of date in order to be compatible with external libraries.</em>
          </p>

          <p>
            <strong><a href="https://docs.llamaindex.ai/" target="_blank" rel="noopener noreferrer">LlamaIndex</a></strong> is a foundational library for building agentic AI applications. At its core, it provides modular components that make it easy to connect agents with relevant data sources, equip them with memory, and coordinate their behavior through tools and planning logic.
          </p>

          <p>
            When creating an agent, a common first step is to give it access to structured knowledge. LlamaIndex supports this via several types of indices, such as the <strong><a href="https://docs.llamaindex.ai/en/stable/module_guides/indexing/vector_store_index/" target="_blank" rel="noopener noreferrer">VectorStoreIndex</a></strong>, which normalize and structure your data for retrieval. To make this data queryable by an agent, you can wrap the index into a <strong><a href="https://docs.llamaindex.ai/en/stable/module_guides/deploying/query_engine/" target="_blank" rel="noopener noreferrer">Query Engine</a></strong>, a component that exposes a simple <code>.query()</code> method for retrieving relevant information. To fine-tune agent behavior, you can use <strong><a href="https://docs.llamaindex.ai/en/stable/module_guides/models/prompts/" target="_blank" rel="noopener noreferrer">prompt templates</a></strong> within the query engine. These enable few-shot prompting where the agent is guided by a set of example interactions to improve the quality of its responses.
          </p>

          <p>
            Once the query engine is ready, you'll want to expose it as a tool that the agent can call. LlamaIndex offers a convenient <strong><a href="https://docs.llamaindex.ai/en/stable/api_reference/tools/query_engine/" target="_blank" rel="noopener noreferrer">QueryEngineTool</a></strong> to do just that.             If you're working with custom logic say, a Python function that performs an action you can wrap it using <strong><a href="https://docs.llamaindex.ai/en/stable/api_reference/tools/function/" target="_blank" rel="noopener noreferrer">FunctionTool</a></strong>, providing both a name and description so the agent knows when and how to use it.
          </p>

          <p>
            After assembling a set of tools, you're ready to bring your agent to life. Pass the tools to the <strong><a href="https://docs.llamaindex.ai/en/v0.10.34/module_guides/deploying/agents/agent_runner/" target="_blank" rel="noopener noreferrer">AgentRunner</a></strong> (or newer agent abstractions), and the system will handle chat interactions, tool invocation, and reasoning over steps. Your agent can now field questions and take intelligent action based on the tools and data you've connected.
          </p>

          <p>
            For advanced workflows, LlamaIndex also offers flexible memory options. The default <strong><a href="https://docs.llamaindex.ai/en/stable/api_reference/memory/chat_memory_buffer/" target="_blank" rel="noopener noreferrer">ChatMemoryBuffer</a></strong> supports basic conversational memory, while more specialized memory modules are being introduced to better separate short-term memory, long-term recall, and planning context. You can inject or modify memory during runtime, which is useful for updating prompts, injecting prior knowledge, or debugging behavior.
          </p>

          <p>
            LlamaIndex also includes built-in support for live monitoring and instrumentation. With the <strong><a href="https://docs.llamaindex.ai/en/stable/api_reference/callbacks/" target="_blank" rel="noopener noreferrer">BaseCallbackHandler</a></strong>, you can subclass and define your own callbacks to track agent behavior in real time, whether it's logging the current tool, rendering a progress bar, or recording decisions for later analysis.
          </p>

          <p>
            In short, LlamaIndex streamlines the process of building agentic systems by combining core concepts memory, planning, data access, and execution into a cohesive, extensible framework. And this is just scratching the surface. Features like streaming responses, cloud-based connectors, and live execution tracing make it one of the most powerful libraries for anyone building intelligent, multi-step AI workflows.
          </p>

          <h2>Conclusion</h2>
          <p>
            Agents transform static code into <strong>adaptive partners</strong> that learn, remember, and coordinate across services. By combining external managed infrastructure, LlamaIndex's modular abstractions, and minimal declarative code you create a system that not only responds but also evolves turning reactive scripts into proactive problem-solvers.
          </p>
          
          <div className="blog-image-citation" style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#666', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
            <p>
              <strong>Image credit:</strong> "Agentic AI: How to Build an AI Agent from Scratch - A Developer's Guide" by Aman Raghuvanshi. Source: <a href="https://medium.com/@iamanraghuvanshi/agentic-ai-2-how-to-build-an-ai-agent-from-scratch-a-developers-guide-ba2f6ae042c4" target="_blank" rel="noopener noreferrer">Medium</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default WhyDoWeNeedAgents;
