
import { DataSource } from "typeorm"

const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    migrations: ['src/database/migrations/**/*{.ts,.js}'],
    entities: ["src/entities/*.ts"],

})  

export default PostgresDataSource;