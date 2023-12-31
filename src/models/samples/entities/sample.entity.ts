import { AbstractEntityDto } from '@shared/dto';
import { z } from 'zod';

export class SampleEntity extends AbstractEntityDto {
  public title: string;

  public body: string;

  public constructor(title: string, body: string) {
    super({});
    this.title = title;
    this.body = body;
  }

  public static constructorValidator() {
    return z
      .object({
        title: z.string(),
        body: z.string(),
      })
      .merge(AbstractEntityDto.constructorValidator());
  }
}
