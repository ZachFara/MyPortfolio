import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import WORK from '../data/workItems';
import repoUpdates from '../data/generated/github-repo-updates.json';

const FILTERS = ['All', ...Array.from(new Set(WORK.map((w) => w.cat)))];

const formatUpdatedDate = (updatedAt) => {
  if (!updatedAt) return null;

  const parsed = new Date(updatedAt);
  if (Number.isNaN(parsed.getTime())) return null;

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(parsed);
};

const LINK_LABELS = [
  ['github', 'GitHub'],
  ['paper', 'Paper'],
  ['blog', 'Blog post'],
  ['demo', 'Live demo'],
];

const Work = () => {
  const [filter, setFilter] = useState('All');
  const [imageLoadErrors, setImageLoadErrors] = useState({});
  const items = useMemo(
    () => (filter === 'All' ? WORK : WORK.filter((w) => w.cat === filter)),
    [filter],
  );
  const onImageError = (workId) => {
    setImageLoadErrors((prev) => ({ ...prev, [workId]: true }));
  };

  return (
    <>
      <Helmet>
        <title>Work - Zachariah Farahany</title>
      </Helmet>

      <section className="work-page">
        <div className="wrap">
          <header className="page-head">
            <div className="page-head__row">
              <span className="page-head__idx">02 / Work</span>
            </div>
            <h1>Selected Work</h1>
            <p className="page-head__desc">
              Research, production systems, and things built to answer a question. Each one ships with its code.
            </p>
          </header>

          <div className="filters" role="tablist" aria-label="Filter work by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={`chip${filter === f ? ' chip--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
                {f !== 'All' && (
                  <span className="chip__count">{WORK.filter((w) => w.cat === f).length}</span>
                )}
              </button>
            ))}
          </div>

          <ol className="index work-index">
            {items.map((p) => (
              <li className="index__row" key={p.num}>
                <span className="index__num">{p.num}</span>
                <div className="index__body">
                  <span className="index__cat">{p.cat}</span>
                  <a href={p.links.github} target="_blank" rel="noopener noreferrer">
                    <h2 className="index__title">{p.title}</h2>
                  </a>
                  <p className="index__desc">{p.desc}</p>
                  <span className="index__tech">{p.tech}</span>
                  <div className="work-repo">
                    <span className="work-repo__stat">{p.lang}</span>
                    {p.repo && repoUpdates[p.repo]?.updatedAt && (
                      <span className="work-repo__updated">
                        Updated {formatUpdatedDate(repoUpdates[p.repo].updatedAt)}
                      </span>
                    )}
                  </div>
                  <div className="work-links">
                    {LINK_LABELS.map(([key, label]) => {
                      const href = p.links[key];
                      if (!href) return null;
                      return (
                        <a key={key} className="work-link" href={href} target="_blank" rel="noopener noreferrer">
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className={`index__media${p.image && !imageLoadErrors[p.num] ? '' : ' index__media--ph'}`} aria-hidden="true">
                  {p.image && !imageLoadErrors[p.num] ? (
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      onError={() => onImageError(p.num)}
                    />
                  ) : (
                    <span className="index__media-num">{p.num}</span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default Work;
