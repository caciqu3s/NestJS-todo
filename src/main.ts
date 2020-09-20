import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  app.setGlobalPrefix('api');

  const swaggerOptions = new DocumentBuilder()
    .setTitle('NestJS Todo Demo')
    .setBasePath('api')
    .build();

    SwaggerModule.setup('/docs', app, SwaggerModule.createDocument(app, swaggerOptions));

  await app.listen(3000);
}
bootstrap();