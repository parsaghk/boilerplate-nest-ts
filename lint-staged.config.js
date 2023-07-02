module.exports = {
  '*.ts': [
    (filenames) => `npx prettier --write ${filenames.join(' ')}`,
    (filenames) => `npx eslint --fix ${filenames.join(' ')}`,
  ],
  '*': 'npm run build',
};
