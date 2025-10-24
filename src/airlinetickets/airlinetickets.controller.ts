import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AirlineticketsService } from './airlinetickets.service';
import { Prisma } from '@prisma/client';

@Controller('airlinetickets')
export class AirlineticketsController {
  constructor(private readonly airlineticketsService: AirlineticketsService) {}

  @Post()
  create(@Body() createAirlineticketDto: Prisma.AirlineTicketCreateInput) {
    return this.airlineticketsService.create(createAirlineticketDto);
  }

  @Get()
  findAll(
    @Query('costumerId') costumerId?: string,
    @Query('classe') classe?: 'EXECUTIVA' | 'ECONOMICA' | 'PRIMEIRA',
  ) {
    return this.airlineticketsService.findAll(costumerId, classe);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airlineticketsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAirlineticketDto: Prisma.AirlineTicketUpdateInput,
  ) {
    return this.airlineticketsService.update(+id, updateAirlineticketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airlineticketsService.remove(+id);
  }
}
