# Stage: breakdown

Precondition: `docs/SPEC.md` is merged on `main`.

1. Split the spec into issues small enough for one PR each (aim for under ~400 changed lines). Order them by dependency; the first issue sets up the stack so CI runs real checks.
2. Create each issue with the Task template fields: Goal (link the spec section), Acceptance tests (given/when/then, at least one failure case each), Out of scope, Depends on.
   `gh issue create --title "<type>: <summary>" --body-file <file> --label ready` (use `blocked` instead of `ready` if it depends on an open issue).
3. Group issues by milestone: `gh api repos/{owner}/{repo}/milestones -f title="M1: ..."` then `--milestone`.
4. Post a comment on the merged spec PR listing the issues in build order.

An acceptance test must be checkable by code. "Works well" is not a test; "given a high-S signature, when normalized, then s <= n/2" is.
