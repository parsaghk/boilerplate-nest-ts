import { z } from 'zod';

export const createSampleRequestSchema = z.object({
  title: z.string(),
  body: z.string(),
});

export type CreateSampleRequestDto = z.infer<typeof createSampleRequestSchema>;
