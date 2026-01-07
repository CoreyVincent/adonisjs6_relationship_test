/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ClientsController = () => import('#controllers/clients_controller')
const UsersController = () => import('#controllers/users_controller')
const RolesController = () => import('#controllers/roles_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('clients', ClientsController).apiOnly()
router.resource('roles', RolesController).apiOnly()
router.resource('users', UsersController).apiOnly()
