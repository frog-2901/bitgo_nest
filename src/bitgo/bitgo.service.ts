// src/bitgo/bitgo.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BitGo, EnvironmentName } from 'bitgo';

@Injectable()
export class BitgoService {
  private bitgo: BitGo;

  constructor(private configService: ConfigService) {
    const accessToken = this.configService.get<string>('BITGO_ACCESS_TOKEN');
    const envStr =
      this.configService.get<EnvironmentName>('BITGO_ENVIRONMENT') || 'test';
    const env = envStr as EnvironmentName;
    // Initialize BitGo SDK
    this.bitgo = new BitGo({ env, accessToken });
  }
  // Utility method to get BitGo instance
  getBitgoInstance(): BitGo {
    return this.bitgo;
  }
}
