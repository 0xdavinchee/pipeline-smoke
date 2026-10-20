# Stage: implement (one issue)

1. `gh issue view <n> --comments`. If it is not labeled `ready`, stop and say why.
2. Claim it: `gh issue edit <n> --add-label in-progress --remove-label ready`.
3. Work in a worktree so other agents can run in parallel:
   `git fetch origin && git worktree add .worktrees/issue-<n> -b issue-<n>-<slug> origin/main`
4. Write the acceptance tests first and watch them fail. Then implement until they pass. Commit in small conventional commits.
5. Run the same checks CI runs (see "Project specifics" in `AGENTS.md`) and make them pass locally.
6. Push and open the PR using the template: `gh pr create --fill --label in-review` with `Closes #<n>` in the body. Move the issue label from `in-progress` to `in-review`.
7. Report the PR URL and anything the reviewer should look at closely.

When addressing review: fix what is right, reply to each comment, push. If you disagree, say why once; do not loop.
If you get stuck on a decision the spec does not answer, comment on the issue, label `needs-human`, and stop.
