// instal npm install @hapi/hapi
// menggunakan modul tersebut.

const Hapi = require('@hapi/hapi');

// dasar kode dalam membuat HTTP server pada Hapi:
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}
 
init();