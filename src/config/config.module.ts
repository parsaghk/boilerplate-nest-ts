import { Module } from '@nestjs/common';
import { AppConfigModule } from '@config/app';

@Module({
  imports: [AppConfigModule],
})
export class ConfigModule {}
