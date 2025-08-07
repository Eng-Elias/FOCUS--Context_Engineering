# Coding Standards

## Purpose
Defines the coding style, formatting, and patterns to be used in the codebase, ensuring consistency and readability.

## Template Content

### Formatting
- **Style Guide**: `{{STYLE_GUIDE_NAME}}` - e.g., Airbnb JavaScript Style Guide, PEP 8 for Python.
- **Linter Configuration**: The authoritative source is the `.eslintrc.js` / `pyproject.toml` file.
- **Max Line Length**: `{{MAX_LINE_LENGTH}}` characters.

### Naming Conventions
- **Variables**: `camelCase` for `{{TECHNOLOGY_1}}`, `snake_case` for `{{TECHNOLOGY_2}}`.
- **Functions**: `camelCase`.
- **Classes**: `PascalCase`.
- **Constants**: `UPPER_SNAKE_CASE`.

### Key Patterns
- **Asynchronous Code**: Use `async/await` over promises/callbacks.
- **Error Handling**: Use `try/catch` blocks in async functions. Return error responses consistently.
- **Modularity**: Functions should be small and have a single responsibility.

## Validation
- [ ] A linter is configured and runs automatically in CI.
- [ ] Naming conventions are consistently applied.
- [ ] Key patterns are understood and used by the team.

## Updates
- Update when the team agrees on a new standard or a linter rule is changed.
- Frequency: As needed, by team consensus.
