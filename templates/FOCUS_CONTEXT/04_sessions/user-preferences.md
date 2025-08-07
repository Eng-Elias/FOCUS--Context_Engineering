# User Preferences

## Purpose
Stores individual user settings to customize the AI assistant's behavior and tool usage.

## Template Content

### Communication Style
- **Verbosity**: `{{VERBOSITY_LEVEL}}` - (e.g., Concise, Detailed, Balanced).
- **Suggestion Proactivity**: `{{PROACTIVITY_LEVEL}}` - (e.g., High - always suggest improvements; Low - only answer direct questions).

### Code Generation
- **Preferred Language**: `{{LANGUAGE}}` - (e.g., TypeScript, Python).
- **Testing Framework**: Automatically generate tests using `{{TESTING_FRAMEWORK}}` - (e.g., Jest, Pytest).
- **Generate Comments**: `{{BOOLEAN}}` - (e.g., true - add JSDoc comments to all new functions).

### Tool Preferences
- **Default Linter**: `{{LINTER_TOOL}}` - (e.g., ESLint).
- **Package Manager**: `{{PACKAGE_MANAGER}}` - (e.g., npm, yarn, pip).

## Validation
- [ ] Preferences are valid and supported by the AI assistant.
- [ ] Settings do not conflict with project-wide standards.

## Updates
- Update this file whenever you want to change how the AI assistant interacts with you.
- Frequency: As needed.
