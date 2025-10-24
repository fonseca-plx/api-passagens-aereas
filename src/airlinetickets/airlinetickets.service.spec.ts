import { Test, TestingModule } from '@nestjs/testing';
import { AirlineticketsService } from './airlinetickets.service';

describe('AirlineticketsService', () => {
  let service: AirlineticketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirlineticketsService],
    }).compile();

    service = module.get<AirlineticketsService>(AirlineticketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
