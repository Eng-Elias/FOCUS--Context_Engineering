# Code Review Checklists

## Purpose
Provides a consistent checklist for pull request (PR) authors and reviewers to ensure quality, consistency, and completeness.

## Template Content

### For the PR Author
- [ ] **Self-Reviewed**: I have reviewed my own code for errors and clarity.
- [ ] **Title & Description**: The PR has a clear title and a description of the changes.
- [ ] **Tests Added**: I have added or updated tests that cover the changes.
- [ ] **Documentation Updated**: I have updated relevant documentation.
- [ ] **Manual Testing**: I have manually tested the changes in a development environment.

### For the Reviewer
- **Functionality**
  - [ ] Does the code meet the requirements of the ticket/spec?
  - [ ] Are there any obvious bugs or edge cases missed?
- **Readability & Style**
  - [ ] Does the code adhere to the `coding-standards.md`?
  - [ ] Is the code clear, concise, and easy to understand?
- **Architecture & Design**
  - [ ] Does the code follow established architectural patterns?
  - [ ] Are there any performance, security, or scalability concerns?
- **Tests**
  - [ ] Are the tests sufficient and meaningful?

## Validation
- [ ] A PR template is configured in the repository to include these checklists.
- [ ] Reviewers do not approve PRs that have not completed the checklist.

## Updates
- Update the checklist when new quality standards or processes are introduced.
- Frequency: Quarterly or as needed.
