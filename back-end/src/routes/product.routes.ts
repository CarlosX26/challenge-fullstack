import { Router } from "express"
import { verifyUserAuthMiddleware } from "../middlewares/verifyUserAuth.middleware"
import { verifyUserIsAdmMiddleware } from "../middlewares/verifyUserIsAdm.middleware"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { Product, ProductUpdate } from "../schemas/product"
import {
  createProductController,
  deleteProductController,
  readProductsAdmController,
  readProductsController,
  updateProductController,
} from "../controllers/product.controllers"

const productRouter = Router()

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Cria um novo produto.
 *     description: Cria um novo produto com informações de nome, descrição, URL da imagem, estoque, preço e é atribuído a um usuário. Requer autenticação via token e é restrito a administradores.
 *     security:
 *       - bearerAuth: []  # Define o esquema de autenticação como "bearerAuth"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do produto.
 *               description:
 *                 type: string
 *                 description: Descrição do produto.
 *               imgUrl:
 *                 type: string
 *                 description: URL da imagem do produto.
 *               inventory:
 *                 type: integer
 *                 description: Quantidade em estoque do produto.
 *               price:
 *                 type: number
 *                 format: float
 *                 description: Preço do produto.
 *     responses:
 *       '201':
 *         description: Produto criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do produto criado.
 *                 name:
 *                   type: string
 *                   description: Nome do produto.
 *                 description:
 *                   type: string
 *                   description: Descrição do produto.
 *                 imgUrl:
 *                   type: string
 *                   description: URL da imagem do produto.
 *                 inventory:
 *                   type: integer
 *                   description: Quantidade em estoque do produto.
 *                 price:
 *                   type: number
 *                   format: float
 *                   description: Preço do produto.
 *                 user:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Nome do usuário que criou o produto.
 *                     email:
 *                       type: string
 *                       format: email
 *                       description: Endereço de e-mail do usuário que criou o produto.
 *                     isAdm:
 *                       type: boolean
 *                       description: Indica se o usuário é um administrador (true/false).
 *       '400':
 *         description: Campos inválidos ou já existe produto com este nome.
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 *       '403':
 *         description: Acesso negado. Esta rota é restrita a administradores.
 */
productRouter.post(
  "",
  verifyUserAuthMiddleware,
  verifyUserIsAdmMiddleware,
  verifySchemaMiddleware(Product),
  createProductController
)
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lista todos os produtos.
 *     description: Obtém uma lista de todos os produtos disponíveis.
 *     responses:
 *       '200':
 *         description: Lista de produtos obtida com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do produto.
 *                   name:
 *                     type: string
 *                     description: Nome do produto.
 *                   description:
 *                     type: string
 *                     description: Descrição do produto.
 *                   imgUrl:
 *                     type: string
 *                     description: URL da imagem do produto.
 *                   inventory:
 *                     type: integer
 *                     description: Quantidade em estoque do produto.
 *                   price:
 *                     type: number
 *                     format: float
 *                     description: Preço do produto.
 */
productRouter.get("", readProductsController)
/**
 * @swagger
 * /products/admin:
 *   get:
 *     summary: Lista todos os produtos criados pelo admin logado.
 *     description: Obtém uma lista de todos os produtos criados pelo admin autenticado.
 *     security:
 *       - bearerAuth: []  # Define o esquema de autenticação como "bearerAuth"
 *     responses:
 *       '200':
 *         description: Lista de produtos criados pelo admin obtida com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do produto.
 *                   name:
 *                     type: string
 *                     description: Nome do produto.
 *                   description:
 *                     type: string
 *                     description: Descrição do produto.
 *                   imgUrl:
 *                     type: string
 *                     description: URL da imagem do produto.
 *                   inventory:
 *                     type: integer
 *                     description: Quantidade em estoque do produto.
 *                   price:
 *                     type: number
 *                     format: float
 *                     description: Preço do produto.
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 *       '403':
 *         description: Acesso negado. O usuário não é um administrador.
 */
productRouter.get(
  "/admin",
  verifyUserAuthMiddleware,
  verifyUserIsAdmMiddleware,
  readProductsAdmController
)
/**
 * @swagger
 * /products/{id}:
 *   patch:
 *     summary: Edita parcialmente um produto específico.
 *     description: Edita parcialmente um produto específico com informações de nome, descrição, URL da imagem, estoque e preço. Requer autenticação via token e é restrito a administradores.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto a ser editado.
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
 *               name:
 *                 type: string
 *                 description: Nome do produto (opcional).
 *               description:
 *                 type: string
 *                 description: Descrição do produto (opcional).
 *               imgUrl:
 *                 type: string
 *                 description: URL da imagem do produto (opcional).
 *               inventory:
 *                 type: integer
 *                 description: Quantidade em estoque do produto (opcional).
 *               price:
 *                 type: number
 *                 format: float
 *                 description: Preço do produto (opcional).
 *     responses:
 *       '200':
 *         description: Produto editado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do produto editado.
 *                 name:
 *                   type: string
 *                   description: Nome do produto após a edição.
 *                 description:
 *                   type: string
 *                   description: Descrição do produto após a edição.
 *                 imgUrl:
 *                   type: string
 *                   description: URL da imagem do produto após a edição.
 *                 inventory:
 *                   type: integer
 *                   description: Quantidade em estoque do produto após a edição.
 *                 price:
 *                   type: number
 *                   format: float
 *                   description: Preço do produto após a edição.
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 *       '403':
 *         description: Acesso negado. Esta rota é restrita a administradores.
 */
productRouter.patch(
  "/:id",
  verifyUserAuthMiddleware,
  verifyUserIsAdmMiddleware,
  verifySchemaMiddleware(ProductUpdate),
  updateProductController
)
/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Exclui um produto específico.
 *     description: Exclui permanentemente um produto com base no ID especificado. Requer autenticação via token e é restrito a administradores.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto a ser excluído.
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []  # Define o esquema de autenticação como "bearerAuth"
 *     responses:
 *       '204':
 *         description: Produto excluído com sucesso. Não há conteúdo na resposta.
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 *       '403':
 *         description: Acesso negado. Esta rota é restrita a administradores.
 */
productRouter.delete(
  "/:id",
  verifyUserAuthMiddleware,
  verifyUserIsAdmMiddleware,
  deleteProductController
)

export default productRouter
