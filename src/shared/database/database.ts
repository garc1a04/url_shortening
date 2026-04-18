
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRootAsync(databaseProviders)],
})
export class DatabaseModule {}