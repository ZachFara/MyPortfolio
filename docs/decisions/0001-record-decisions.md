# 0001. Record decisions as numbered files

- Status: accepted
- Date: 2026-11-10

## Context

Several agent sessions work on this repo, and none of them remembers the others. A choice that
lives only in a chat log gets made again, or quietly reversed.

## Decision

Every decision about how the system is built goes in a short numbered record in
`docs/decisions/NNNN-kebab-title.md` with sections for Context, Decision, and Consequences. A new
decision that replaces an old one gets a new record, and the old record's status becomes
`superseded by NNNN`. The layout check only allows `NNNN-*.md` files in this directory.

## Consequences

- Records are the source of truth for _how_ the system is built, and `DESIGN.md` is the source of
  truth for _what_ it is.
- Changing a recorded decision means proposing it in `PROGRESS.md` and then adding a record.
