import { Injectable } from '@nestjs/common';
import { URLShortenEntity } from '../entity/url-shorten.entity';
import { URLShortenRepositoryPort } from './interface/url-shorten.repository.port';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class URLShortenRepository implements URLShortenRepositoryPort {
  constructor(
    @InjectRepository(URLShortenEntity)
    private repository: Repository<URLShortenEntity>
  ) {}

  async save(entity: URLShortenEntity): Promise<URLShortenEntity> {
    const result = this.repository.save(entity);
    return result;
  }

  getByCode(code: string): Promise<URLShortenEntity | null> {
    const result = this.repository.findOne({where: {
      short_code: code
    }});

    return result;
  }

  async update(data: URLShortenEntity): Promise<URLShortenEntity> {
    await this.repository.update(data.id, data);
    return data;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
