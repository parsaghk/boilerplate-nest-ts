import { z } from 'zod';

export class PaginationDto {
  public pageSize: number;

  public pageIndex: number;

  public constructor({
    pageIndex = 1,
    pageSize = 10,
  }: {
    pageSize?: number;
    pageIndex?: number;
  }) {
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    PaginationDto.constructorValidator().parse(this);
  }

  public static constructorValidator() {
    return z.object({
      pageSize: z.number().min(1).optional().default(10),
      pageIndex: z.number().min(1).optional().default(1),
    });
  }

  public static fromJSON(json: JSON): PaginationDto {
    const validJSON = this.constructorValidator().parse(json);
    return new PaginationDto(validJSON);
  }
}
