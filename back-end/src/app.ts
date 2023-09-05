import "express-async-errors"
import express from "express"
import { handlerError } from "./error"

const app = express()

app.use(handlerError)

export default app
