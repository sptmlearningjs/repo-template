async function bookRoutes (fastify: any, options: any, done: any) {

    fastify.get('/', getBooksOpts); // controller method

    fastify.post('/', postBookOpts); // another controller method

    done();
}

export { bookRoutes };
