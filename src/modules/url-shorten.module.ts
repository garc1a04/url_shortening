import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { URLShortenEntity } from './entity/url-shorten.entity';
import { URLShortenServicePort } from './interfaces/url-shorten.service.port';
import { URLShortenController } from './url-shorten.controller';
import { URLShortenService } from './url-shorten.service';
import { URLShortenRepositoryPort } from './repository/interface/url-shorten.repository.port';
import { URLShortenRepository } from './repository/url-shorten.repository';

@Module({
  imports: [TypeOrmModule.forFeature([URLShortenEntity])],
  controllers: [URLShortenController],
  providers: [
    { provide: URLShortenServicePort, useClass: URLShortenService },
    { provide: URLShortenRepositoryPort, useClass: URLShortenRepository }
  ],
  exports: [URLShortenServicePort, URLShortenRepositoryPort],
})
export class ShortenUrlModule {}
