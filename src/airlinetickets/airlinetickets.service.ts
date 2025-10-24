/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import type { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AirlineticketsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAirlineticketDto: Prisma.AirlineTicketCreateInput) {
    return this.databaseService.airlineTicket.create({
      data: createAirlineticketDto,
    });
  }

  async findAll(
    costumerId?: string,
    classe?: 'EXECUTIVA' | 'ECONOMICA' | 'PRIMEIRA',
  ) {
    if (costumerId || classe) {
      return this.databaseService.airlineTicket.findMany({
        where: {
          ...(costumerId && { costumerId: parseInt(costumerId, 10) }),
          ...(classe && { classe }),
        },
      });
    }
    return this.databaseService.airlineTicket.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.airlineTicket.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateAirlineticketDto: Prisma.AirlineTicketUpdateInput,
  ) {
    return this.databaseService.airlineTicket.update({
      where: { id },
      data: updateAirlineticketDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.airlineTicket.delete({
      where: { id },
    });
  }
}
