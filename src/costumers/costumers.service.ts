/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CostumersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCostumerDto: Prisma.CostumerCreateInput) {
    return this.databaseService.costumer.create({
      data: createCostumerDto,
    });
  }

  async findAll() {
    return this.databaseService.costumer.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.costumer.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCostumerDto: Prisma.CostumerUpdateInput) {
    return this.databaseService.costumer.update({
      where: { id },
      data: updateCostumerDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.costumer.delete({
      where: { id },
    });
  }
}
