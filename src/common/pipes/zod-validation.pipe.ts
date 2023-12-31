import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodObject, ZodRawShape } from 'zod';

export class ZodValidationPipe<T extends ZodRawShape> implements PipeTransform {
  public constructor(private _schema: ZodObject<T>) {}

  public transform(value: unknown) {
    try {
      this._schema.parse(value);
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
