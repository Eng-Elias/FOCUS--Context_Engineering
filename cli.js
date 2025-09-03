const { Command } = require('commander');
const inquirer = require('inquirer');
const path = require('path');
const { logger, detectProjectType, validateContext } = require('./utils');
const { copyTemplates } = require('./templates');
const config = require('./config');
const fs = require('fs-extra');
const pkg = require('./package.json');

// This function is the action for the 'init' command
async function initAction(options, command) {
  logger.info('🎯 FOCUS Framework Initialization');

  const targetDir = path.join(config.TARGET_DIR, config.CONTEXT_DIR_NAME);
  if (await fs.pathExists(targetDir)) {
    const { overwrite } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: `${config.CONTEXT_DIR_NAME} directory already exists. Overwrite?`,
        default: false,
      },
    ]);

    if (!overwrite) {
      logger.info('Initialization cancelled.');
      process.exit(0);
    }
  }

  let finalOptions = { ...options };

  // Determine if running in interactive mode.
  // This is true if the user runs 'focus-ce init' with no other arguments.
  const isInteractive = command.args.length === 0;

  if (isInteractive) {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name:',
        default: path.basename(process.cwd()),
      },
      {
        type: 'list',
        name: 'projectType',
        message: 'Select the project type:',
        choices: config.PROJECT_TYPES,
        default: 'Web App',
      },
      {
        type: 'list',
        name: 'architecture',
        message: 'Select the project architecture:',
        choices: config.ARCHITECTURES,
        default: 'Monolithic',
      }
    ]);
    finalOptions = { ...finalOptions, ...answers };
  }

  finalOptions.projectName = finalOptions.name || finalOptions.projectName || path.basename(process.cwd());
  finalOptions.projectType = finalOptions.type || finalOptions.projectType || 'Other';
  finalOptions.architecture = finalOptions.arch || finalOptions.architecture || 'Other';
  finalOptions.smartFill = finalOptions.smartFill === undefined ? true : finalOptions.smartFill;

  const success = await copyTemplates(finalOptions);

  if (success) {
    logger.success('\n✅ FOCUS context initialized successfully!');
    logger.info('\nNext steps:');
    logger.info('1. Review and customize templates in FOCUS_CONTEXT/');
    logger.info("2. Run 'focus-ce validate' to check completeness");
    logger.info('3. Start using FOCUS with your AI development tools');
  }
}

async function main() {
  const program = new Command();

  program
    .version(pkg.version)
    .description('A CLI tool to initialize the FOCUS Framework in your project.');

  program
    .command('init')
    .description('Initialize FOCUS context in the current directory.')
    .option('--name <name>', 'Specify project name')
    .option('--type <type>', 'Specify project type (e.g., "Web App", "API")')
    .option('--arch <arch>', 'Specify project architecture (e.g., "Monolithic", "Microservices")')
    .option('--no-smart-fill', 'Disable auto-population of templates')
    .action(initAction);

  program
    .command('validate')
    .description('Validate existing FOCUS context.')
    .action(() => {
      logger.info('🔍 Validating FOCUS context...');
      validateContext();
    });

  await program.parseAsync(process.argv);
}

if (require.main === module) {
  main().catch(err => {
      logger.error('An unexpected error occurred:');
      console.error(err);
      process.exit(1);
  });
}

module.exports = { initAction };
