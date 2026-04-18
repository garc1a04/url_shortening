import { CreateShortenDTO } from '../dto/create-shorten.dto';
import { ResponseShortenDTO } from '../dto/response-shorten.dto';

export interface URLShortenServicePort {
  createShortenURL(data: CreateShortenDTO): Promise<ResponseShortenDTO>;
  getOriginalURL(code: string): Promise<ResponseShortenDTO>;
  updateShortenURL(code: string, data: CreateShortenDTO): Promise<ResponseShortenDTO>;
  deleteShortenURL(code: string): Promise<void>;
  statsShortenURL(code: string): Promise<ResponseShortenDTO>;
}

export const URLShortenServicePort = Symbol('URLShortenServicePort');
