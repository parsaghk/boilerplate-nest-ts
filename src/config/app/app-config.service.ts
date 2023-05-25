import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppEnvEnum } from '@shared/enums';

@Injectable()
export class AppConfigService {
  public constructor(private readonly configService: ConfigService) {}

  public get env(): AppEnvEnum {
    return this.configService.get<AppEnvEnum>('app.env') as AppEnvEnum;
  }

  public get port(): number {
    return this.configService.get<number>('app.port') as number;
  }

  public get url(): string {
    return this.configService.get<string>('app.url') as string;
  }
}
