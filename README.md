# FOCUS Framework
**Framework for Optimized Codebase Understanding & Synthesis**

## Overview
FOCUS is a modular context engineering framework designed to enhance the performance of AI assistants in software development. It provides a structured set of templates to build a comprehensive and token-efficient knowledge base for any codebase.

By systematically capturing system, domain, task, session, and output context, FOCUS ensures that AI assistants have the necessary information to understand complex projects, follow best practices, and generate high-quality, relevant code.

## Quick Start

1.  **Clone the Repository**: Download the framework to your local machine.
2.  **Copy `CONTEXT` Directory**: Move the `CONTEXT` directory into the root of your project.
3.  **Customize `project-overview.md`**: Fill out `CONTEXT/domain/project-overview.md` with your project's high-level details.
4.  **Review and Adapt Templates**: Go through the other templates and fill in the `{{PLACEHOLDERS}}` with information specific to your project.
5.  **Configure Your AI**: Point your AI assistant to use the `CONTEXT` directory as its primary knowledge source.

## Framework Architecture
The FOCUS framework is built on a five-layer architecture, allowing for hierarchical context loading and clear separation of concerns.

- **L1: System Context**: Defines the AI's core behavior, rules, and constraints. This is the foundational layer.
- **L2: Domain Context**: Captures deep knowledge about the project, including its architecture, codebase structure, standards, and domain-specific information.
- **L3: Task Context**: Holds information about the current work, such as sprint goals, feature specifications, and acceptance criteria.
- **L4: Interaction Context**: Manages session-specific data, including user preferences and conversation history.
- **L5: Output Context**: Specifies the standards for deliverables, including code quality, testing, and review processes.

## File Structure Guide
A complete breakdown of the framework's file structure can be found in `CONTEXT/domain/codebase/project-tree.md`. Each template includes a "Purpose" section explaining its role.

## Customization Guide

1.  **Start with the Domain Layer**: The most critical files to customize first are in the `CONTEXT/domain/` directory.
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

- **Regular Reviews**: Schedule a quarterly review of the entire `CONTEXT` directory to prune outdated information.
- **Update Triggers**: Follow the "Updates" section in each template. These provide clear guidelines on when a file should be modified.

## Contributing
Contributions to the FOCUS framework are welcome. Please open a pull request with any improvements to the templates or documentation.
