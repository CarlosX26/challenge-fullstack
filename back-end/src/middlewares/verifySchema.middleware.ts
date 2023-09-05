import { Request, Response, NextFunction } from "express"
import { ZodError, ZodSchema } from "zod"

export const verifySchemaMiddleware =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(
        req.body["application/json"]
          ? JSON.parse(req.body["application/json"])
          : req.body
      )

      next()
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json(error.flatten().fieldErrors)
      }
    }
  }
