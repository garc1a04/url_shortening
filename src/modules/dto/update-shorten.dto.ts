import { PartialType } from '@nestjs/swagger';
import { CreateShortenDTO } from './create-shorten.dto';

export class UpdateShortenDTO extends PartialType(CreateShortenDTO) {}
