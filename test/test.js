const { exec } = require('child_process');
const assert = require('assert');
const pkg = require('../package.json');

const path = require('path');
const cliCommand = `node ${path.join('bin', 'focus-ce')}`;

// Test 1: Check version
exec(`${cliCommand} --version`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  assert.strictEqual(stdout.trim(), pkg.version, 'Version check failed');
  console.log('✅ Version test passed!');
});

// Test 2: Check help command
exec(`${cliCommand} --help`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    assert(stdout.includes('Usage: focus-ce [options] [command]'), 'Help check failed');
    console.log('✅ Help test passed!');
});
