import { Module } from '@nestjs/common';
import { Statistic-serviceModule } from './statistic-service/statistic-service.module';

@Module({
  imports: [Statistic-serviceModule],
})
export class AppModule {}
