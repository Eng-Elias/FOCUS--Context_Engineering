# Troubleshooting Guide

## Purpose
Provides a collection of common problems, their symptoms, and step-by-step solutions to accelerate issue resolution.

## Template Content

### Common Issues

**Problem**: `{{PROBLEM_1_TITLE}}` (e.g., Local development environment fails to start)
- **Symptoms**:
  - `docker-compose up` exits with an error code.
  - `localhost:3000` is unreachable.
- **Solution**:
  1. Ensure Docker Desktop is running.
  2. Run `docker-compose down -v` to remove old volumes.
  3. Delete the `node_modules` directory and run `npm install`.
  4. Try starting again with `docker-compose up`.

**Problem**: `{{PROBLEM_2_TITLE}}` (e.g., CI/CD pipeline fails on the 'test' step)
- **Symptoms**:
  - GitHub Actions workflow fails.
  - Test logs show `xyz` error.
- **Solution**:
  1. Run the tests locally with `npm test`.
  2. Check for missing environment variables in the CI configuration.

## Validation
- [ ] Solutions are easy to follow and effective.
- [ ] Symptoms are clearly described.
- [ ] The guide is updated with new issues as they are resolved.

## Updates
- Add a new entry after resolving a recurring or complex issue.
- Frequency: After a major incident or bug fix.
