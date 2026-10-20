# Stage: spec

Input: the bet brief in the vault project note (`~/Documents/vault/pipeline/projects/<repo>.md`) and any notes the human gives you.

1. Read the project note and `AGENTS.md`.
2. Write `docs/SPEC.md` with these sections: Problem and user, Success criteria (measurable), Scope / Non-goals, Architecture (units, each with one job and its interface), Data and external dependencies (verify versions and APIs against current docs; cite links), Testing strategy (what CI runs), Milestones (each shippable), Risks and cut lines.
3. Fill in the "Project specifics" section of `AGENTS.md`: stack, setup command, test command, conventions.
4. Commit on branch `spec`, open a PR titled `docs: spec` with label `spec`. If a `spec` PR already exists, push to it instead.
5. When the human or another agent leaves review comments, revise and reply to each comment with what you changed or why you did not.

Do not write implementation code in this stage. Merge is the approval signal and only the human merges.
