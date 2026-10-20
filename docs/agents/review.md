# Stage: review (one PR)

1. `gh pr view <n> --comments` and `gh pr diff <n>`. Read the linked issue and the relevant `docs/SPEC.md` section.
2. Count earlier review rounds on this PR. If two rounds already happened, do not review again: label `needs-human` and summarize the open disagreements.
3. Check `gh pr checks <n>`. A red CI is a finding by itself.
4. Review against the rubric in `AGENTS.md`. For each finding give file:line, what is wrong, a concrete failing scenario, and the fix. Skip style nits.
5. Submit one review as a comment (all agents share the human's GitHub account, and GitHub rejects approving your own PR). First line is the verdict:
   `gh pr review <n> --comment --body-file review.md` where the body starts with `Round N/2: APPROVE` or `Round N/2: CHANGES REQUESTED`.
6. Never push commits to the PR branch. The implementer fixes.
