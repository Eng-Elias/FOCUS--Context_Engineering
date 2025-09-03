const path = require('path');

const config = {
  TEMPLATES_DIR: path.join(__dirname, 'templates', 'FOCUS_CONTEXT'),
  TARGET_DIR: process.cwd(),
  CONTEXT_DIR_NAME: 'FOCUS_CONTEXT',
  PROJECT_TYPES: ['Web App', 'API', 'Library', 'CLI', 'Other'],
  ARCHITECTURES: ['Monolithic', 'Microservices', 'Serverless', 'Event-Driven', 'Other'],
  TEMPLATES: [
    '01_System_and_Interaction.md',
    '02_Domain_Overview.md',
    '03_Standards_and_Conventions.md',
    '04_Tasks_and_Workflow.md',
    '05_Session.md',
  ],
};

module.exports = config;
