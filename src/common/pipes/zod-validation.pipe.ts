import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodObject } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  public constructor(private _schema: ZodObject<any>) {}

  public transform(value: unknown) {
    console.log(value);
    try {
      this._schema.parse(value);
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
