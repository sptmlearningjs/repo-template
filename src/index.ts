import { AppDataSource } from "../src/data-source.js";
import { User } from "./entity/User.js";
import Fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "./routes.js";

export const server: FastifyInstance = Fastify({
  logger: true,
});

const PORT = 9001;

await server.register(userRoutes);

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
    const start = async () => {
      try {
        await server.listen({ port: PORT });
        console.log("server is running on port", PORT);
      } catch (err) {
        server.log.error(err);
        process.exit(1);
      }
    };
    await start();
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
