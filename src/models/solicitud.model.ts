import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Inmueble} from './inmueble.model';
import {ProcesoPago} from './proceso-pago.model';

@model({
  settings: {
    foreignKeys: {
      fk_inmueble_id: {
        name: 'fk_inmueble_id',
        entity: 'Inmueble',
        entityKey: 'id',
        foreignKey: 'inmuebleId',
      },
    },
  }
})
export class Solicitud extends Entity {
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
  estado: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  oferta_economica: string;

  @hasMany(() => ProcesoPago)
  procesoPagos: ProcesoPago[];

  @belongsTo(() => Inmueble)
  inmuebleId: number;

  @property({
    type: 'number',
  })
  clienteId?: number;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
