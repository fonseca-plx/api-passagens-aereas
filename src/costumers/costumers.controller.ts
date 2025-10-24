import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CostumersService } from './costumers.service';
import { Prisma } from '@prisma/client';

@Controller('costumers')
export class CostumersController {
  constructor(private readonly costumersService: CostumersService) {}

  @Post()
  create(@Body() createCostumerDto: Prisma.CostumerCreateInput) {
    return this.costumersService.create(createCostumerDto);
  }

  @Get()
  findAll() {
    return this.costumersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costumersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCostumerDto: Prisma.CostumerUpdateInput,
  ) {
    return this.costumersService.update(+id, updateCostumerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costumersService.remove(+id);
  }
}
