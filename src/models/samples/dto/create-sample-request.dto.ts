import { ApiProperty } from '@nestjs/swagger';
import { JSON } from '@shared/types';
import { z } from 'zod';

export const createSampleRequestSchema = z.object({
  title: z.string(),
  body: z.string(),
});

export type CreateSampleRequestDto = z.infer<typeof createSampleRequestSchema>;
// export class CreateSampleRequestDto {
//   @ApiProperty()
//   public title: string;
//
//   @ApiProperty()
//   public body: string;
//
//   public constructor({ title, body }: { title: string; body: string }) {
//     this.title = title;
//     this.body = body;
//     CreateSampleRequestSchema.parse(this);
//   }
//
//   public static fromJSON(json: JSON) {
//     const validJSON = CreateSampleRequestSchema.parse(json);
//     return new CreateSampleRequestDto(validJSON);
//   }
// }
