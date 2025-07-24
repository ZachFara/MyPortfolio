import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AIAgentMemory = () => {
  return (
    <>
            <Helmet>
        <title>LlamaIndex Memory - Zachariah Farahany</title>
        <style type="text/css">
          {`
            .code-cell {
              background-color: rgba(248, 250, 252, 0.7);
              padding: 16px 10px;
              margin: 20px 0;
              border-left: 3px solid #3b82f6;
              white-space: pre;
              overflow-x: auto;
              box-shadow: none;
              position: relative;
            }
            .code-cell::before {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              width: 3px;
              background: linear-gradient(to bottom, transparent, #3b82f6, transparent);
              opacity: 0.4;
            }
            .code-cell pre {
              margin: 0;
              white-space: pre !important;
              overflow-x: auto;
              font-family: "Fira Code", "Consolas", monospace;
              font-size: 0.9em;
            }
            .code-cell code {
              display: block;
              line-height: 1.6;
              white-space: pre !important;
              color: #333;
            }
            /* Inline code styling - more subtle */
            p code, li code, h2 code {
              background-color: rgba(175, 184, 193, 0.2);
              padding: 0.1em 0.4em;
              border-radius: 3px;
              font-family: monospace;
              font-size: 0.9em;
              color: #444;
              font-weight: normal;
              white-space: nowrap;
              border: none;
            }
            
            /* Additional code cell styling */
            .code-cell::after {
              content: "python";
              position: absolute;
              top: 0;
              right: 10px;
              padding: 2px 8px;
              font-size: 0.7em;
              color: #3b82f6;
              background-color: transparent;
              border-radius: 0 0 0 4px;
              letter-spacing: 0.05em;
              text-transform: lowercase;
              opacity: 0.8;
            }
            
            /* Add subtle transition effects */
            .code-cell {
              transition: all 0.2s ease-in-out;
            }
            .code-cell:hover {
              background-color: rgba(239, 246, 255, 0.8);
            }
            h2.blog-title {
              font-size: 1.5rem;
              line-height: 1.3;
              margin-bottom: 1rem;
            }
            
            /* Python Syntax Highlighting - Blue-focused palette */
            .token.comment { color: #94a3b8; font-style: italic; }
            .token.keyword { color: #3b82f6; }
            .token.string { color: #0ea5e9; }
            .token.number { color: #0284c7; }
            .token.function { color: #2563eb; }
            .token.class-name { color: #2563eb; }
            .token.punctuation { color: #64748b; }
            .token.operator { color: #3b82f6; }
            .token.builtin { color: #4f46e5; }
            .token.property { color: #0284c7; }
            .token.parameter { color: #64748b; }
            .python-code .parameter-name { color: #1e40af; font-weight: normal; }
          `}
        </style>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-python.min.js"></script>
      </Helmet>

      <article className="blog-post">
        <header className="main">
          <h1>Agentic Memory from Llama Index</h1>
          <p className="blog-subtitle">How To Turn Theory Into A Practical Stack</p>
          <div className="blog-meta">
            <span className="blog-date">Created on May 30, 2025</span>
          </div>
          <div className="blog-tags">
            <span className="tag">#AI</span>
            <span className="tag">#LlamaIndex</span>
            <span className="tag">#Agents</span>
            <span className="tag">#Memory</span>
          </div>
        </header>

        <div className="blog-content">
          <h2 className="blog-title">How to Structure Memory</h2>
          <p>
            As I argued in my earlier post on <a href="/blog/whyagents">AI Agents</a>, memory is the difference between a clever one‑off response and a system that actually learns you—your preferences, your past asks, which tools worked (and which didn't). For the high-level theory, see Duncan Calvert's <a href="https://duncancalvert.github.io/blog/2025/ai_agent_memory/" target="_blank" rel="noopener noreferrer">"AI Agent Memory"</a>. Here, we'll stay pragmatic: short‑term vs. long‑term memory and how LlamaIndex operationalizes both with a clean, composable API.
          </p>

          <p>
            Short‑term memory (STM) is the rolling context that keeps the model coherent right now. Long‑term memory (LTM) is slimmer, curated, and retrieved only when relevant. Something must decide what to keep, how to compress it, and when to bring it back. LlamaIndex's <code>Memory</code> object plus specialized memory blocks give you exactly that.
          </p>

          <hr />

          <h2>Memory</h2>

          <p>
            In LlamaIndex, <code>Memory</code> is the orchestrator. It owns the plain‑text rolling chat buffer and automatically flushes overflowed tokens into long‑term memory blocks once you exceed a global <code>token_limit</code>. If you don't attach any blocks, those tokens are simply dropped. You tune the short‑term buffer's protection with <code>chat_history_token_ratio</code> (e.g., 0.7 to reserve 70% of the context for the live chat) and set <code>token_flush_size</code> to control how many tokens get evicted at a time. Conversations are isolated under a <code>session_id</code>, and you can persist memory by pointing <code>async_database_uri</code> to a real database (instead of the default in‑memory SQLite). At inference time, <code>Memory</code> reassembles the prompt by merging the short‑term buffer with whatever long‑term content still fits under <code>token_limit</code>, injected via your chosen <code>insert_method</code> (commonly <code>"system"</code>). Conceptually: <code>memory.put()</code> logs new events; <code>memory.get()</code> returns the token‑bounded context the model will actually see.
          </p>

          <hr />

          <h2>StaticMemoryBlock</h2>

          <p>
            <code>StaticMemoryBlock</code> is your non‑negotiable, always‑on context: agent identity, safety policies, core constraints, or stable user profile facts. It never retrieves, ranks, or summarizes—it always gets appended to the LLM context on every call. You typically set <code>priority=0</code>, which effectively says: "don't ever truncate this." It's cheap, deterministic, and perfect for what you'd otherwise hard‑code into a system prompt.
          </p>

          <hr />

          <h2>FactExtractionMemoryBlock</h2>

          <p>
            <code>FactExtractionMemoryBlock</code> converts long chats into durable, compact facts. When short‑term memory overflows, this block asks an LLM (<code>llm</code>) to extract salient information—preferences, decisions, constraints, key entities—up to <code>max_facts</code>. If it overgrows, it summarizes itself to stay tight. The result is a lightweight, always‑useful layer you can inject almost every turn. The cost: extra LLM calls and lossy compression. In practice, give it <code>priority=1</code>, so it nearly always survives truncation right after your static policy block.
          </p>

          <hr />

          <h2>VectorMemoryBlock</h2>

          <p>
            <code>VectorMemoryBlock</code> is your semantic recall layer. Flushed messages are embedded (<code>embed_model</code>) and written to a vector store (<code>vector_store</code>). On each step, it can pull back the most relevant past snippets (<code>similarity_top_k</code>, <code>retrieval_context_window</code>) and optionally post‑process them. This is ideal when you need to reach way back ("remember that Athena query we debugged last month?") or when you want verbatim, auditable recovery. Because retrieved spans can be token‑heavy, assign it a lower priority (e.g., <code>priority=2+</code>) so it's trimmed first when the context gets tight.
          </p>

          <hr />

          <h2>Priority</h2>

          <p>
            The <code>priority</code> you assign to each block defines your degradation path under strict token budgets. A production‑ready default:
          </p>

          <ol>
            <li><code>StaticMemoryBlock</code> (<code>priority=0</code>) — identity/rules must never drop.</li>
            <li><code>FactExtractionMemoryBlock</code> (<code>priority=1</code>) — distilled, low‑cost facts that almost always help.</li>
            <li><code>VectorMemoryBlock</code> (<code>priority=2+</code>) — deep semantic recall included only when there's space or clear relevance.</li>
          </ol>

          <p>
            This mirrors the theory: guarantee invariant context, keep a compact evergreen factual spine, and fall back to heavy semantic retrieval when necessary. Need something bespoke (scores, counters, domain state)? Subclass <code>BaseMemoryBlock</code>—<code>Memory</code> will still flush, retrieve, and truncate it under the same rules.
          </p>

          <hr />

          <h2>Best Practices</h2>

          <p>
            Adopt the three‑layer stack with explicit priorities. Set a strict <code>token_limit</code>, keep <code>chat_history_token_ratio</code> high enough for live turns, and flush in coherent chunks (<code>token_flush_size</code>) so long‑term blocks receive meaningful spans. Bound <code>max_facts</code> so facts stay cheap to inject; tighten <code>similarity_top_k</code> / <code>retrieval_context_window</code> to keep vector recalls lean. Use separate <code>session_id</code>s and a persistent <code>async_database_uri</code> when you need continuity beyond process restarts. Prefer <code>insert_method="system"</code> for clean, deterministic prompt injection.
          </p>

          <div className="code-cell">
<pre><code className="language-python python-code">{`from llama_index.core.memory import (
    Memory,
    StaticMemoryBlock,
    FactExtractionMemoryBlock,
    VectorMemoryBlock,
)

blocks = [
    StaticMemoryBlock(
        name="core_identity",
        static_content="You are Atlas, a finance agent. Always be precise, cite data, no hallucinations.",
        priority=0,
    ),
    FactExtractionMemoryBlock(
        name="facts",
        llm=llm,
        max_facts=100,
        priority=1,
    ),
    VectorMemoryBlock(
        name="ltm_vec",
        vector_store=vector_store,
        embed_model=embed_model,
        priority=2,
        similarity_top_k=3,
        retrieval_context_window=5,
    ),
]

memory = Memory.from_defaults(
    session_id="user-123",
    token_limit=32_000,
    chat_history_token_ratio=0.7,
    token_flush_size=2_000,
    memory_blocks=blocks,
    insert_method="system",
)

response = await agent.run(user_msg, memory=memory)
`}</code></pre>
          </div>

          <h2>Conclusion</h2>

          <p>
            Memory is what turns a clever LLM into a situated agent. LlamaIndex's <code>Memory</code> orchestrator plus a layered stack—<code>StaticMemoryBlock (0)</code> for invariants, <code>FactExtractionMemoryBlock (1)</code> for compact durable facts, and <code>VectorMemoryBlock (2)</code> for deep semantic recall—maps cleanly onto short‑ vs. long‑term memory theory while staying within strict token limits. Priorities give you a predictable degradation path; knobs like <code>token_limit</code>, <code>chat_history_token_ratio</code>, and <code>token_flush_size</code> keep prompts lean. Start with the three‑block baseline, measure token pressure and retrieval usefulness, and only customize where your workload proves it's needed. The payoff is an agent that remembers what matters, forgets what doesn't, and scales its recall gracefully as conversations (and stakes) grow.
          </p>

          <div className="blog-footer">
            <Link to="/blog" className="button">← Back to All Posts</Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default AIAgentMemory;
