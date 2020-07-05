import "reflect-metadata";
import { startServer } from "./app";
import { connect } from "./config/typeorm";

async function main() {
  connect();
  const app = await startServer();
  app.listen(3100);
  console.log("Server on port 3100");
}
main();
