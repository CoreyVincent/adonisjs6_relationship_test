import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'Users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('Id').notNullable()
      table.string('FullName').nullable()
      table.string('Email', 254).notNullable().unique()
      table.string('Password').notNullable()
      table.integer('ClientID').unsigned().references('Clients.ID').onDelete('CASCADE')
      table.integer('RoleID').unsigned().references('Roles.ID').onDelete('SET NULL').nullable()

      table.timestamp('CreatedAt').notNullable()
      table.timestamp('UpdatedAt').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
