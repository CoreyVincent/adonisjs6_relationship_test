import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    // Clear existing data and reset auto-increment
    await db.rawQuery('DELETE FROM Users')
    await db.rawQuery("DELETE FROM sqlite_sequence WHERE name = 'Users'")

    await User.createMany([
      {
        fullName: 'Admin User',
        email: 'admin@acme.com',
        password: 'password123',
        clientId: 1, // Client 1
        roleId: 1, // admin
      },
      {
        fullName: 'Regular User',
        email: 'user@techstart.com',
        password: 'password123',
        clientId: 2, // Client 2
        roleId: 2, // user
      },
      {
        fullName: 'Inactive User',
        email: 'inactive@global.com',
        password: 'password123',
        clientId: 3, // Client 3
        roleId: 3, // inactive
      },
    ])
  }
}
