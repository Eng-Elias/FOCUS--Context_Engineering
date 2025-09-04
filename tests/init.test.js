const { initAction } = require('../cli');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const { copyTemplates } = require('../templates');
const { logger } = require('../utils');
const config = require('../config');
const path = require('path');

// Mock dependencies
jest.mock('fs-extra');
jest.mock('inquirer');
jest.mock('../templates');
jest.mock('../utils', () => ({
  logger: {
    info: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
  },
  validateContext: jest.fn(),
}));

describe('init command', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize FOCUS context with command-line options', async () => {
    const options = {
      name: 'TestProject',
      type: 'Web App',
      arch: 'Monolithic',
      smartFill: true,
    };
    const command = { args: ['--name', 'TestProject'] };

    fs.pathExists.mockResolvedValue(false);
    copyTemplates.mockResolvedValue(true);

    await initAction(options, command);

    const expectedOptions = {
      projectName: 'TestProject',
      projectType: 'Web App',
      architecture: 'Monolithic',
      smartFill: true,
    };

    expect(fs.pathExists).toHaveBeenCalledWith(path.join(config.TARGET_DIR, config.CONTEXT_DIR_NAME));
    expect(copyTemplates).toHaveBeenCalledWith(expectedOptions);
    expect(logger.success).toHaveBeenCalledWith('\n✅ FOCUS context initialized successfully!');
  });
});
