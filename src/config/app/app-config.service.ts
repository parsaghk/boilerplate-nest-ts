import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppEnvEnum } from '@shared/enums';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get env(): AppEnvEnum {
    return this.configService.get<AppEnvEnum>('app.env') as AppEnvEnum;
  }

  get port(): number {
    return this.configService.get<number>('app.port') as number;
  }

  get url(): string {
    return this.configService.get<string>('app.url') as string;
  }
}
