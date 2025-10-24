import { Module } from '@nestjs/common';
import { AirlineticketsService } from './airlinetickets.service';
import { AirlineticketsController } from './airlinetickets.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AirlineticketsController],
  providers: [AirlineticketsService],
})
export class AirlineticketsModule {}
