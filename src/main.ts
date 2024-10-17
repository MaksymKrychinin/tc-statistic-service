import { NestFactory } from '@nestjs/core';
import { Statistic-serviceModule } from './statistic-service/statistic-service.module';

async function bootstrap() {
  const app = await NestFactory.create(Statistic-serviceModule);
  await app.listen(3000);
}
bootstrap();
