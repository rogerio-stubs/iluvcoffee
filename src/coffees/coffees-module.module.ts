import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from 'src/coffees/coffees.controller';
import { CoffeesService } from 'src/coffees/coffees.service';
import { Coffe } from './entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffe])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModuleModule {}
