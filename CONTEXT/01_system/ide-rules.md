# IDE-Specific Behavior Rules

## Purpose
Configures the AI assistant's behavior within the IDE to align with development workflows and toolchain integrations.

## Template Content

### Code Generation
- **Language Style**: Adhere to the coding standards defined in `domain/standards/coding-standards.md`.
- **Framework Usage**: Generate code that is idiomatic for `{{FRAMEWORK_NAME}}`.
- **Dependency Management**: Add new dependencies to `{{DEPENDENCY_FILE}}` (e.g., `package.json`, `requirements.txt`) when installing new packages.

### Navigation & Awareness
- **File Focus**: Prioritize providing context from currently open/active files.
- **Symbol Recognition**: Use the IDE's symbol index to navigate to definitions and references.
- **Workspace Awareness**: Be aware of the project structure defined in `domain/codebase/project-tree.md`.

### Quality Assurance
- **Linter Integration**: Automatically check generated code against the project's linter configuration (`{{LINTER_CONFIG_FILE}}`).
- **Test Generation**: When creating new features, suggest corresponding unit tests based on `outputs/testing-requirements.md`.
- **Refactoring**: Propose refactoring opportunities for code that violates DRY or SOLID principles.

## Validation
- [ ] Code generation rules match the project's stack.
- [ ] Navigation instructions are compatible with the IDE's features.
- [ ] QA checks are integrated with the existing toolchain.

## Updates
- Update when the IDE, extensions, or development toolchain changes.
- Frequency: As needed.
