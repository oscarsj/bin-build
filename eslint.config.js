import js from '@eslint/js';
import globals from 'globals';
import jest from 'eslint-plugin-jest';

export default [{
  ignores: [
    'coverage/**',
    'node_modules/**',
    '**/tmp/**'
  ]
}, {
  files: [
    'index.js'
  ],
  ...js.configs.recommended,
  languageOptions: {
    globals: {
      ...globals.node
    }
  }
}, {
  files: [
    '__tests__/**'
  ],
  ...jest.configs['flat/recommended']
}];
