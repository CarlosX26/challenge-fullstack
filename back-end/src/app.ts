import "express-async-errors"
import express from "express"
import { handlerError } from "./error"
import userRouter from "./routes/user.routes"

const app = express()

app.use("/users", userRouter)

app.use(handlerError)

export default app
