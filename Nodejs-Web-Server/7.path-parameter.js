// pada properti path terdapat bagian path yang ditulis {username}. 
// Itu berarti, server memberikan bagian teks tersebut untuk client manfaatkan sebagai parameter. 
server.route({
    method: 'GET',
    path: '/users/{username}',
    handler: (request, h) => {
        const { username } = request.params;
        return `Hello, ${username}!`;
    },
});