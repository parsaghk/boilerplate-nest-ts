import { ZodValidationPipe } from '@common/pipes';
import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSampleRequestDto, createSampleRequestSchema } from './dto';
import { SamplesService } from './samples.service';

@ApiTags('Sample')
@Controller('sample')
export class SamplesController {
  public constructor(private _samplesService: SamplesService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createSampleRequestSchema))
  public createSample(@Body() inputs: CreateSampleRequestDto) {
    console.log({ inputs });
    return this._samplesService.createSample(inputs);
  }
}
