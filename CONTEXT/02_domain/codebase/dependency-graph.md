# Dependency Graph

## Purpose
Outlines the key internal and external dependencies to manage complexity and understand the impact of changes.

## Template Content

### Internal Dependencies
- **`core` module**: Has no dependencies on other internal modules.
- **`api` module**: Depends on the `core` module.
- **`services` module**: Depends on the `core` module.

### External Dependencies
- **`{{PACKAGE_MANAGER}}`**: `{{DEPENDENCY_FILE}}` (e.g., `package.json`, `pom.xml`)
- **Key Libraries**:
  - `{{LIBRARY_1}}`: `{{LIBRARY_1_PURPOSE}}` (e.g., Prisma: ORM for database access).
  - `{{LIBRARY_2}}`: `{{LIBRARY_2_PURPOSE}}` (e.g., Stripe Node.js: Payment processing).
  - `{{LIBRARY_3}}`: `{{LIBRARY_3_PURPOSE}}` (e.g., Jest: Testing framework).

### Dependency Rules
- **Rule 1**: The `core` module must not depend on `api` or `services` (Dependency Inversion Principle).
- **Rule 2**: Use `{{DEPENDENCY_UPDATE_TOOL}}` (e.g., Dependabot, Snyk) to manage security vulnerabilities.

## Validation
- [ ] The dependency flow is acyclic.
- [ ] Key external libraries and their purposes are listed.
- [ ] Dependency rules are being followed.

## Updates
- Update when new major dependencies are added or dependency rules change.
- Frequency: As needed.
