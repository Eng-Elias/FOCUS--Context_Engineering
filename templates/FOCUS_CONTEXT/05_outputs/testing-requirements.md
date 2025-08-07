# Testing Requirements

## Purpose
Specifies the types and minimum levels of testing required to ensure code quality and reliability.

## Template Content

### Test Coverage
- **Unit Tests**: `{{UNIT_TEST_COVERAGE}}`% minimum coverage for all new code.
- **Integration Tests**: Must cover all critical user paths and service interactions.
- **End-to-End (E2E) Tests**: Key user flows (e.g., registration, checkout) must be covered.

### Testing Frameworks
- **Unit/Integration**: `{{UNIT_TEST_FRAMEWORK}}` (e.g., Jest, Pytest).
- **E2E**: `{{E2E_TEST_FRAMEWORK}}` (e.g., Cypress, Playwright).

### How to Run Tests
- **Run all tests**: `npm test`
- **Run unit tests**: `npm run test:unit`
- **Run E2E tests**: `npm run test:e2e`

## Quality Assurance Checks
- **Static Analysis**: The linter (`{{LINTER_NAME}}`) must pass with no errors.
- **Vulnerability Scanning**: `{{VULNERABILITY_SCANNER}}` (e.g., Snyk, Dependabot) must report no critical vulnerabilities.

## Validation
- [ ] Code coverage meets the minimum requirement.
- [ ] E2E tests for critical paths are passing.
- [ ] The CI pipeline fails if any testing requirement is not met.

## Updates
- Update when new testing tools are adopted or coverage requirements change.
- Frequency: As needed.
