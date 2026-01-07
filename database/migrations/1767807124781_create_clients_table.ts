import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'Clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ID')

      table.string('Name').notNullable()

      table.timestamp('CreatedAt')
      table.timestamp('UpdatedAt')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
