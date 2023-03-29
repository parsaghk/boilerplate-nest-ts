import { Module } from '@nestjs/common';
import { SamplesModule } from '@models/samples';

@Module({
  imports: [SamplesModule],
})
export class ModelsModule {}
