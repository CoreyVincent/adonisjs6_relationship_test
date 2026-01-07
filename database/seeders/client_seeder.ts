import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Client from '#models/client'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    // Clear existing data and reset auto-increment
    await db.rawQuery('DELETE FROM Clients')
    await db.rawQuery("DELETE FROM sqlite_sequence WHERE name = 'Clients'")

    await Client.createMany([
      { name: '1 Client User Admin' },
      { name: '2 Client User User' },
      { name: '3 Client User Inactive' },
      { name: '4 Client' },
    ])
  }
}
