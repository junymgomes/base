import { Router, json } from "express"

import ProdutoController from "./controllers/ProdutoController.js"
import UserController from "./controllers/UserController.js"
import SessionController from "./controllers/SessionController.js"
import authMiddlewars from "./middlewares/auth.js"

const routes = new Router()

routes.use(json())

routes.post('/user/create', UserController.addUser)
routes.post('/user/login', SessionController.createSession)

routes.use(authMiddlewars)


routes.get('/produtos', ProdutoController.getProdutos)
routes.get('/produto/:id', ProdutoController.getProduto)
routes.post('/produto/add', ProdutoController.addProduto)
routes.put('/produto/update', ProdutoController.updateProduto)
routes.delete('/produto/delete/:id', ProdutoController.deleProduto)


 export default routes