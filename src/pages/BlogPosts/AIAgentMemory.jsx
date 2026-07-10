import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CodeBlock from '../../components/CodeBlock';

const SECTIONS = [
  { id: 'structure', label: 'How to Structure Memory' },
  { id: 'memory', label: 'Memory' },
  { id: 'static-memory-block', label: 'StaticMemoryBlock' },
  { id: 'fact-extraction', label: 'FactExtractionMemoryBlock' },
  { id: 'vector-memory-block', label: 'VectorMemoryBlock' },
  { id: 'priority', label: 'Priority' },
  { id: 'best-practices', label: 'Best Practices' },
  { id: 'conclusion', label: 'Conclusion' },
];

const AIAgentMemory = () => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const OFFSET = 140; // topbar height + a little breathing room
    let raf = 0;

    const update = () => {
      raf = 0;
      const headings = SECTIONS
        .map((s) => document.getElementById(s.id))
        .filter(Boolean);
      if (!headings.length) return;

      // Near the page bottom the last section can't reach the offset line,
      // so force it active once we've scrolled to the end.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveId(headings[headings.length - 1].id);
        return;
      }

      // Otherwise: the last heading whose top has crossed the offset line.
      let current = headings[0].id;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= OFFSET) current = h.id;
        else break;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // A <base> tag makes bare "#id" links resolve against the base URL (the
  // homepage), so scroll manually and set the hash with an explicit path.
  const handleTocClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `${window.location.pathname}#${id}`);
    setActiveId(id);
  };

  return (
    <>
      <Helmet>
        <title>LlamaIndex Memory - Zachariah Farahany</title>
      </Helmet>

      <div className="blog-shell">
        <article className="blog-post">
        <header className="main">
          <h1>Agentic Memory from Llama Index</h1>
          <p className="blog-subtitle">How To Turn Theory Into A Practical Stack</p>
          
          <div className="blog-featured-image" style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              margin: '2rem auto 2.5rem',
              maxWidth: '90%'
            }}>
            <img 
              src="images/memory.png" 
              alt="Illustration of agent memory systems showing short-term and long-term memory components" 
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
          <h2 className="blog-title" id="structure">How to Structure Memory</h2>
          <p>
            As I argued in my earlier post on <Link to="/blog/why-do-we-need-agents">AI Agents</Link>, memory is the difference between a clever one‑off response and a system that actually learns you: your preferences, your past asks, which tools worked (and which didn't). For the high-level theory, see Duncan Calvert's <a href="https://duncancalvert.github.io/blog/2025/ai_agent_memory/" target="_blank" rel="noopener noreferrer">"AI Agent Memory"</a>. Here, we'll stay pragmatic: short‑term vs. long‑term memory and how LlamaIndex operationalizes both with a clean, composable API.
          </p>

          <p>
            Short‑term memory (STM) is the rolling context that keeps the model coherent right now. Long‑term memory (LTM) is slimmer, curated, and retrieved only when relevant. Something must decide what to keep, how to compress it, and when to bring it back. LlamaIndex's <code>Memory</code> object plus specialized memory blocks give you exactly that.
          </p>

          <hr />

          <h2 id="memory">Memory</h2>

          <p>
            In LlamaIndex, <code>Memory</code> is the orchestrator. It owns the plain‑text rolling chat buffer and automatically flushes overflowed tokens into long‑term memory blocks once you exceed a global <code>token_limit</code>. If you don't attach any blocks, those tokens are simply dropped. You tune the short‑term buffer's protection with <code>chat_history_token_ratio</code> (e.g., 0.7 to reserve 70% of the context for the live chat) and set <code>token_flush_size</code> to control how many tokens get evicted at a time. Conversations are isolated under a <code>session_id</code>, and you can persist memory by pointing <code>async_database_uri</code> to a real database (instead of the default in‑memory SQLite). At inference time, <code>Memory</code> reassembles the prompt by merging the short‑term buffer with whatever long‑term content still fits under <code>token_limit</code>, injected via your chosen <code>insert_method</code> (commonly <code>"system"</code>). Conceptually: <code>memory.put()</code> logs new events; <code>memory.get()</code> returns the token‑bounded context the model will actually see.
          </p>

          <hr />

          <h2 id="static-memory-block">StaticMemoryBlock</h2>

          <p>
            <code>StaticMemoryBlock</code> is your non‑negotiable, always‑on context: agent identity, safety policies, core constraints, or stable user profile facts. It never retrieves, ranks, or summarizes; it always gets appended to the LLM context on every call. You typically set <code>priority=0</code>, which effectively says: "don't ever truncate this." It's cheap, deterministic, and perfect for what you'd otherwise hard‑code into a system prompt.
          </p>

          <hr />

          <h2 id="fact-extraction">FactExtractionMemoryBlock</h2>

          <p>
            <code>FactExtractionMemoryBlock</code> converts long chats into durable, compact facts. When short‑term memory overflows, this block asks an LLM (<code>llm</code>) to extract salient information: preferences, decisions, constraints, key entities, up to <code>max_facts</code>. If it overgrows, it summarizes itself to stay tight. The result is a lightweight, always‑useful layer you can inject almost every turn. The cost: extra LLM calls and lossy compression. In practice, give it <code>priority=1</code>, so it nearly always survives truncation right after your static policy block.
          </p>

          <hr />

          <h2 id="vector-memory-block">VectorMemoryBlock</h2>

          <p>
            <code>VectorMemoryBlock</code> is your semantic recall layer. Flushed messages are embedded (<code>embed_model</code>) and written to a vector store (<code>vector_store</code>). On each step, it can pull back the most relevant past snippets (<code>similarity_top_k</code>, <code>retrieval_context_window</code>) and optionally post‑process them. This is ideal when you need to reach way back ("remember that Athena query we debugged last month?") or when you want verbatim, auditable recovery. Because retrieved spans can be token‑heavy, assign it a lower priority (e.g., <code>priority=2+</code>) so it's trimmed first when the context gets tight.
          </p>

          <hr />

          <h2 id="priority">Priority</h2>

          <p>
            The <code>priority</code> you assign to each block defines your degradation path under strict token budgets. A production‑ready default:
          </p>

          <ol>
            <li><code>StaticMemoryBlock</code> (<code>priority=0</code>): identity/rules must never drop.</li>
            <li><code>FactExtractionMemoryBlock</code> (<code>priority=1</code>): distilled, low‑cost facts that almost always help.</li>
            <li><code>VectorMemoryBlock</code> (<code>priority=2+</code>): deep semantic recall included only when there's space or clear relevance.</li>
          </ol>

          <p>
            This mirrors the theory: guarantee invariant context, keep a compact evergreen factual spine, and fall back to heavy semantic retrieval when necessary. Need something bespoke (scores, counters, domain state)? Subclass <code>BaseMemoryBlock</code> and <code>Memory</code> will still flush, retrieve, and truncate it under the same rules.
          </p>

          <hr />

          <h2 id="best-practices">Best Practices</h2>

          <p>
            Adopt the three‑layer stack with explicit priorities. Set a strict <code>token_limit</code>, keep <code>chat_history_token_ratio</code> high enough for live turns, and flush in coherent chunks (<code>token_flush_size</code>) so long‑term blocks receive meaningful spans. Bound <code>max_facts</code> so facts stay cheap to inject; tighten <code>similarity_top_k</code> / <code>retrieval_context_window</code> to keep vector recalls lean. Use separate <code>session_id</code>s and a persistent <code>async_database_uri</code> when you need continuity beyond process restarts. Prefer <code>insert_method="system"</code> for clean, deterministic prompt injection.
          </p>

          <CodeBlock language="python" code={`from llama_index.core.memory import (
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
`} />

          <h2 id="conclusion">Conclusion</h2>

          <p>
            Memory is what turns a clever LLM into a situated agent. LlamaIndex's <code>Memory</code> orchestrator plus a layered stack of <code>StaticMemoryBlock (0)</code> for invariants, <code>FactExtractionMemoryBlock (1)</code> for compact durable facts, and <code>VectorMemoryBlock (2)</code> for deep semantic recall maps cleanly onto short‑ vs. long‑term memory theory while staying within strict token limits. Priorities give you a predictable degradation path; knobs like <code>token_limit</code>, <code>chat_history_token_ratio</code>, and <code>token_flush_size</code> keep prompts lean. Start with the three‑block baseline, measure token pressure and retrieval usefulness, and only customize where your workload proves it's needed. The payoff is an agent that remembers what matters, forgets what doesn't, and scales its recall gracefully as conversations (and stakes) grow.
          </p>

          <div className="blog-image-citation" style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#666', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
            <p>
              <strong>Image credit:</strong> Created using OpenAI image generation services.
            </p>
          </div>

          <div className="blog-footer">
            <Link to="/blog" className="button">← Back to All Posts</Link>
          </div>
        </div>
        </article>

        <aside className="blog-toc" aria-label="Table of contents">
          <p className="blog-toc__label">On this page</p>
          <nav>
            <ol>
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} onClick={(e) => handleTocClick(e, s.id)} className={activeId === s.id ? 'is-active' : undefined}>{s.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default AIAgentMemory;
