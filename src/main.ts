import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from '@config/app';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Nestjs boiler plate')
    .setDescription('The Nestjs boiler plate description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const swaggerPath = 'swagger';
  SwaggerModule.setup(swaggerPath, app, document);
  const appConfigService = app.get(AppConfigService);
  await app.listen(appConfigService.port);
  logger.log(`Server is running on ${appConfigService.url}`);
  logger.log(`Swagger is running on ${appConfigService.url}/${swaggerPath}`);
}

bootstrap();
