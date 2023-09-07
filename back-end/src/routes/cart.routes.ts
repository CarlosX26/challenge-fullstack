import { Router } from "express"
import { verifyUserAuthMiddleware } from "../middlewares/verifyUserAuth.middleware"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { Cart } from "../schemas/cart"
import {
  addProductToCartController,
  cartCheckoutController,
  deleteProductToCartController,
  readProductsCartController,
  updateProductToCartController,
} from "../controllers/cart.controllers"

const cartRouter = Router()

/**
 * @swagger
 * /carts/products/{id}:
 *   post:
 *     summary: Adiciona um produto ao carrinho.
 *     description: Adiciona um produto ao carrinho do usuário com a quantidade especificada. Requer autenticação via token.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto a ser adicionado ao carrinho.
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []  # Define o esquema de autenticação como "bearerAuth"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: integer
 *                 description: Quantidade do produto a ser adicionada ao carrinho.
 *     responses:
 *       '200':
 *         description: Produto adicionado ao carrinho com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do item do carrinho.
 *                 amount:
 *                   type: integer
 *                   description: Quantidade do produto no carrinho.
 *                 product:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID do produto adicionado.
 *                     name:
 *                       type: string
 *                       description: Nome do produto.
 *                     description:
 *                       type: string
 *                       description: Descrição do produto.
 *                     imgUrl:
 *                       type: string
 *                       description: URL da imagem do produto.
 *                     inventory:
 *                       type: integer
 *                       description: Quantidade em estoque do produto.
 *                     price:
 *                       type: number
 *                       format: float
 *                       description: Preço do produto.
 *       '400':
 *         description: Produto já está no carrinho.
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 *       '404':
 *         description: Produto não encontrado.
 */
cartRouter.post(
  "/products/:id",
  verifyUserAuthMiddleware,
  verifySchemaMiddleware(Cart),
  addProductToCartController
)
/**
 * @swagger
 * /carts/products/{id}:
 *   patch:
 *     summary: Atualiza a quantidade de um produto no carrinho.
 *     description: Atualiza a quantidade de um produto no carrinho do usuário com o ID especificado. Requer autenticação via token.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do item do carrinho a ser atualizado.
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []  # Define o esquema de autenticação como "bearerAuth"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: integer
 *                 description: Nova quantidade do produto no carrinho.
 *     responses:
 *       '200':
 *         description: Quantidade de produto no carrinho atualizada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do item do carrinho.
 *                 amount:
 *                   type: integer
 *                   description: Nova quantidade do produto no carrinho.
 *                 product:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID do produto no carrinho.
 *                     name:
 *                       type: string
 *                       description: Nome do produto.
 *                     description:
 *                       type: string
 *                       description: Descrição do produto.
 *                     imgUrl:
 *                       type: string
 *                       description: URL da imagem do produto.
 *                     inventory:
 *                       type: integer
 *                       description: Quantidade em estoque do produto.
 *                     price:
 *                       type: number
 *                       format: float
 *                       description: Preço do produto.
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 *       '404':
 *         description: Produto não encontrado no carrinho.
 */
cartRouter.patch(
  "/products/:id",
  verifyUserAuthMiddleware,
  verifySchemaMiddleware(Cart),
  updateProductToCartController
)
/**
 * @swagger
 * /carts/products/{id}:
 *   delete:
 *     summary: Remove um produto do carrinho.
 *     description: Remove um produto do carrinho do usuário com o ID especificado. Requer autenticação via token.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do item do carrinho a ser removido.
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []  # Define o esquema de autenticação como "bearerAuth"
 *     responses:
 *       '204':
 *         description: Produto removido do carrinho com sucesso. Não há conteúdo na resposta.
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 *       '404':
 *         description: Produto não encontrado no carrinho.
 */
cartRouter.delete(
  "/products/:id",
  verifyUserAuthMiddleware,
  deleteProductToCartController
)
/**
 * @swagger
 * /carts/view:
 *   get:
 *     summary: Visualiza os produtos no carrinho.
 *     description: Retorna os produtos no carrinho do usuário. Requer autenticação via token.
 *     security:
 *       - bearerAuth: []  # Define o esquema de autenticação como "bearerAuth"
 *     responses:
 *       '200':
 *         description: Produtos no carrinho recuperados com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do carrinho.
 *                 status:
 *                   type: string
 *                   description: Status do carrinho.
 *                 productCart:
 *                   type: array
 *                   description: Lista de produtos no carrinho.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID do item do carrinho.
 *                       amount:
 *                         type: integer
 *                         description: Quantidade do produto no carrinho.
 *                       product:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             description: ID do produto no carrinho.
 *                           name:
 *                             type: string
 *                             description: Nome do produto.
 *                           description:
 *                             type: string
 *                             description: Descrição do produto.
 *                           imgUrl:
 *                             type: string
 *                             description: URL da imagem do produto.
 *                           inventory:
 *                             type: integer
 *                             description: Quantidade em estoque do produto.
 *                           price:
 *                             type: number
 *                             format: float
 *                             description: Preço do produto.
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 */
cartRouter.get("/view", verifyUserAuthMiddleware, readProductsCartController)
/**
 * @swagger
 * /carts/checkout:
 *   post:
 *     summary: Finaliza o carrinho e confirma o pedido.
 *     description: Finaliza o carrinho do usuário, confirma o pedido e retorna os detalhes do pedido. Requer autenticação via token.
 *     security:
 *       - bearerAuth: []  # Define o esquema de autenticação como "bearerAuth"
 *     responses:
 *       '201':
 *         description: Carrinho finalizado e pedido confirmado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do pedido confirmado.
 *                 status:
 *                   type: string
 *                   description: Status do pedido confirmado.
 *                 productCart:
 *                   type: array
 *                   description: Lista de produtos no pedido confirmado.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID do item do pedido.
 *                       amount:
 *                         type: integer
 *                         description: Quantidade do produto no pedido.
 *                       product:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             description: ID do produto no pedido.
 *                           name:
 *                             type: string
 *                             description: Nome do produto.
 *                           description:
 *                             type: string
 *                             description: Descrição do produto.
 *                           imgUrl:
 *                             type: string
 *                             description: URL da imagem do produto.
 *                           inventory:
 *                             type: integer
 *                             description: Quantidade em estoque do produto.
 *                           price:
 *                             type: number
 *                             format: float
 *                             description: Preço do produto.
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 */
cartRouter.post("/checkout", verifyUserAuthMiddleware, cartCheckoutController)

export default cartRouter
