import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index() {
    const users = await User.query().preload('client').preload('role')
    return users
  }

  /**
   * Create new record
   */
  async store({ request }: HttpContext) {
    const data = request.only(['username', 'email', 'clientId', 'roleId'])
    const user = await User.create(data)
    return user
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.load('client')
    await user.load('role')
    return user
  }

  /**
   * Edit individual record
   */
  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['username', 'email', 'clientId', 'roleId'])
    user.merge(data)
    await user.save()
    return user
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return user
  }
}
