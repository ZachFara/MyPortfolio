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
            As I argued in my earlier post on <a href="/blog/whyagents">AI Agents</a>, memory is the difference between a clever one‑off response and a system that actually learns you—your preferences, your past asks, which tools worked (and which didn't). For the high-level theory, see Duncan Calvert's <a href="https://duncancalvert.github.io/blog/2025/ai_agent_memory/" target="_blank" rel="noopener noreferrer">"AI Agent Memory"</a>. Here, we'll stay pragmatic: short‑term vs. long‑term memory and how LlamaIndex operationalizes both with a clean, composable API.
          </p>

          <p>
            Short‑term memory (STM) is the rolling context that keeps the model coherent right now. Long‑term memory (LTM) is slimmer, curated, and retrieved only when relevant. Something must decide what to keep, how to compress it, and when to bring it back. LlamaIndex's <strong>Memory</strong> object plus specialized memory blocks give you exactly that.
          </p>

          <hr />

          <h2>Memory</h2>

          <p>
            In LlamaIndex, <strong>Memory</strong> is the orchestrator. It owns the plain‑text rolling chat buffer and automatically flushes overflowed tokens into long‑term memory blocks once you exceed a global <strong>token_limit</strong>. If you don't attach any blocks, those tokens are simply dropped. You tune the short‑term buffer's protection with <strong>chat_history_token_ratio</strong> (e.g., 0.7 to reserve 70% of the context for the live chat) and set <strong>token_flush_size</strong> to control how many tokens get evicted at a time. Conversations are isolated under a <strong>session_id</strong>, and you can persist memory by pointing <strong>async_database_uri</strong> to a real database (instead of the default in‑memory SQLite). At inference time, <strong>Memory</strong> reassembles the prompt by merging the short‑term buffer with whatever long‑term content still fits under <strong>token_limit</strong>, injected via your chosen <strong>insert_method</strong> (commonly <strong>"system"</strong>). Conceptually: <strong>memory.put()</strong> logs new events; <strong>memory.get()</strong> returns the token‑bounded context the model will actually see.
          </p>

          <hr />

          <h2>StaticMemoryBlock</h2>

          <p>
            <strong>StaticMemoryBlock</strong> is your non‑negotiable, always‑on context: agent identity, safety policies, core constraints, or stable user profile facts. It never retrieves, ranks, or summarizes—it always gets appended to the LLM context on every call. You typically set <strong>priority=0</strong>, which effectively says: "don't ever truncate this." It's cheap, deterministic, and perfect for what you'd otherwise hard‑code into a system prompt.
          </p>

          <hr />

          <h2>FactExtractionMemoryBlock</h2>

          <p>
            <strong>FactExtractionMemoryBlock</strong> converts long chats into durable, compact facts. When short‑term memory overflows, this block asks an LLM (<strong>llm</strong>) to extract salient information—preferences, decisions, constraints, key entities—up to <strong>max_facts</strong>. If it overgrows, it summarizes itself to stay tight. The result is a lightweight, always‑useful layer you can inject almost every turn. The cost: extra LLM calls and lossy compression. In practice, give it <strong>priority=1</strong>, so it nearly always survives truncation right after your static policy block.
          </p>

          <hr />

          <h2>VectorMemoryBlock</h2>

          <p>
            <strong>VectorMemoryBlock</strong> is your semantic recall layer. Flushed messages are embedded (<strong>embed_model</strong>) and written to a vector store (<strong>vector_store</strong>). On each step, it can pull back the most relevant past snippets (<strong>similarity_top_k</strong>, <strong>retrieval_context_window</strong>) and optionally post‑process them. This is ideal when you need to reach way back ("remember that Athena query we debugged last month?") or when you want verbatim, auditable recovery. Because retrieved spans can be token‑heavy, assign it a lower priority (e.g., <strong>priority=2+</strong>) so it's trimmed first when the context gets tight.
          </p>

          <hr />

          <h2>Priority</h2>

          <p>
            The <strong>priority</strong> you assign to each block defines your degradation path under strict token budgets. A production‑ready default:
          </p>

          <ol>
            <li><strong>StaticMemoryBlock</strong> (<strong>priority=0</strong>) — identity/rules must never drop.</li>
            <li><strong>FactExtractionMemoryBlock</strong> (<strong>priority=1</strong>) — distilled, low‑cost facts that almost always help.</li>
            <li><strong>VectorMemoryBlock</strong> (<strong>priority=2+</strong>) — deep semantic recall included only when there's space or clear relevance.</li>
          </ol>

          <p>
            This mirrors the theory: guarantee invariant context, keep a compact evergreen factual spine, and fall back to heavy semantic retrieval when necessary. Need something bespoke (scores, counters, domain state)? Subclass <strong>BaseMemoryBlock</strong>—<strong>Memory</strong> will still flush, retrieve, and truncate it under the same rules.
          </p>

          <hr />

          <h2>Best Practices</h2>

          <p>
            Adopt the three‑layer stack with explicit priorities. Set a strict <strong>token_limit</strong>, keep <strong>chat_history_token_ratio</strong> high enough for live turns, and flush in coherent chunks (<strong>token_flush_size</strong>) so long‑term blocks receive meaningful spans. Bound <strong>max_facts</strong> so facts stay cheap to inject; tighten <strong>similarity_top_k</strong> / <strong>retrieval_context_window</strong> to keep vector recalls lean. Use separate <strong>session_id</strong>s and a persistent <strong>async_database_uri</strong> when you need continuity beyond process restarts. Prefer <strong>insert_method="system"</strong> for clean, deterministic prompt injection.
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
            Memory is what turns a clever LLM into a situated agent. LlamaIndex's <strong>Memory</strong> orchestrator plus a layered stack—<strong>StaticMemoryBlock (0)</strong> for invariants, <strong>FactExtractionMemoryBlock (1)</strong> for compact durable facts, and <strong>VectorMemoryBlock (2)</strong> for deep semantic recall—maps cleanly onto short‑ vs. long‑term memory theory while staying within strict token limits. Priorities give you a predictable degradation path; knobs like <strong>token_limit</strong>, <strong>chat_history_token_ratio</strong>, and <strong>token_flush_size</strong> keep prompts lean. Start with the three‑block baseline, measure token pressure and retrieval usefulness, and only customize where your workload proves it's needed. The payoff is an agent that remembers what matters, forgets what doesn't, and scales its recall gracefully as conversations (and stakes) grow.
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
