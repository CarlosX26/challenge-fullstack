import { Router } from "express"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { User, UserAuth, UserUpdate } from "../schemas/user"
import {
  authUserController,
  createUserAdmController,
  createUserController,
  deleteUserController,
  readUserController,
  updateUserController,
} from "../controllers/user.controllers"
import { verifyUserAuthMiddleware } from "../middlewares/verifyUserAuth.middleware"
import { verifyEmailMiddleware } from "../middlewares/verifyEmail.middleware"

const userRouter = Router()

/**
 * @swagger
 * /users/auth:
 *   post:
 *     summary: Autentica um usuário.
 *     description: Autentica um usuário com informações de email e senha e retorna um token de autenticação.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Endereço de e-mail do usuário.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Senha do usuário.
 *     responses:
 *       '200':
 *         description: Autenticação bem-sucedida. Retorna um token de autenticação.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token de autenticação gerado.
 *       '400':
 *         description: Campos inválidos. Verifique se todos os campos obrigatórios estão presentes.
 *       '401':
 *         description: Dados de autenticação incorretos. O email ou senha fornecidos estão incorretos.
 */
userRouter.post("/auth", verifySchemaMiddleware(UserAuth), authUserController)
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário.
 *     description: Cria um novo usuário com informações de nome, email e senha.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Endereço de e-mail do usuário.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Senha do usuário.
 *     responses:
 *       '201':
 *         description: Usuário criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 isAdm:
 *                   type: boolean
 *       '400':
 *         description: Campos inválidos. Verifique se todos os campos obrigatórios estão presentes.
 *       '409':
 *         description: Conflito. O endereço de e-mail fornecido já existe na base de dados.
 */
userRouter.post(
  "",
  verifySchemaMiddleware(User),
  verifyEmailMiddleware,
  createUserController
)
/**
 * @swagger
 * /users/admin:
 *   post:
 *     summary: Cria um novo usuário administrador.
 *     description: Cria um novo usuário administrador com informações de nome, email e senha.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário administrador.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Endereço de e-mail do usuário administrador.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Senha do usuário administrador.
 *     responses:
 *       '201':
 *         description: Usuário administrador criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Nome do usuário administrador.
 *                 email:
 *                   type: string
 *                   description: Endereço de e-mail do usuário administrador.
 *                 isAdmin:
 *                   type: boolean
 *                   description: Indica se o usuário é um administrador (true/false).
 *       '400':
 *         description: Campos inválidos. Verifique se todos os campos obrigatórios estão presentes.
 *       '409':
 *         description: Conflito. O endereço de e-mail fornecido já existe na base de dados.
 */
userRouter.post(
  "/admin",
  verifySchemaMiddleware(User),
  verifyEmailMiddleware,
  createUserAdmController
)
/**
 * @swagger
 * /users/profile:
 *   get:
 *     summary: Obtém o perfil do usuário.
 *     description: Obtém o perfil do usuário autenticado com informações de nome, email e se é um administrador. Requer autenticação via token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Perfil do usuário obtido com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Nome do usuário.
 *                 email:
 *                   type: string
 *                   description: Endereço de e-mail do usuário.
 *                 isAdm:
 *                   type: boolean
 *                   description: Indica se o usuário é um administrador (true/false).
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 */
userRouter.get("/profile", verifyUserAuthMiddleware, readUserController)
/**
 * @swagger
 * /users/profile:
 *   patch:
 *     summary: Edita parcialmente o perfil do usuário.
 *     description: Edita parcialmente o perfil do usuário com informações de nome, email e senha. Requer autenticação via token.
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
 *                 description: Nome do usuário (opcional).
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Endereço de e-mail do usuário (opcional).
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Nova senha do usuário (opcional).
 *     responses:
 *       '200':
 *         description: Perfil do usuário editado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Nome do usuário após a edição.
 *                 email:
 *                   type: string
 *                   description: Endereço de e-mail do usuário após a edição.
 *                 isAdm:
 *                   type: boolean
 *                   description: Indica se o usuário é um administrador (true/false).
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 */
userRouter.patch(
  "/profile",
  verifyUserAuthMiddleware,
  verifySchemaMiddleware(UserUpdate),
  updateUserController
)
/**
 * @swagger
 * /users/profile:
 *   delete:
 *     summary: Exclui o perfil do usuário.
 *     description: Exclui permanentemente o perfil do usuário. Requer autenticação via token.
 *     security:
 *       - bearerAuth: []  # Define o esquema de autenticação como "bearerAuth"
 *     responses:
 *       '204':
 *         description: Perfil do usuário excluído com sucesso. Não há conteúdo na resposta.
 *       '401':
 *         description: Faça autenticação para acessar a rota. O token de autenticação é obrigatório.
 */
userRouter.delete("/profile", verifyUserAuthMiddleware, deleteUserController)

export default userRouter
