import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoAguaModule } from './consumo_agua/consumo_agua.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/projeto_consumo'),
    ConsumoAguaModule,
  ],
})
export class AppModule {}
