import {belongsTo, Entity, model, property} from '@loopback/repository';
import {TipoUsuario} from './tipo-usuario.model';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_usuario: string;

  @property({
    type: 'string',
  })
  clave?: string;

  @property({
    type: 'string',
    required: true
  })
  nombres: string;

  @property({
    type: 'string',
    required: true
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true
  })
  documento: string;

  @property({
    type: 'string',
    required: true
  })
  telefono: string;

  @property({
    type: 'string',
    required: true
  })
  ciudad_accion: string;

  @belongsTo(() => TipoUsuario)
  tipoUsuarioId: string;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
