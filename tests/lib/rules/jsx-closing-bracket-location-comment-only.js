/**
 * @fileoverview Regression coverage for comment-only JSX opening elements
 */

'use strict';

const RuleTester = require('../../helpers/ruleTester');
const rule = require('../../../lib/rules/jsx-closing-bracket-location');

const parsers = require('../../helpers/parsers');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });
ruleTester.run('jsx-closing-bracket-location comment-only elements', rule, {
  valid: [],
  invalid: parsers.all([
    {
      code: `
        <App
          // foo={bar}
        />
      `,
      output: null,
      errors: [
        {
          messageId: 'bracketLocation',
          data: {
            location: 'placed after the opening tag',
            details: '',
          },
        },
      ],
    },
    {
      code: `
        <App
          // foo={bar}
        ></App>
      `,
      output: null,
      errors: [
        {
          messageId: 'bracketLocation',
          data: {
            location: 'placed after the opening tag',
            details: '',
          },
        },
      ],
    },
  ]),
});
