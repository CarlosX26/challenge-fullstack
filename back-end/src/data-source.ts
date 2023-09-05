import { DataSource, DataSourceOptions } from "typeorm"
import path from "path"
import "reflect-metadata"
import "dotenv/config"

const getDataSourceOptions = (): DataSourceOptions => {
  const migrationsPath = path.join(__dirname, "./migrations/**.{js,ts}")
  const entitiesPath = path.join(__dirname, "./entities/**.{js,ts}")

  return {
    type: "postgres",
    url: process.env.DB_URL,
    synchronize: false,
    logging: true,
    migrations: [migrationsPath],
    entities: [entitiesPath],
  }
}

const AppDataSource = new DataSource(getDataSourceOptions())

export default AppDataSource
