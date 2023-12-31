export class AbstractRequestDto {
  public static fromJSON(_: JSON): AbstractRequestDto {
    return new AbstractRequestDto();
  }
}
