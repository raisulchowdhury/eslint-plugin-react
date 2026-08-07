/**
 * @fileoverview Regression tests for boolean DOM props
 */

'use strict';

const RuleTester = require('../../helpers/ruleTester');
const rule = require('../../../lib/rules/forbid-dom-props');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
});

ruleTester.run('forbid-dom-props (boolean attributes)', rule, {
  valid: [],
  invalid: [{
    code: '<input required />',
    options: [{ forbid: ['required'] }],
    errors: [{ messageId: 'propIsForbidden', data: { prop: 'required' } }],
  }],
});
