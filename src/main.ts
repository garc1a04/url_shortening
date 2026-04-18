import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { TransformInterceptor } from './shared/interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  const logger = new Logger();

  const config = new DocumentBuilder()
    .setTitle('URL Shorten')
    .setDescription(
      'The API provide endpoints to create, retrieve, update, and delete short URLs',
    )
    .setVersion('1.0.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);

  await app.listen(8080);

  logger.log('API run on http://localhost:8080');
  logger.log('API DOCS run on http://localhost:8080/api/docs');
}
bootstrap();
