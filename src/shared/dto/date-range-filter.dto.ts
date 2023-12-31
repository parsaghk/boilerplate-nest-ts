import { z } from 'zod';

export class DateRangeFilterDto {
  public readonly from?: string;

  public readonly to?: string;

  public constructor({ from, to }: { from?: string; to?: string }) {
    this.from = from;
    this.to = to;
    DateRangeFilterDto.constructorValidator().parse(this);
  }

  public static constructorValidator() {
    return z.object({
      from: z.string().datetime(),
      to: z.string().datetime(),
    });
  }
}
