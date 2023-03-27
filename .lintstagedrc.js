module.exports = {
  '*': 'npm run build',
  '*.ts': ['npm run format', 'npm run lint'],
};
