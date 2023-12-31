import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfigService {
  public constructor(private readonly _configService: NestConfigService) {}

  public get accessTokenSecret(): string {
    return this._configService.getOrThrow<string>('auth.accessTokenSecret');
  }

  public get accessTokenExpiresIn(): string {
    return this._configService.getOrThrow<string>('auth.accessTokenExpiresIn');
  }

  public get refreshTokenSecret(): string {
    return this._configService.getOrThrow<string>('auth.refreshTokenSecret');
  }

  public get refreshTokenExpiresIn(): string {
    return this._configService.getOrThrow<string>('auth.refreshTokenExpiresIn');
  }
}
