# FOCUS Framework
**Framework for Optimized Codebase Understanding & Synthesis**

## Overview
FOCUS is a modular context engineering framework designed to enhance the performance of AI assistants in software development. It provides a structured set of templates to build a comprehensive and token-efficient knowledge base for any codebase.

By systematically capturing system, domain, task, session, and output context, FOCUS ensures that AI assistants have the necessary information to understand complex projects, follow best practices, and generate high-quality, relevant code.

## Quick Start

1.  **Clone the Repository**: Download the framework to your local machine.
2.  **Copy `FOCUS_CONTEXT` Directory**: Move the `FOCUS_CONTEXT` directory into the root of your project.
3.  **Customize `project-overview.md`**: Fill out `FOCUS_CONTEXT/domain/project-overview.md` with your project's high-level details.
4.  **Review and Adapt Templates**: Go through the other templates and fill in the `{{PLACEHOLDERS}}` with information specific to your project and customize them based on the project requirements, tech-stack, architecture, code standards, and any other relevant information.
5.  **Configure Your AI**: Point your AI assistant to use the `FOCUS_CONTEXT` directory as its primary knowledge source.

## Framework Architecture
The FOCUS framework is built on a five-layer architecture, allowing for hierarchical context loading and clear separation of concerns.

- **L1: System Context**: Defines the AI's core behavior, rules, and constraints. This is the foundational layer.
- **L2: Domain Context**: Captures deep knowledge about the project, including its architecture, codebase structure, standards, and domain-specific information.
- **L3: Task Context**: Holds information about the current work, such as sprint goals, feature specifications, and acceptance criteria.
- **L4: Interaction Context**: Manages session-specific data, including user preferences and conversation history.
- **L5: Output Context**: Specifies the standards for deliverables, including code quality, testing, and review processes.

## File Structure Guide
A complete breakdown of the framework's file structure can be found in `FOCUS_CONTEXT/domain/codebase/project-tree.md`. Each template includes a "Purpose" section explaining its role.

## Customization Guide

1.  **Start with the Domain Layer**: The most critical files to customize first are in the `FOCUS_CONTEXT/domain/` directory.
2.  **Fill in Placeholders**: Use a text editor or script to find and replace all `{{VARIABLE_NAME}}` placeholders.
3.  **Adapt to Your Stack**: Pay special attention to the "Architecture Notes" and "Technology Adaptations" sections in each template to tailor them to your specific frameworks and platforms.
4.  **Delete What You Don't Need**: The framework is modular. If a template is not relevant to your project (e.g., `serverless` notes in a monolithic app), remove it.

## Architecture-Specific Setup

- **Monolithic**: Focus on `module-map.md` and `dependency-graph.md` to clarify internal boundaries.
- **Microservices**: The `integration-map.md` and `deployment-topology.md` are critical. Each service may have its own lightweight FOCUS context.
- **Serverless**: Emphasize the `event-driven` notes and document function triggers and IAM roles carefully.

## Best Practices

- **Keep it Concise**: The goal is to be token-efficient. Use bullet points and avoid long paragraphs.
- **Automate Updates**: Use CI/CD hooks to remind developers to update context files when relevant code changes (e.g., modifying a `package.json` should trigger a check of `dependency-graph.md`).
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

This will launch an interactive prompt that allows you to customize the project name, architecture, and context layers.

#### Command-Line Options

You can also use command-line flags for a non-interactive setup:

```bash
focus-ce init --name "My Awesome Project" --arch "microservices" --layers "01_system,02_domain" --smart-fill
```

#### Available Commands & Options

*   **`init`**: Initializes the FOCUS context.
    *   `--name <name>`: Specify the project name.
    *   `--layers <layers>`: A comma-separated list of layers to create (e.g., `01_system,03_tasks`).
    *   `--smart-fill`: Automatically populate placeholders like `{{PROJECT_NAME}}`.
*   **`validate`**: Checks if the `FOCUS_CONTEXT` directory and its layers are structured correctly.
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
