import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import User from '#models/user'

import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Role extends BaseModel {
  static table = 'Roles'

  @column({ columnName: 'ID', isPrimary: true })
  declare id: number

  @column({ columnName: 'Name' })
  declare name: string

  @column.dateTime({ columnName: 'CreatedAt', autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ columnName: 'UpdatedAt', autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => User)
  declare users: HasMany<typeof User>
}
