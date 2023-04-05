import { DataSource } from "typeorm";
import { Book } from "../entities/Book";
import { MONGODB_URI } from "../utils/config";

const AppDataSource = new DataSource({
    url:MONGODB_URI,
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "Books",
    // username: "root",
    // password: "password",
    logging: true,
    synchronize: true,
    entities: [Book],
    useUnifiedTopology: true,
});

AppDataSource.initialize();

export { AppDataSource };
