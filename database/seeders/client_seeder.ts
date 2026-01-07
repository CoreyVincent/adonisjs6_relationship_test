import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Client from '#models/client'

export default class extends BaseSeeder {
  async run() {
    await Client.createMany([
      { name: 'Client 1' },
      { name: 'Client 2' },
      { name: 'Client 3' },
      { name: 'Client 4' },
    ])
  }
}
