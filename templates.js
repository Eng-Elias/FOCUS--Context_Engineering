const fs = require('fs-extra');
const path = require('path');
const { glob } = require('glob');
const config = require('./config');
const { logger, startSpinner } = require('./utils');

async function copyTemplates(options) {
  const { layers, projectName, smartFill } = options;
  const targetDir = path.join(config.TARGET_DIR, config.CONTEXT_DIR_NAME);

  if (await fs.pathExists(targetDir)) {
    logger.warn('FOCUS_CONTEXT directory already exists. Overwriting...');
    await fs.remove(targetDir);
  }

  const spinner = startSpinner('Creating FOCUS_CONTEXT structure...');

  try {
    const sourceDir = config.TEMPLATES_DIR;
    const layersToCopy = layers.length > 0 ? layers : config.LAYERS;

    for (const layer of layersToCopy) {
      const layerSourcePath = path.join(sourceDir, layer);
      const layerDestPath = path.join(targetDir, layer);
      if (await fs.pathExists(layerSourcePath)) {
        await fs.copy(layerSourcePath, layerDestPath);
      } else {
        await fs.ensureDir(layerDestPath);
        await fs.copy(layerSourcePath, layerDestPath);
      }
    }

    if (smartFill) {
      const files = await glob('**/*.md', { cwd: targetDir });
      for (const file of files) {
        const filePath = path.join(targetDir, file);
        let content = await fs.readFile(filePath, 'utf-8');
        content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
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
