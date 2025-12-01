'use strict';

module.exports = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['**/node_modules/**', '**/node_modules.__old__/**', '**/dist/**'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
        ],
      },
    ],
    'selector-class-pattern': null,
    'color-hex-length': null,
    'rule-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'media-feature-range-notation': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'value-keyword-case': null,
    'no-descending-specificity': null,
    'shorthand-property-no-redundant-values': null,
    'declaration-empty-line-before': null,
    'block-no-empty': null,
    'declaration-block-single-line-max-declarations': null,
  },
};
