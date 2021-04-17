import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody,
  response
} from '@loopback/rest';
import {ProcesoPago} from '../models';
import {ProcesoPagoRepository} from '../repositories';

@authenticate('admin')
export class ProcesosPagosController {
  constructor(
    @repository(ProcesoPagoRepository)
    public procesoPagoRepository: ProcesoPagoRepository,
  ) { }

  @post('/procesos-pagos')
  @response(200, {
    description: 'ProcesoPago model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProcesoPago)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcesoPago, {
            title: 'NewProcesoPago',
            exclude: ['id'],
          }),
        },
      },
    })
    procesoPago: Omit<ProcesoPago, 'id'>,
  ): Promise<ProcesoPago> {
    return this.procesoPagoRepository.create(procesoPago);
  }

  @authenticate.skip()
  @get('/procesos-pagos/count')
  @response(200, {
    description: 'ProcesoPago model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProcesoPago) where?: Where<ProcesoPago>,
  ): Promise<Count> {
    return this.procesoPagoRepository.count(where);
  }

  @authenticate.skip()
  @get('/procesos-pagos')
  @response(200, {
    description: 'Array of ProcesoPago model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProcesoPago, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProcesoPago) filter?: Filter<ProcesoPago>,
  ): Promise<ProcesoPago[]> {
    return this.procesoPagoRepository.find(filter);
  }

  @patch('/procesos-pagos')
  @response(200, {
    description: 'ProcesoPago PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcesoPago, {partial: true}),
        },
      },
    })
    procesoPago: ProcesoPago,
    @param.where(ProcesoPago) where?: Where<ProcesoPago>,
  ): Promise<Count> {
    return this.procesoPagoRepository.updateAll(procesoPago, where);
  }

  @get('/procesos-pagos/{id}')
  @response(200, {
    description: 'ProcesoPago model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProcesoPago, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProcesoPago, {exclude: 'where'}) filter?: FilterExcludingWhere<ProcesoPago>
  ): Promise<ProcesoPago> {
    return this.procesoPagoRepository.findById(id, filter);
  }

  @patch('/procesos-pagos/{id}')
  @response(204, {
    description: 'ProcesoPago PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcesoPago, {partial: true}),
        },
      },
    })
    procesoPago: ProcesoPago,
  ): Promise<void> {
    await this.procesoPagoRepository.updateById(id, procesoPago);
  }

  @put('/procesos-pagos/{id}')
  @response(204, {
    description: 'ProcesoPago PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() procesoPago: ProcesoPago,
  ): Promise<void> {
    await this.procesoPagoRepository.replaceById(id, procesoPago);
  }

  @del('/procesos-pagos/{id}')
  @response(204, {
    description: 'ProcesoPago DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.procesoPagoRepository.deleteById(id);
  }
}
