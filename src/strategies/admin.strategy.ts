import {AuthenticationStrategy} from '@loopback/authentication';
import {service} from '@loopback/core';
import {HttpErrors, Request} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import parseBearerToken from 'parse-bearer-token';
import {SesionService} from '../services';

export class AdminStrategy implements AuthenticationStrategy {
  name: string = 'admin';

  constructor(@service(SesionService)
  public servicioSesion: SesionService) {

  }

  async authenticate(request: Request): Promise<UserProfile | undefined> {
    const token = parseBearerToken(request);
    if (!token) {
      throw new HttpErrors[401]("Usted no ha suministrado un token");
    }
    let datos = this.servicioSesion.VerificarTokenJWT(token);
    if (datos) {
      if (datos.data.role == "6077c813be2f77e7bf5bfcdd") {
        let perfil: UserProfile = Object.assign({
          nombre_usuario: datos.data.username,
          role: datos.data.role
        });
        return perfil;
      } else {
        throw new HttpErrors[401]("Usted no tiene el rol válido para ejecutar esta acción");
      }
    } else {
      throw new HttpErrors[401]("Token inválido.");
    }

  }


}
