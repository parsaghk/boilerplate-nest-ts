import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppEnvEnum } from '@shared/enums';

@Injectable()
export class AppConfigService {
  public constructor(private readonly _configService: ConfigService) {}

  public get env(): AppEnvEnum {
    return this._configService.getOrThrow<AppEnvEnum>('app.env');
  }

  public get port(): number {
    return this._configService.getOrThrow<number>('app.port');
  }

  public get url(): string {
    return this._configService.getOrThrow<string>('app.url');
  }
}
