import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateShortenDTO } from './dto/create-shorten.dto';
import { ResponseShortenDTO } from './dto/response-shorten.dto';
import { URLShortenServicePort } from './interfaces/url-shorten.service.port';
import { URLShortenRepositoryPort } from './repository/interface/url-shorten.repository.port';
import { URLShortenEntity } from './entity/url-shorten.entity';
import { generateCode } from '../shared/provider/generate-code/random-code';

@Injectable()
export class URLShortenService implements URLShortenServicePort {
  constructor(
    @Inject(URLShortenRepositoryPort)
    private readonly shortenRepository: URLShortenRepositoryPort,
  ) {}

  async createShortenURL(data: CreateShortenDTO): Promise<ResponseShortenDTO> {
    const entity: URLShortenEntity = CreateShortenDTO.toEntity(data);
    entity.short_code = generateCode();
    const result = await this.shortenRepository.save(entity);
    return ResponseShortenDTO.FromEntity(result, false);
  }
  
  async getOriginalURL(code: string):  Promise<ResponseShortenDTO> {
    const result = await this.shortenRepository.getByCode(code);
    if(!result) throw new NotFoundException("CODE NOT FOUND");
    result.access_count+=1;
    await this.shortenRepository.update(result);
    return ResponseShortenDTO.FromEntity(result, false);
  }

  async updateShortenURL(code: string, data: CreateShortenDTO):  Promise<ResponseShortenDTO> {
    const entity = await this.shortenRepository.getByCode(code);
    if(!entity) throw new NotFoundException("CODE NOT FOUND");
    Object.assign(entity, data);
    entity.updated_at = new Date().toISOString();
    const result = await this.shortenRepository.update(entity);
    return ResponseShortenDTO.FromEntity(result, false);
  }

  async deleteShortenURL(code: string):  Promise<void> {
    const entity = await this.shortenRepository.getByCode(code);
    if(!entity) throw new NotFoundException("CODE NOT FOUND");
    await this.shortenRepository.delete(entity.id);
  }

  async statsShortenURL(code: string):  Promise<ResponseShortenDTO> {
    const result = await this.shortenRepository.getByCode(code);
    if(!result) throw new NotFoundException("CODE NOT FOUND");
    return ResponseShortenDTO.FromEntity(result, true);
  }
}