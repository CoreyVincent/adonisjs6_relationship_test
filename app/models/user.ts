import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { column, belongsTo } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

import AppBaseModel from '#models/app_base_model'
import Client from '#models/client'
import Role from '#models/role'

import type { BelongsTo } from '@adonisjs/lucid/types/relations'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(AppBaseModel, AuthFinder) {
  static table = 'Users'
  static accessTokens = DbAccessTokensProvider.forModel(User)

  @column({ columnName: 'ID', isPrimary: true })
  declare id: number

  @column({ columnName: 'FullName' })
  declare fullName: string | null

  @column({ columnName: 'Email' })
  declare email: string

  @column({ columnName: 'ClientID' })
  declare clientId: number

  @column({ columnName: 'RoleID' })
  declare roleId: number | null

  @column({ columnName: 'Password', serializeAs: null })
  declare password: string

  @column.dateTime({ columnName: 'CreatedAt', autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ columnName: 'UpdatedAt', autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @belongsTo(() => Client, {
    foreignKey: 'clientId',
    localKey: 'id',
  })
  declare client: BelongsTo<typeof Client>

  @belongsTo(() => Role, {
    foreignKey: 'roleId',
    localKey: 'id',
  })
  declare role: BelongsTo<typeof Role>
}
