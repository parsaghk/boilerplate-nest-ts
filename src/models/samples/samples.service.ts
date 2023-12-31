import { Injectable } from '@nestjs/common';
import { CreateSampleRequestDto } from './dto';
import { SampleEntity } from './entities';

@Injectable()
export class SamplesService {
  public createSample(inputs: CreateSampleRequestDto) {
    return new SampleEntity(inputs.title, inputs.body);
  }
}
