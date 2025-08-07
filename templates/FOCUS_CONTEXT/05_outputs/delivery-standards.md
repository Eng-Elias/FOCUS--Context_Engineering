# Delivery Standards

## Purpose
Defines the requirements that must be met for code to be considered "done" and ready for deployment.

## Template Content

### Definition of Done (DoD)
- **Code Complete**: All required functionality is implemented as per the feature specification.
- **Tests Pass**: All unit, integration, and end-to-end tests pass in the CI pipeline.
- **Code Reviewed**: The pull request has been approved by at least `{{NUMBER_OF_REVIEWERS}}` peer(s).
- **Documentation Updated**: All relevant documentation (code comments, READMEs, wiki) is up-to-date.
- **No High-Priority Bugs**: There are no known critical or high-priority bugs related to the feature.

### Release Process
- **Branching Strategy**: All work is done on feature branches, merged to `develop`, and then to `main` for release.
- **Versioning**: The project follows Semantic Versioning (`MAJOR.MINOR.PATCH`).
- **Release Notes**: A summary of changes is included with each new release tag.

## Validation
- [ ] The Definition of Done is checked for every pull request.
- [ ] The branching strategy is followed.
- [ ] Releases are versioned correctly.

## Updates
- Update the Definition of Done when the team agrees to add or remove a quality gate.
- Frequency: Quarterly review or as needed.
