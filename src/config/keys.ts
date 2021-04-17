export namespace Keys {
  export const origenCorreoElectronico = 'lorena.1701814799@ucaldas.edu.co';
  export const asuntoNuevoUsuario = '[Nuevo Usuario Constructora] Mensaje de Bienvenida'
  export const vencimientoJWT = Math.floor(Date.now() / 1000) + (60 * 60 * 8);
  export const claveSecretaJWT = 'jwt@Constructora*';
  export const twilioPhone = '+18566197824';
  export const carpetaImagenPersonas = '../../archivos/personas';
  export const nombreCampoImagenPersona = 'file';
  export const extensionesPermitidasIMG: string[] = ['.PNG', '.JPG', '.JPEG', '.SVG'];
  export const tamMaxImagenPersona = 1024 * 1024;
  export const carpetaDocumentoPersona = '../../archivos/documentos';
  export const nombreCampoDocumentoPersona = 'file';
  export const extensionesPermitidasDOC: string[] = ['.PDF', '.DOC', '.DOCX', '.XLS', '.XLSX'];
}
