import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BitgoModule } from './bitgo/bitgo.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    BitgoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
