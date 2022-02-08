import { Module } from '@nestjs/common';
import { CoffeesModuleModule } from 'src/coffees/coffees-module.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [CoffeesModuleModule],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
