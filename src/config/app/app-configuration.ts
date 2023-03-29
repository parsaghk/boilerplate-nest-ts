import { registerAs } from '@nestjs/config';

export const appConfiguration = registerAs('app', () => ({
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
  url: process.env.APP_URL,
}));
