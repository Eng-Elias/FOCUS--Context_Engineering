# File Naming Conventions

## Purpose
Ensures that files are named consistently and predictably across the project, making the codebase easier to navigate.

## Template Content

### General Rules
- **Case**: Use `underline_case` for all filenames, unless a framework specifies otherwise.
- **Separators**: Use underscores (`_`) instead of hyphens (`-`) or spaces.
- **Clarity**: Names should clearly describe the file's content and purpose.

### Technology-Specific Conventions
- **React Components**: `ComponentName.jsx`, `ComponentName.module.css`.
- **Vue Components**: `ComponentName.vue`.
- **Angular**: `component-name.component.ts`, `component-name.component.html`.
- **Tests**: `{{FILENAME}}.test.js` or `{{FILENAME}}.spec.js`.
- **Styles**: `{{COMPONENT_NAME}}.styles.scss`.

### Examples
- **Good**:
  - `user_profile.jsx`
  - `api_client.js`
  - `auth_controller.js`
  - `user_profile.test.js`
- **Bad**:
  - `UserProfile.js` (incorrect case)
  - `api_client.js` (incorrect separator)
  - `utils.js` (too generic)

## Validation
- [ ] All new files adhere to the naming conventions.
- [ ] Framework-specific conventions are followed correctly.
- [ ] File names are descriptive.

## Updates
- Update if a new technology with different conventions is introduced.
- Frequency: As needed.
