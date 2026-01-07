import type { HttpContext } from '@adonisjs/core/http'
import Client from '#models/client'

export default class ClientsController {
  /**
   * Display a list of resource
   */
  async index() {
    const clients = await Client.query().whereHas('user', (userQuery) => {
      userQuery.whereHas('role', (roleQuery) => {
        roleQuery.where('name', 'like', 'admin')
      })
    })
    // const clients = await Client.all()
    return clients
  }

  /**
   * Create new record
   */
  async store({ request }: HttpContext) {
    const data = request.only(['name'])
    const client = await Client.create(data)
    return client
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const client = await Client.findOrFail(params.id)
    return client
  }

  /**
   * Update individual record
   */
  async update({ params, request }: HttpContext) {
    const client = await Client.findOrFail(params.id)
    const data = request.only(['name'])
    client.merge(data)
    await client.save()
    return client
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const client = await Client.findOrFail(params.id)
    await client.delete()
    return client
  }
}
