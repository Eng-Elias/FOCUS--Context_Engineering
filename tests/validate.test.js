const { validateContext } = require('../utils');
const fs = require('fs-extra');
const ora = require('ora');
const config = require('../config');
const { logger } = require('../utils');

// Mock dependencies
jest.mock('fs-extra');
jest.mock('ora', () => {
  const mOra = {
    start: jest.fn().mockReturnThis(),
    succeed: jest.fn().mockReturnThis(),
    fail: jest.fn().mockReturnThis(),
  };
  return jest.fn(() => mOra);
});
jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  logger: {
    info: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('validate command', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should succeed when all template files exist', async () => {
    fs.pathExists.mockResolvedValue(true);

    const isValid = await validateContext();

    expect(isValid).toBe(true);
    const spinner = ora();
    expect(spinner.succeed).toHaveBeenCalledWith('Context structure is valid.');
  });

  it('should fail when some template files are missing', async () => {
    const missingFiles = [config.TEMPLATES[0], config.TEMPLATES[2]];
    fs.pathExists.mockImplementation(filePath => {
      const fileName = filePath.split('\\').pop();
      return Promise.resolve(!missingFiles.includes(fileName));
    });

    const isValid = await validateContext();

    expect(isValid).toBe(false);
    const spinner = ora();
    expect(spinner.fail).toHaveBeenCalledWith(`Validation failed. Missing files: ${missingFiles.join(', ')}`);
  });
});
