# AGENTS.md

Single source of truth for every agent working in this repo (Codex reads this file, Claude Code reads it via `CLAUDE.md`). If you learn something that should change how agents work here, propose an edit to this file in your PR.

## Roles

| Stage | Who | Prompt | Output |
|---|---|---|---|
| Spec | Codex | `docs/agents/spec.md` | PR adding `docs/SPEC.md`, label `spec` |
| Breakdown | Codex | `docs/agents/breakdown.md` | Issues with acceptance tests, label `ready` |
| Implement | Claude Code | `docs/agents/implement.md` (`/work-issue <n>`) | One branch + PR per issue, label `in-review` |
| Review | Codex | `docs/agents/review.md` | PR review, max 2 rounds |
| Merge | Human | | Squash merge once CI is green |

The human routes work between agents. Do not start a stage you were not asked to start.

## Labels are state

- `spec`: spec PR open for comment. Merge = approval.
- `ready`: issue has acceptance tests and no unmet dependencies. Safe to pick up.
- `in-progress`: an agent is implementing it. One agent per issue.
- `in-review`: PR open, waiting for review.
- `needs-human`: blocked on a decision, or review hit the 2-round cap. Stop and say why in a comment.
- `blocked`: depends on another open issue (link it).

Move labels as you go: `gh issue edit <n> --add-label in-progress --remove-label ready`.

## Rules

1. **Tests first.** Every issue's acceptance tests become real tests in the PR. A PR without them is not done, regardless of how the code looks.
2. **CI is the gate.** The `ci` check must pass. Never disable, skip, or weaken a check or test to get green. If a check is wrong, say so in the PR and label `needs-human`.
3. **Scope.** Implement exactly the issue. Unrelated problems you notice go in a new issue, not this PR.
4. **Review cap.** Max 2 review rounds per PR. After round 2, remaining disagreements go to the human with label `needs-human`.
5. **Commits.** Conventional commits (`feat:`, `fix:`, `test:`, `docs:`, `chore:`, `refactor:`), small and frequent. Commits are GPG-signed; if signing fails, stop and tell the human instead of disabling it.
6. **No secrets** in code, logs, issues, or PR text.
7. **Search before claiming.** Verify library and API details against current docs before using them.

## Review rubric (in priority order)

1. Correctness: does it do what the issue says, including edge cases?
2. Matches the spec and the issue's acceptance tests.
3. Tests: do they test behavior, and would they fail if the code were wrong?
4. Security: input handling, secrets, auth, key material.
5. Simplicity: unnecessary abstraction or dependencies.

Style nits that a linter could catch are not review findings.

## Knowledge vault

Project note: `~/Documents/vault/pipeline/projects/<repo-name>.md`. Read it at session start. Pipeline-wide lessons: `~/Documents/vault/pipeline/learnings.md`. When something goes wrong in a way that will recur, append one line to `learnings.md` (date, repo, what happened, the rule that would have prevented it).

## Project specifics

<!-- Stack, commands, and conventions for this repo. Filled in by the spec stage. -->
