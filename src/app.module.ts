import { Module } from '@nestjs/common';
import { AuthModule } from '@auth/auth.module';
import { ProvidersModule } from '@providers/providers.module';
import { ModelsModule } from '@models/models.module';
import { ConfigModule } from '@config/config.module';

@Module({
  imports: [AuthModule, ConfigModule, ModelsModule, ProvidersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
