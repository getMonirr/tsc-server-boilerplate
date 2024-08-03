import { Router } from 'express'
import { UserRoutes } from '../modules/ExampleModules/user.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/example-user',
    route: UserRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
