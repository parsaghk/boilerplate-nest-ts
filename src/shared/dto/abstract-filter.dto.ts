import { DateRangeFilterDto } from '@shared/dto';
import { EntityId } from '@shared/types';
import { z } from 'zod';

export class AbstractFilterDto {
  public id?: EntityId;

  public createdAt?: DateRangeFilterDto;

  public updatedAt?: DateRangeFilterDto;

  public constructor({
    id,
    createdAt,
    updatedAt,
  }: {
    id?: EntityId;
    createdAt?: DateRangeFilterDto;
    updatedAt?: DateRangeFilterDto;
  }) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    AbstractFilterDto.constructorValidator().parse(this);
  }

  public static constructorValidator() {
    return z.object({
      id: z.string().uuid(),
      createdAt: DateRangeFilterDto.constructorValidator(),
      updatedAt: DateRangeFilterDto.constructorValidator(),
    });
  }
}
