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
import {InformacionFinanciera} from '../models';
import {InformacionFinancieraRepository} from '../repositories';

@authenticate('admin')
export class InformacionFinancieraController {
  constructor(
    @repository(InformacionFinancieraRepository)
    public informacionFinancieraRepository: InformacionFinancieraRepository,
  ) { }

  @post('/informaciones-financieras')
  @response(200, {
    description: 'InformacionFinanciera model instance',
    content: {'application/json': {schema: getModelSchemaRef(InformacionFinanciera)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformacionFinanciera, {
            title: 'NewInformacionFinanciera',
            exclude: ['id'],
          }),
        },
      },
    })
    informacionFinanciera: Omit<InformacionFinanciera, 'id'>,
  ): Promise<InformacionFinanciera> {
    return this.informacionFinancieraRepository.create(informacionFinanciera);
  }

  @authenticate.skip()
  @get('/informaciones-financieras/count')
  @response(200, {
    description: 'InformacionFinanciera model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InformacionFinanciera) where?: Where<InformacionFinanciera>,
  ): Promise<Count> {
    return this.informacionFinancieraRepository.count(where);
  }

  @authenticate.skip()
  @get('/informaciones-financieras')
  @response(200, {
    description: 'Array of InformacionFinanciera model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InformacionFinanciera, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InformacionFinanciera) filter?: Filter<InformacionFinanciera>,
  ): Promise<InformacionFinanciera[]> {
    return this.informacionFinancieraRepository.find(filter);
  }

  @patch('/informaciones-financieras')
  @response(200, {
    description: 'InformacionFinanciera PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformacionFinanciera, {partial: true}),
        },
      },
    })
    informacionFinanciera: InformacionFinanciera,
    @param.where(InformacionFinanciera) where?: Where<InformacionFinanciera>,
  ): Promise<Count> {
    return this.informacionFinancieraRepository.updateAll(informacionFinanciera, where);
  }

  @get('/informaciones-financieras/{id}')
  @response(200, {
    description: 'InformacionFinanciera model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InformacionFinanciera, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(InformacionFinanciera, {exclude: 'where'}) filter?: FilterExcludingWhere<InformacionFinanciera>
  ): Promise<InformacionFinanciera> {
    return this.informacionFinancieraRepository.findById(id, filter);
  }

  @patch('/informaciones-financieras/{id}')
  @response(204, {
    description: 'InformacionFinanciera PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformacionFinanciera, {partial: true}),
        },
      },
    })
    informacionFinanciera: InformacionFinanciera,
  ): Promise<void> {
    await this.informacionFinancieraRepository.updateById(id, informacionFinanciera);
  }

  @put('/informaciones-financieras/{id}')
  @response(204, {
    description: 'InformacionFinanciera PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() informacionFinanciera: InformacionFinanciera,
  ): Promise<void> {
    await this.informacionFinancieraRepository.replaceById(id, informacionFinanciera);
  }

  @del('/informaciones-financieras/{id}')
  @response(204, {
    description: 'InformacionFinanciera DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.informacionFinancieraRepository.deleteById(id);
  }
}
