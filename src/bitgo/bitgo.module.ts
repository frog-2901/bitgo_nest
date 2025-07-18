import { Module } from '@nestjs/common';
import { BitgoService } from './bitgo.service';
import { BitgoController } from './bitgo.controller';

@Module({
  providers: [BitgoService],
  exports: [BitgoService],
  controllers: [BitgoController],
})
export class BitgoModule {}
