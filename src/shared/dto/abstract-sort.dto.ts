import { SortEnum } from '@shared/enums';
import { z } from 'zod';

export class AbstractSortDto {
  public id?: SortEnum;

  public createdAt?: SortEnum;

  public updatedAt?: SortEnum;

  public constructor({
    id,
    createdAt,
    updatedAt,
  }: {
    id?: SortEnum;
    createdAt?: SortEnum;
    updatedAt?: SortEnum;
  }) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    AbstractSortDto.constructorValidator().parse(this);
  }

  public static constructorValidator() {
    return z.object({
      id: z.nativeEnum(SortEnum).optional(),
      createdAt: z.nativeEnum(SortEnum).optional(),
      updatedAt: z.nativeEnum(SortEnum).optional(),
    });
  }
}
