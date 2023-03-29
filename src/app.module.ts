import { Module } from '@nestjs/common';
import { AuthModule } from '@auth/auth.module';
import { ProvidersModule } from '@providers/providers.module';

@Module({
  imports: [AuthModule, ProvidersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
