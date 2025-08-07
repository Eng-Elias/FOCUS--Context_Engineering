const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');

const log = console.log;

const logger = {
  info: (msg) => log(chalk.blue(msg)),
  success: (msg) => log(chalk.green(msg)),
  warn: (msg) => log(chalk.yellow(msg)),
  error: (msg) => log(chalk.red(msg)),
};

const startSpinner = (text) => {
  const spinner = ora(text).start();
  return spinner;
};

const detectProjectType = async (targetDir) => {
  if (await fs.pathExists(path.join(targetDir, 'package.json'))) return 'Node.js';
  if (await fs.pathExists(path.join(targetDir, 'requirements.txt'))) return 'Python';
  if (await fs.pathExists(path.join(targetDir, 'pom.xml'))) return 'Java';
  if (await fs.pathExists(path.join(targetDir, 'Dockerfile'))) return 'Containerized';
  return 'Unknown';
};

const config = require('./config');

async function validateContext() {
  const targetDir = path.join(config.TARGET_DIR, config.CONTEXT_DIR_NAME);
  if (!(await fs.pathExists(targetDir))) {
    logger.error('FOCUS_CONTEXT directory not found. Run `focus-ce` first.');
    return false;
  }

  const spinner = startSpinner('Validating context structure...');
  let isValid = true;
  let missingLayers = [];

  for (const layer of config.LAYERS) {
    const layerPath = path.join(targetDir, layer);
    if (!(await fs.pathExists(layerPath))) {
      isValid = false;
      missingLayers.push(layer);
    }
  }

  if (isValid) {
    spinner.succeed('Context structure is valid.');
  } else {
    spinner.fail(`Validation failed. Missing layers: ${missingLayers.join(', ')}`);
  }
  return isValid;
}

module.exports = {
  validateContext,
  logger,
  startSpinner,
  detectProjectType,
};
