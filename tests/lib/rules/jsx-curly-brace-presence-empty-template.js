'use strict';

const RuleTester = require('../../helpers/ruleTester');
const rule = require('../../../lib/rules/jsx-curly-brace-presence');

const parserOptions = {
  sourceType: 'module',
  ecmaVersion: 2015,
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('jsx-curly-brace-presence empty template literal whitespace', rule, {
  valid: [
    {
      code: '<span>\n  <span>The braces</span>\n  {``} matter here.\n</span>',
      options: [{ children: 'never' }],
    },
  ],
  invalid: [
    {
      code: '<span><span>The braces</span>{``}matter here.</span>',
      options: [{ children: 'never' }],
      output: '<span><span>The braces</span>matter here.</span>',
      errors: [{ messageId: 'unnecessaryCurly' }],
    },
  ],
});
