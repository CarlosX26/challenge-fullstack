import path from "path"
import swaggerJSDoc, { Options } from "swagger-jsdoc"

const routesPath = path.join(process.cwd(), "src/routes/**.{js,ts}")

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BEST SHOP",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Development server",
      },
    ],
  },
  apis: [routesPath],
}

const swaggerSpec = swaggerJSDoc(options)

export { swaggerSpec }
