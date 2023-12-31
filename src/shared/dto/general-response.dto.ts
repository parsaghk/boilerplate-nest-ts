import { z } from 'zod';

export class GeneralResponseDto {
  public readonly isSuccess: boolean;

  public readonly message: string;

  public constructor(isSuccess: boolean, message: string) {
    this.isSuccess = isSuccess;
    this.message = message;
    GeneralResponseDto.constructorValidator().parse(this);
  }

  public static constructorValidator() {
    return z.object({
      isSuccess: z.boolean(),
      message: z.string(),
    });
  }
}
