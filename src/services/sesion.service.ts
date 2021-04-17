import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {Keys as llaves} from '../config/keys';
import {Usuario} from '../models';
const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class SesionService {
  constructor(/* Add @inject to inject parameters */) { }

  /**
   * Función de generación de un token JWT
   */
  GenerarToken(usuario: Usuario): string {
    let tk = jwt.sign({
      exp: llaves.vencimientoJWT,
      data: {
        username: usuario.nombre_usuario,
        role: usuario.tipoUsuarioId
      }
    }, llaves.claveSecretaJWT);
    return tk;
  }

  /**
   * Función para verificar la validez de token JWT
   */
  VerificarTokenJWT(token: string) {
    try {
      let decoded = jwt.verify(token, llaves.claveSecretaJWT);
      return decoded;
    } catch {
      return null;
    }
  }
}
