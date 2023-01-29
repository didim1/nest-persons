import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.enableCors({
  //   origin: ['http://localhost:5173'],
  //   methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD', 'PUT'],
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  // });
  let domains = ['http://localhost:5173'];
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || domains.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  });
  await app.listen(3000);
}
bootstrap();
