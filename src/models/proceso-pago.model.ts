import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model({
  settings: {
    foreignKeys: {
      fk_solicitud_id: {
        name: 'fk_solicitud_id',
        entity: 'Solicitud',
        entityKey: 'id',
        foreignKey: 'solicitudId',
      },
    },
  }
})
export class ProcesoPago extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  comprobante_pago: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @belongsTo(() => Solicitud)
  solicitudId: number;

  constructor(data?: Partial<ProcesoPago>) {
    super(data);
  }
}

export interface ProcesoPagoRelations {
  // describe navigational properties here
}

export type ProcesoPagoWithRelations = ProcesoPago & ProcesoPagoRelations;
