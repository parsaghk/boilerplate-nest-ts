module.exports = {
  '*.ts': [
    (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
    (filenames) => `yarn eslint --fix ${filenames.join(' ')}`,
  ],
  '*': 'npm run build',
};
