import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role from '#models/role'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    // Clear existing data and reset auto-increment
    await db.rawQuery('DELETE FROM Roles')
    await db.rawQuery("DELETE FROM sqlite_sequence WHERE name = 'Roles'")

    await Role.createMany([{ name: 'admin' }, { name: 'user' }, { name: 'inactive' }])
  }
}
