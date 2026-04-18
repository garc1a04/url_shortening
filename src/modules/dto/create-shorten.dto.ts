import { ApiProperty } from '@nestjs/swagger';
import { IsUrl, IsNotEmpty, IsString } from 'class-validator';
import { URLShortenEntity } from '../entity/url-shorten.entity';

export class CreateShortenDTO {
  @ApiProperty({
    description: 'The original long URL to be shortened',
    example: 'https://nestjs.com',
    format: 'uri',
  })
  @IsUrl()
  @IsNotEmpty()
  @IsString()
  url!: string;


  static toEntity(data: CreateShortenDTO): URLShortenEntity{
    const entity = new URLShortenEntity();
    entity.url = data.url;
    entity.created_at = new Date().toISOString();
    entity.updated_at = new Date().toISOString();
    entity.access_count = 0;
    return entity;
  }
}
