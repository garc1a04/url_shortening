import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { URLShortenEntity } from '../entity/url-shorten.entity';

export class ResponseShortenDTO {
  @ApiProperty({
    description: 'The unique identifier of the shortened URL',
    example: '1',
  })
  id!: number;

  @ApiProperty({
    description: 'The original destination URL',
    example: 'https://nestjs.com',
  })
  url!: string;

  @ApiProperty({
    description: 'The unique short code generated for the URL',
    example: 'nx82p1',
  })
  short_code!: string;

  @ApiProperty({
    description: 'Timestamp when the short URL was created',
    example: '2024-03-20T14:30:00Z',
  })
  created_at!: string;

  @ApiProperty({
    description: 'Timestamp of the last update',
    example: '2024-03-21T10:00:00Z',
  })
  updated_at!: string;

  @ApiPropertyOptional({
    description: 'Total number of times the shortened URL was accessed',
    example: '150',
  })
  access_count?: number;

  static FromEntity(
    entity: URLShortenEntity,
    stats: boolean,
  ): ResponseShortenDTO {
    const dto = new ResponseShortenDTO();
    dto.id = entity.id;
    dto.url = entity.url;
    dto.short_code = entity.short_code;
    dto.created_at = entity.created_at;
    dto.updated_at = entity.updated_at;
    if (stats) dto.access_count = entity.access_count;
    return dto;
  }
}
