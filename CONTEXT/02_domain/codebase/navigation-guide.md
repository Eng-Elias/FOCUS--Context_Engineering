# Codebase Navigation Guide

## Purpose
Provides patterns and starting points for locating and understanding code related to common development tasks.

## Template Content

### Common Task Workflows
- **Adding a new API endpoint**:
  1. Define the route in `src/api/routes/{{MODULE_NAME}}.js`.
  2. Implement the controller in `src/api/controllers/{{MODULE_NAME}}.js`.
  3. Add business logic in `src/core/{{MODULE_NAME}}.js`.
- **Creating a new UI component**:
  1. Create the component file in `src/components/{{COMPONENT_NAME}}/`.
  2. Add stories to `src/components/{{COMPONENT_NAME}}/{{COMPONENT_NAME}}.stories.js`.
  3. Export the component from `src/components/index.js`.

### Key File Locator
- **Database Schema**: `prisma/schema.prisma`
- **API Definitions (OpenAPI)**: `docs/api-spec.yml`
- **CI/CD Pipeline**: `.github/workflows/main.yml`
- **Docker Configuration**: `docker-compose.yml` and `Dockerfile`

## Validation
- [ ] Common workflows are up-to-date.
- [ ] Paths to key configuration files are correct.

## Updates
- Update when development workflows or key file locations change.
- Frequency: As needed.
