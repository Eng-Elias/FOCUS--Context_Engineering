const fs = require('fs-extra');
const path = require('path');
const { glob } = require('glob');
const config = require('./config');
const { logger, startSpinner } = require('./utils');
const inquirer = require('inquirer');

const architectureDetails = {
  'Monolithic': 'A single, unified application with one codebase and deployment unit. Focus on internal module boundaries and dependencies.',
  'Microservices': 'A collection of small, independent services that communicate over APIs. Emphasize service discovery, data consistency, and integration patterns.',
  'Serverless': 'An event-driven architecture where code is executed in ephemeral containers. Document function triggers, IAM roles, and service integrations.',
  'Event-Driven': 'An architecture based on the production, detection, consumption of, and reaction to events. Focus on event schemas, message brokers, and asynchronous workflows.',
  'Other': 'A custom or hybrid architecture. Please describe its key characteristics below.'
};

async function copyTemplates(options) {
  const { projectName, projectType, architecture, smartFill } = options;
  const targetDir = path.join(config.TARGET_DIR, config.CONTEXT_DIR_NAME);

  await fs.remove(targetDir);

  const spinner = startSpinner('Creating FOCUS_CONTEXT structure...');

  try {
    await fs.ensureDir(targetDir);
    const sourceDir = config.TEMPLATES_DIR;

    for (const template of [...config.TEMPLATES, 'System_Prompt.md']) {
      const sourcePath = path.join(sourceDir, template);
      const destPath = path.join(targetDir, template);
      await fs.copy(sourcePath, destPath);
    }

    if (smartFill) {
      const files = await glob('**/*.md', { cwd: targetDir });
      for (const file of files) {
        const filePath = path.join(targetDir, file);
        let content = await fs.readFile(filePath, 'utf-8');
        content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
        content = content.replace(/\{\{PROJECT_TYPE\}\}/g, projectType);
        content = content.replace(/\{\{ARCHITECTURE_DETAILS\}\}/g, architectureDetails[architecture] || architectureDetails['Other']);
        await fs.writeFile(filePath, content);
      }
    }

    spinner.succeed('FOCUS_CONTEXT structure created successfully!');
    return true;
  } catch (error) {
    spinner.fail('Failed to create FOCUS_CONTEXT structure.');
    logger.error(error.message);
    return false;
  }
}

module.exports = { copyTemplates };
