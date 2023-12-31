import { JSON } from '@shared/types';
import { z } from 'zod';

export class NumberRangeFilterDto {
  public readonly from?: number;

  public readonly to?: number;

  public constructor({ from, to }: { from?: number; to?: number }) {
    this.from = from;
    this.to = to;
  }

  public static constructorValidator() {
    return z.object({
      from: z.number().optional(),
      to: z.number().optional(),
    });
  }

  public static fromJSON(json: JSON): NumberRangeFilterDto {
    const validJSON = this.constructorValidator().parse(json);
    return new NumberRangeFilterDto(validJSON);
  }
}
