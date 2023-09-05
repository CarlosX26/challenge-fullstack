import "express-async-errors"
import express from "express"
import { handlerError } from "./error"
import userRouter from "./routes/user.routes"
import productRouter from "./routes/product.routes"
import cartRouter from "./routes/cart.routes"

const app = express()

app.use(express.json())

app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/carts", cartRouter)

app.use(handlerError)

export default app
