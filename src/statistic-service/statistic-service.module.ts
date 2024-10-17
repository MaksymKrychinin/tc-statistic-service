import { Module } from '@nestjs/common';
import { Statistic-serviceService } from './services/statistic-service.service';
import { Statistic-serviceController } from './controllers/statistic-service.controller';

@Module({
  controllers: [Statistic-serviceController],
  providers: [Statistic-serviceService],
})
export class Statistic-serviceModule {}
