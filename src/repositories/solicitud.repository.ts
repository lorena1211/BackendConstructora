import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, ProcesoPago, Inmueble} from '../models';
import {ProcesoPagoRepository} from './proceso-pago.repository';
import {InmuebleRepository} from './inmueble.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id,
  SolicitudRelations
> {

  public readonly procesoPagos: HasManyRepositoryFactory<ProcesoPago, typeof Solicitud.prototype.id>;

  public readonly inmueble: BelongsToAccessor<Inmueble, typeof Solicitud.prototype.id>;

  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource, @repository.getter('ProcesoPagoRepository') protected procesoPagoRepositoryGetter: Getter<ProcesoPagoRepository>, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>,
  ) {
    super(Solicitud, dataSource);
    this.inmueble = this.createBelongsToAccessorFor('inmueble', inmuebleRepositoryGetter,);
    this.registerInclusionResolver('inmueble', this.inmueble.inclusionResolver);
    this.procesoPagos = this.createHasManyRepositoryFactoryFor('procesoPagos', procesoPagoRepositoryGetter,);
    this.registerInclusionResolver('procesoPagos', this.procesoPagos.inclusionResolver);
  }
}
