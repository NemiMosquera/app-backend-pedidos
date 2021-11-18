import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Persona} from './persona.model';
import {Producto} from './producto.model';

@model()
export class Pedido extends Entity {
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
  idproducto: string;


  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'number',
    required: true,
  })
  estado: number;

  @belongsTo(() => Persona, {name: 'persona'})
  personaid: string;

  @property({
    type: 'string',
  })
  personaId?: string;

  @hasOne(() => Producto)
  producto: Producto;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
