import { EntityId } from '@shared/types';
import * as dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

export abstract class AbstractEntityDto {
  protected readonly id: EntityId;

  protected readonly createdAt: Date;

  protected readonly updatedAt: Date;

  protected constructor({
    id = uuidv4(),
    createdAt = dayjs().toDate(),
    updatedAt = dayjs().toDate(),
  }: {
    id?: EntityId;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    AbstractEntityDto.constructorValidator().parse(this);
  }

  public static constructorValidator() {
    return z.object({
      id: z.string().uuid(),
      createdAt: z.date(),
      updatedAt: z.date(),
    });
  }
}
