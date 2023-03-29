module.exports = {
  '*': 'npm run start',
  '*.ts': ['npm run format', 'npm run lint'],
};
