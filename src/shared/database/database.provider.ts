import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const databaseProviders: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
      type: 'postgres',
      host: config.get<string>('DATABASE_HOST') ||'localhost',
      port: config.get<number>('DATABASE_PORT') || 5432,
      username: config.get<string>('DATABASE_USERNAME') || 'admin',
      password: config.get<string>('DATABASE_PASSWORD') || 'admin',
      database: config.get<string>('DATABASE_NAME') || 'example',
      autoLoadEntities: true,
      synchronize: true,
  }),
}