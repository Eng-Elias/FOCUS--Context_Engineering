# Project Tree

## Purpose
Provides a high-level overview of the repository's directory structure, highlighting key folders and their purposes.

## Template Content

### Root Directory Structure
```
/ ({{PROJECT_ROOT}})
├── .github/         # CI/CD workflows
├── docs/            # Project documentation
├── src/             # Source code
│   ├── api/         # API controllers/routers
│   ├── components/  # Reusable UI components (Frontend)
│   ├── core/        # Core business logic
│   ├── services/    # External service integrations
│   └── utils/       # Shared utility functions
├── tests/           # Automated tests
├── .env.example     # Environment variable template
├── .gitignore       # Git ignore rules
├── package.json     # Project dependencies and scripts
└── README.md        # Project overview
```

### Key Directory Notes
- **`src/core`**: Contains the primary business logic. Changes here are high-impact.
- **`src/api`**: Defines the public-facing API contracts.
- **`src/components`**: Houses reusable components for the `{{FRONTEND_FRAMEWORK}}` framework.

## Validation
- [ ] The tree accurately reflects the current project structure.
- [ ] Key directories have clear, concise descriptions.
- [ ] The structure aligns with framework-specific conventions (e.g., Next.js `app` dir).

## Updates
- Update when the directory structure is significantly refactored.
- Frequency: As needed, after major refactoring.
