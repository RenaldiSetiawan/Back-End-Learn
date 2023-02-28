/* Routing pada Hapi tidak dilakukan di dalam request handler seperti cara native. 
Namun, ia memanfaatkan objek route configuration yang disimpan pada method server.route().  */
const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

// Routes with server hapi > 1.server.js
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },

    // 7. Path Parameter
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            return `Hello, ${name}!`;
        },
    },

    // 8. Query Parameters --> http://localhost:5001/favorite/nasi?lang=id
    {
        method: 'GET',
        path: '/favorite/{food?}',
        handler: (request, h) => {
            const { food = "stranger" } = request.params;
            const { lang } = request.query;

            if (lang === 'id') {
                return `Saya suka, ${food}!`;
            }
            return `I Like a, ${food}!`;
        },
    },

    //
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        },
    },

];

module.exports = routes;