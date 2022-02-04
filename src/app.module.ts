import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModuleModule } from './coffees/coffees-module/coffees-module.module';

@Module({
  imports: [CoffeesModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
