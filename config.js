const path = require('path');

const config = {
  TEMPLATES_DIR: path.join(__dirname, 'templates', 'FOCUS_CONTEXT'),
  TARGET_DIR: process.cwd(),
  CONTEXT_DIR_NAME: 'FOCUS_CONTEXT',
  DEFAULT_ARCH: 'monolithic',
  ARCHITECTURES: ['monolithic', 'microservices', 'serverless', 'event-driven', 'ddd', 'modular-monolith'],
  LAYERS: ['01_system', '02_domain', '03_tasks', '04_sessions', '05_outputs'],
};

module.exports = config;
