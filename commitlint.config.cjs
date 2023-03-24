module.exports = {
  rules: {
    'header-max-length': [2, 'always', '180'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?:([A-Z]{2,}-\d+(?:, [A-Z]{2,}-\d+)*) \| ){1}(\w*)(?:\((\w*)\))?!?: (.+)$/,
      headerCorrespondence: [`type`, `scope`, `subject`],
    },
  },
}
