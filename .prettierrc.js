module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  'prettier/prettier': [
    'error',
    {},
    {
      usePrettierrc: false,
    },
  ],
  endOfLine: 'auto',
  'prettier/prettier': ['error', {singleQuote: true, parser: 'flow'}],
};
