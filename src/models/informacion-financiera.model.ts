import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Cliente} from './cliente.model';

@model({
  settings: {
    foreignKeys: {
      fk_cliente_id: {
        name: 'fk_cliente_id',
        entity: 'Cliente',
        entityKey: 'id',
        foreignKey: 'clienteId',
      },
    },
  }
})
export class InformacionFinanciera extends Entity {
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
  datos_trabajo: string;

  @property({
    type: 'string',
    required: true,
  })
  tiempo_trabajo_actual: string;

  @property({
    type: 'string',
    required: true,
  })
  nom_referencia_fam: string;

  @property({
    type: 'string',
    required: true,
  })
  tel_referencia_fam: string;

  @property({
    type: 'string',
    required: true,
  })
  nom_referencia_per: string;

  @property({
    type: 'string',
    required: true,
  })
  tel_referencia_per: string;

  @belongsTo(() => Cliente)
  clienteId: number;

  constructor(data?: Partial<InformacionFinanciera>) {
    super(data);
  }
}

export interface InformacionFinancieraRelations {
  // describe navigational properties here
}

export type InformacionFinancieraWithRelations = InformacionFinanciera & InformacionFinancieraRelations;
