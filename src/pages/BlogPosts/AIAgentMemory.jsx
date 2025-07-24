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
              background-color: #f6f8fa;
              border-radius: 6px;
              padding: 16px;
              margin: 20px 0;
              border: 1px solid #ddd;
              white-space: pre;
              overflow-x: auto;
            }
            .code-cell pre {
              margin: 0;
              white-space: pre !important;
              overflow-x: auto;
              font-family: monospace;
            }
            .code-cell code {
              display: block;
              line-height: 1.5;
              white-space: pre !important;
            }
            h2.blog-title {
              font-size: 1.5rem;
              line-height: 1.3;
              margin-bottom: 1rem;
            }
            
            /* Python Syntax Highlighting */
            .token.comment { color: #6a737d; }
            .token.keyword { color: #d73a49; }
            .token.string { color: #032f62; }
            .token.number { color: #005cc5; }
            .token.function { color: #6f42c1; }
            .token.class-name { color: #6f42c1; }
            .token.punctuation { color: #24292e; }
            .token.operator { color: #d73a49; }
            .token.builtin { color: #6f42c1; }
            .token.property { color: #005cc5; }
            .token.parameter { color: #24292e; }
            .python-code .parameter-name { color: #e36209; font-weight: bold; }
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
            As I argued in my earlier post on <a href="/blog/whyagents">AI Agents</a>, <strong>memory is the difference between a clever one‑off response and a system that actually learns you</strong>—your preferences, your past asks, which tools worked (and which didn't). For the high-level theory, see Duncan Calvert's <a href="https://duncancalvert.github.io/blog/2025/ai_agent_memory/" target="_blank" rel="noopener noreferrer">"AI Agent Memory"</a>. Here, we'll stay pragmatic: <strong>short‑term vs. long‑term memory</strong> and how <strong>LlamaIndex</strong> operationalizes both with a clean, composable API.
          </p>

          <p>
            Short‑term memory (STM) is the rolling context that keeps the model coherent <strong>right now</strong>. Long‑term memory (LTM) is slimmer, curated, and retrieved <strong>only when relevant</strong>. Something must decide what to keep, how to compress it, and when to bring it back. LlamaIndex's <code>Memory</code> object plus specialized <strong>memory blocks</strong> give you exactly that.
          </p>

          <hr />

          <h2>Memory</h2>

          <p>
            In LlamaIndex, <strong><code>Memory</code></strong> is the orchestrator. It owns the <strong>plain‑text rolling chat buffer</strong> and automatically <strong>flushes</strong> overflowed tokens into long‑term memory blocks once you exceed a global <code>token_limit</code>. If you don't attach any blocks, those tokens are simply dropped. You tune the short‑term buffer's protection with <code>chat_history_token_ratio</code> (e.g., 0.7 to reserve 70% of the context for the live chat) and set <code>token_flush_size</code> to control how many tokens get evicted at a time. Conversations are isolated under a <code>session_id</code>, and you can persist memory by pointing <code>async_database_uri</code> to a real database (instead of the default in‑memory SQLite). At inference time, <code>Memory</code> reassembles the prompt by merging the short‑term buffer with whatever long‑term content still fits under <code>token_limit</code>, injected via your chosen <code>insert_method</code> (commonly <code>"system"</code>). Conceptually: <code>memory.put()</code> logs new events; <code>memory.get()</code> returns the token‑bounded context the model will actually see.
          </p>

          <hr />

          <h2>StaticMemoryBlock</h2>

          <p>
            <strong><code>StaticMemoryBlock</code></strong> is your non‑negotiable, always‑on context: agent identity, safety policies, core constraints, or stable user profile facts. It never retrieves, ranks, or summarizes—it <strong>always</strong> gets appended to the LLM context on every call. You typically set <code>priority=0</code>, which effectively says: "don't ever truncate this." It's cheap, deterministic, and perfect for what you'd otherwise hard‑code into a system prompt.
          </p>

          <hr />

          <h2>FactExtractionMemoryBlock</h2>

          <p>
            <strong><code>FactExtractionMemoryBlock</code></strong> converts long chats into <strong>durable, compact facts</strong>. When short‑term memory overflows, this block asks an LLM (<code>llm</code>) to extract salient information—preferences, decisions, constraints, key entities—up to <code>max_facts</code>. If it overgrows, it summarizes itself to stay tight. The result is a lightweight, always‑useful layer you can inject almost every turn. The cost: extra LLM calls and lossy compression. In practice, give it <strong><code>priority=1</code></strong>, so it nearly always survives truncation right after your static policy block.
          </p>

          <hr />

          <h2>VectorMemoryBlock</h2>

          <p>
            <strong><code>VectorMemoryBlock</code></strong> is your <strong>semantic recall</strong> layer. Flushed messages are embedded (<code>embed_model</code>) and written to a vector store (<code>vector_store</code>). On each step, it can pull back the most relevant past snippets (<code>similarity_top_k</code>, <code>retrieval_context_window</code>) and optionally post‑process them. This is ideal when you need to reach way back ("remember that Athena query we debugged last month?") or when you want verbatim, auditable recovery. Because retrieved spans can be token‑heavy, assign it a <strong>lower priority</strong> (e.g., <code>priority=2+</code>) so it's trimmed first when the context gets tight.
          </p>

          <hr />

          <h2>Priority</h2>

          <p>
            The <strong><code>priority</code></strong> you assign to each block defines your <strong>degradation path</strong> under strict token budgets. A production‑ready default:
          </p>

          <ol>
            <li><strong><code>StaticMemoryBlock</code> (<code>priority=0</code>)</strong> — identity/rules must never drop.</li>
            <li><strong><code>FactExtractionMemoryBlock</code> (<code>priority=1</code>)</strong> — distilled, low‑cost facts that almost always help.</li>
            <li><strong><code>VectorMemoryBlock</code> (<code>priority=2+</code>)</strong> — deep semantic recall included only when there's space or clear relevance.</li>
          </ol>

          <p>
            This mirrors the theory: guarantee invariant context, keep a compact evergreen factual spine, and fall back to heavy semantic retrieval when necessary. Need something bespoke (scores, counters, domain state)? Subclass <code>BaseMemoryBlock</code>—<code>Memory</code> will still flush, retrieve, and truncate it under the same rules.
          </p>

          <hr />

          <h2>Best Practices</h2>

          <p>
            Adopt the <strong>three‑layer stack</strong> with explicit priorities. Set a strict <code>token_limit</code>, keep <code>chat_history_token_ratio</code> high enough for live turns, and <strong>flush in coherent chunks</strong> (<code>token_flush_size</code>) so long‑term blocks receive meaningful spans. Bound <code>max_facts</code> so facts stay cheap to inject; tighten <code>similarity_top_k</code> / <code>retrieval_context_window</code> to keep vector recalls lean. Use separate <code>session_id</code>s and a persistent <code>async_database_uri</code> when you need continuity beyond process restarts. Prefer <code>insert_method="system"</code> for clean, deterministic prompt injection.
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
            Memory is what turns a clever LLM into a <strong>situated agent</strong>. LlamaIndex's <code>Memory</code> orchestrator plus a layered stack—<strong><code>StaticMemoryBlock (0)</code> for invariants, <code>FactExtractionMemoryBlock (1)</code> for compact durable facts, and <code>VectorMemoryBlock (2)</code> for deep semantic recall</strong>—maps cleanly onto short‑ vs. long‑term memory theory while staying within strict token limits. Priorities give you a predictable degradation path; knobs like <code>token_limit</code>, <code>chat_history_token_ratio</code>, and <code>token_flush_size</code> keep prompts lean. Start with the three‑block baseline, measure token pressure and retrieval usefulness, and only customize where your workload proves it's needed. The payoff is an agent that remembers what matters, forgets what doesn't, and scales its recall gracefully as conversations (and stakes) grow.
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
