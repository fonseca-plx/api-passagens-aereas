import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AirlineticketsModule } from './airlinetickets/airlinetickets.module';
import { CostumersModule } from './costumers/costumers.module';

@Module({
  imports: [DatabaseModule, AirlineticketsModule, CostumersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
