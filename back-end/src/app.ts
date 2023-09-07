import "express-async-errors"
import express from "express"
import { handlerError } from "./error"
import userRouter from "./routes/user.routes"
import productRouter from "./routes/product.routes"
import cartRouter from "./routes/cart.routes"
import cors from "cors"
import helmet from "helmet"
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./utils/swaggerConfig"

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/carts", cartRouter)

app.use(handlerError)

export default app
