import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConsumoAgua } from './consumo_agua.model';

@Injectable()
export class ConsumoAguaService {
  constructor(@InjectModel(ConsumoAgua.name) private consumoModel: Model<ConsumoAgua>) {}

  async registrarConsumo(userId: string, quantidade: number): Promise<ConsumoAgua> {
    const dataLeitura = new Date();
    const novoConsumo = new this.consumoModel({ userId, quantidade, dataLeitura });
    return novoConsumo.save();
  }

  async consultarHistorico(userId: string, dataInicial: Date, dataFinal: Date): Promise<ConsumoAgua[]> {
    return this.consumoModel.find({
      userId,
      dataLeitura: { $gte: dataInicial, $lte: dataFinal },
    }).exec();
  }

  async verificarAlertaConsumo(userId: string): Promise<boolean> {
    const consumos = await this.consumoModel.find({ userId }).sort({ dataLeitura: -1 }).limit(2).exec();
    if (consumos.length < 2) return false;
    return consumos[0].quantidade > consumos[1].quantidade;
  }
}
