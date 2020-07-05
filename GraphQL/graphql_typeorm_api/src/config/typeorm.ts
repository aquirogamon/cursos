import { createConnection, Connection } from "typeorm";
import path from "path";

export async function connect() {
  const connection: Connection = await createConnection({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    username: "",
    password: "",
    database: "graphqlts",
    entities: [path.join(__dirname, "../entity/**/**.ts")],
    synchronize: true,
    useUnifiedTopology: true,
  });
  console.log("Database is connected");
}
