const { Command } = require('commander');
const inquirer = require('inquirer');
const path = require('path');
const { logger, detectProjectType, validateContext } = require('./utils');
const { copyTemplates } = require('./templates');
const config = require('./config');
const pkg = require('./package.json');

// This function is the action for the 'init' command
async function initAction(options, command) {
  logger.info('🎯 FOCUS Framework Initialization');

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
        type: 'checkbox',
        name: 'layers',
        message: 'Select layers to initialize (Space to select, Enter to confirm):',
        choices: config.LAYERS,
        default: config.LAYERS,
      },
      {
        type: 'confirm',
        name: 'smartFill',
        message: 'Auto-populate templates?',
        default: true,
      },
    ]);
    finalOptions = { ...finalOptions, ...answers };
  }

  // Process layers from string to array if needed
  if (finalOptions.layers && typeof finalOptions.layers === 'string') {
    finalOptions.layers = finalOptions.layers.split(',').map(s => s.trim()).filter(Boolean);
  } else if (!finalOptions.layers) {
      finalOptions.layers = [];
  }

  finalOptions.projectName = finalOptions.name || finalOptions.projectName;

  if (finalOptions.autoDetect) {
    finalOptions.projectType = await detectProjectType(config.TARGET_DIR);
    logger.info(`Detected project type: ${finalOptions.projectType}`);
  }

  const success = await copyTemplates(finalOptions);

  if (success) {
    logger.success('\n✅ FOCUS context initialized successfully!');
    logger.info('\nNext steps:');
    logger.info('1. Review and customize templates in FOCUS_CONTEXT/');
    logger.info('2. Run \'focus-ce validate\' to check completeness');
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
    .option('--layers <layers>', 'Specify layers to initialize (comma-separated)')
    .option('--smart-fill', 'Auto-populate some fields')
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

main().catch(err => {
    logger.error('An unexpected error occurred:');
    console.error(err);
    process.exit(1);
});
