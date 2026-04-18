import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreateShortenDTO } from './dto/create-shorten.dto';
import { ResponseOk } from './dto/response-ok.dto';
import { ResponseShortenDTO } from './dto/response-shorten.dto';
import { URLShortenServicePort } from './interfaces/url-shorten.service.port';

@Controller('shorten')
export class URLShortenController {
  constructor(
    @Inject(URLShortenServicePort)
    private readonly serviceShorten: URLShortenServicePort,
  ) {}

  @Post('')
  @ApiBody({ type: CreateShortenDTO })
  @ApiResponse({ status: 200, type: ResponseShortenDTO })
  async createShortenURL(@Body() data: CreateShortenDTO): Promise<ResponseShortenDTO> {
    const result = await this.serviceShorten.createShortenURL(data);
    return result;
  }

  @Get('/:code')
  @ApiParam({ name: 'code', type: 'string', example: 'AB123' })
  @ApiResponse({ type: ResponseShortenDTO })
  async getOriginalURL(@Param('code') code: string): Promise<ResponseShortenDTO> {
    const result = await this.serviceShorten.getOriginalURL(code);
    return result;
  }

  @Put('/:code')
  @ApiParam({ name: 'code', type: 'string', example: 'AB123' })
  @ApiBody({ type: CreateShortenDTO })
  @ApiResponse({ type: ResponseShortenDTO })
  async updateShortenURL(
    @Param('code') code: string,
    @Body() data: CreateShortenDTO,
  ): Promise<ResponseShortenDTO> {
    const result = await this.serviceShorten.updateShortenURL(code, data);
    return result;
  }

  @Delete('/:code')
  @ApiParam({ name: 'code', type: 'string', example: 'AB123' })
  @ApiResponse({ type: ResponseOk })
  deleteShortenURL(@Param('code') code: string): ResponseOk {
    this.serviceShorten.deleteShortenURL(code);
    return new ResponseOk(true, 'Shorten URL deleted sucessful');
  }

  @Get('/:code/stats')
  @ApiParam({ name: 'code', type: 'string', example: 'AB123' })
  @ApiResponse({ type: ResponseShortenDTO })
  async statsShortenURL(@Param('code') code: string): Promise<ResponseShortenDTO> {
    const result = await this.serviceShorten.statsShortenURL(code);
    return result;
  }
}
