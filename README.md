# FOCUS Framework
**Framework for Optimized Codebase Understanding & Synthesis**

## Overview
FOCUS is a modular context engineering framework designed to enhance the performance of AI assistants in software development. It provides a structured set of templates to build a comprehensive and token-efficient knowledge base for any codebase.

By systematically capturing system, domain, task, session, and output context, FOCUS ensures that AI assistants have the necessary information to understand complex projects, follow best practices, and generate high-quality, relevant code.

## Quick Start

1.  **Install the CLI**: Use `npm install -g` to make the `focus-ce` command available globally.
2.  **Navigate to Your Project**: Open your terminal in the root directory of the project you want to document.
3.  **Run the `init` Command**:
    ```bash
    focus-ce init
    ```
4.  **Answer the Prompts**: The interactive CLI will guide you through setting up your project name, type, and architecture.
5.  **Review and Customize**: The `FOCUS_CONTEXT` directory will be created with five core markdown files. Review and customize them to fit your project's specific needs.
6.  **Configure Your AI**: Point your AI assistant to use the `FOCUS_CONTEXT` directory as its primary knowledge source.

## Framework Structure
The FOCUS framework has been simplified into five core documents, each designed to capture a critical aspect of your project's context.

- **`01_System_and_Interaction.md`**: Defines the AI's persona, interaction guidelines, and safety constraints.
- **`02_Domain_Overview.md`**: Provides a comprehensive overview of the project, including its architecture, data models, and technical decisions.
- **`03_Standards_and_Conventions.md`**: Outlines coding standards, API conventions, and documentation styles.
- **`04_Tasks_and_Workflow.md`**: Describes current objectives, delivery standards, and testing requirements.
- **`05_User_and_Session.md`**: Captures user preferences and session-specific context.

## Customization Guide

1.  **Customize FOCUS context**: update the `FOCUS_CONTEXT` directory with your project's specific context.
2.  **Adapt to Your Stack**: Pay special attention to the "Architecture Notes" and "Technology Adaptations" sections in each template to tailor them to your specific frameworks and platforms.
3.  **Delete What You Don't Need**: The framework is modular. If a template is not relevant to your project (e.g., `serverless` notes in a monolithic app), remove it.

## Best Practices

- **Keep it Concise**: The goal is to be token-efficient. Use bullet points and avoid long paragraphs.
- **Automate Updates**: Use CI/CD hooks to remind developers to update context files when relevant code changes.
- **Link, Don't Duplicate**: Where possible, link to existing diagrams, documentation, or configuration files rather than duplicating their content.

## Token Optimization

- **Hierarchical Loading**: Instruct your AI to load Layer 1 (System) first, then Layer 2 (Domain), and so on. Task-specific context should be loaded last.
- **Relevance Filtering**: For a specific task, load only the relevant module maps or architecture diagrams.
- **Dynamic Updates**: The AI should be prompted to refresh its understanding of a file if the `last modified` timestamp has changed since the last interaction.

## Integration Examples

- **IDE Integration**: Use the `ide-rules.md` to configure how your AI interacts with your development environment, such as automatically following linter rules.
- **CI/CD Integration**: Use scripts in your CI pipeline to validate that context files (e.g., `troubleshooting.md`) are updated as part of the incident response process.

## Maintenance Guide

- **Regular Reviews**: Schedule a quarterly review of the entire `FOCUS_CONTEXT` directory to prune outdated information.
- **Update Triggers**: Follow the "Updates" section in each template. These provide clear guidelines on when a file should be modified.

## FOCUS CLI (`focus-ce`)

The FOCUS Framework includes a powerful command-line tool, `focus-ce`, to help you quickly set up and manage the FOCUS context structure in any project.

### Installation

To use the CLI, you need to have Node.js and npm installed. Clone the repository and install the dependencies:

```bash
npm install
```

To make the `focus-ce` command available globally, you can link the package:

```bash
npm link
```

### Usage

Once installed, you can run `focus-ce` from any project directory.

#### Interactive Initialization

For a guided setup, simply run the `init` command without any options:

```bash
focus-ce init
```

This will launch an interactive prompt to customize the project name, type, and architecture.

If a `FOCUS_CONTEXT` directory already exists, you will be prompted to confirm before it is overwritten.

#### Command-Line Options

You can also use command-line flags for a non-interactive setup:

```bash
focus-ce init --name "My Awesome Project" --type "Web App" --arch "Monolithic"
```

#### Available Commands & Options

*   **`init`**: Initializes the FOCUS context.
    *   `--name <name>`: Specify the project name.
    *   `--type <type>`: Specify the project type (e.g., "Web App", "API").
    *   `--arch <arch>`: Specify the project architecture (e.g., "Monolithic", "Microservices").
    *   `--no-smart-fill`: Disable auto-population of templates.
*   **`validate`**: Checks if the `FOCUS_CONTEXT` directory and its files are structured correctly.
---

## Contributing
Contributions to the FOCUS framework are welcome. Please open a pull request with any improvements to the templates or documentation.

## License

This application is open-source and is released under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. See the [LICENSE](LICENSE) file for details.

Shield: [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
