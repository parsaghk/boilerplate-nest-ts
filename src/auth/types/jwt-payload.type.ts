import { EntityId } from '@shared/types';

export class JwtPayload {
  public sub: EntityId;

  public securityTimestamp: string;

  public constructor(sub: string, securityTimestamp: string) {
    this.sub = sub;
    this.securityTimestamp = securityTimestamp;
  }
}
