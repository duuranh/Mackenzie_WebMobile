import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { ConsumoAguaService } from './consumo_agua.service';

@Controller('consumo_agua')
export class ConsumoAguaController {
  constructor(private readonly consumoService: ConsumoAguaService) {}

  @Post('registrar')
  registrarConsumo(
    @Body('userId') userId: string,
    @Body('quantidade') quantidade: number,
  ) {
    return this.consumoService.registrarConsumo(userId, quantidade);
  }

  @Get('historico')
  consultarHistorico(
    @Query('userId') userId: string,
    @Query('dataInicial') dataInicial: string,
    @Query('dataFinal') dataFinal: string,
  ) {
    return this.consumoService.consultarHistorico(userId, new Date(dataInicial), new Date(dataFinal));
  }

  @Get('alerta/:userId')
  verificarAlerta(@Param('userId') userId: string) {
    return this.consumoService.verificarAlertaConsumo(userId);
  }
}
