import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfiguration } from './app-configuration';
import { AppEnvEnum } from '@shared/enums';
import { AppConfigService } from '@config/app/app-config.service';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfiguration],
      expandVariables: true,
      validationSchema: Joi.object({
        APP_ENV: Joi.string()
          .required()
          .valid(...Object.values(AppEnvEnum)),
        APP_PORT: Joi.number().required(),
        APP_URL: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
