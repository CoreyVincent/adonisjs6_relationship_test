import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'

import User from '#models/user'

import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Client extends BaseModel {
  static table = 'Clients'

  @column({ columnName: 'ID', isPrimary: true })
  declare id: number

  @column({ columnName: 'Name' })
  declare name: string

  @column.dateTime({ columnName: 'CreatedAt', autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ columnName: 'UpdatedAt', autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => User, {
    foreignKey: 'clientId',
    localKey: 'id',
  })
  declare user: HasOne<typeof User>
}
