import fastify from 'fastify'
import { bookRoutes } from "./routes/books";

const server = fastify({logger: true})
server.register(bookRoutes)

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Started server at ${address}`);
});
