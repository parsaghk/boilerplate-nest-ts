import { Module } from '@nestjs/common';
import { SamplesService } from '@models/samples/samples.service';
import { SamplesController } from '@models/samples/samples.controller';

@Module({
  controllers: [SamplesController],
  providers: [SamplesService],
})
export class SamplesModule {}
