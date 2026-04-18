import { URLShortenEntity } from '../../entity/url-shorten.entity';

export interface URLShortenRepositoryPort {
  save(entity: URLShortenEntity): Promise<URLShortenEntity>;
  getByCode(code: string): Promise<URLShortenEntity | null>;
  update(data: URLShortenEntity): Promise<URLShortenEntity>;
  delete(id: number): Promise<void>;
}

export const URLShortenRepositoryPort = Symbol('URLShortenRepositoryPort')