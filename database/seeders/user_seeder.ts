import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        fullName: 'Admin User',
        email: 'admin@acme.com',
        password: 'password123',
        clientId: 1, // Acme Corporation
        roleId: 1, // admin
      },
      {
        fullName: 'Regular User',
        email: 'user@techstart.com',
        password: 'password123',
        clientId: 2, // TechStart Inc
        roleId: 2, // user
      },
      {
        fullName: 'Inactive User',
        email: 'inactive@global.com',
        password: 'password123',
        clientId: 3, // Global Solutions Ltd
        roleId: 3, // inactive
      },
    ])
  }
}
