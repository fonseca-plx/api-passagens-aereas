import { Test, TestingModule } from '@nestjs/testing';
import { AirlineticketsController } from './airlinetickets.controller';
import { AirlineticketsService } from './airlinetickets.service';

describe('AirlineticketsController', () => {
  let controller: AirlineticketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirlineticketsController],
      providers: [AirlineticketsService],
    }).compile();

    controller = module.get<AirlineticketsController>(AirlineticketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
