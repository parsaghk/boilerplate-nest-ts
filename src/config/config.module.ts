import { AppConfigModule } from '@config/app';
import { Module } from '@nestjs/common';

@Module({
  imports: [AppConfigModule],
})
export class ConfigModule {}
