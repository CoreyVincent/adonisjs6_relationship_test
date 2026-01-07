import type { HttpContext } from '@adonisjs/core/http'
import Role from '#models/role'

export default class RolesController {
  /**
   * Display a list of resource
   */
  async index() {
    const roles = await Role.all()
    return roles
  }

  /**
   * Create new record
   */
  async store({ request }: HttpContext) {
    const data = request.only(['name'])
    const role = await Role.create(data)
    return role
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const role = await Role.findOrFail(params.id)
    return role
  }

  /**
   * Edit individual record
   */
  async update({ params, request }: HttpContext) {
    const role = await Role.findOrFail(params.id)
    const data = request.only(['name'])
    role.merge(data)
    await role.save()
    return role
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const role = await Role.findOrFail(params.id)
    await role.delete()
    return role
  }
}
