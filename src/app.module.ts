import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShortenUrlModule } from './modules/url-shorten.module';
import { DatabaseModule } from './shared/database/database';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot(), ShortenUrlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}