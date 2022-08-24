import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ServerModule } from './server.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ServerModule);
  const configService: ConfigService = app.get(ConfigService);

  // serving static files
  app.useStaticAssets(join(__dirname, '..', 'src', 'client', 'public'), {
    prefix: '/',
    index: false,
  });

  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
