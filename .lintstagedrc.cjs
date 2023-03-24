module.exports = {
  '*': 'pretty-quick  --staged',
  '**/*.(ts|js)?(x)': () => [`yarn typecheck`],
}
