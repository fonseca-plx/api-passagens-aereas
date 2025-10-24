import { Module } from '@nestjs/common';
import { CostumersService } from './costumers.service';
import { CostumersController } from './costumers.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CostumersController],
  providers: [CostumersService],
})
export class CostumersModule {}
