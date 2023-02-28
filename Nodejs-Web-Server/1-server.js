// --y pada akhir perintah untuk menjawab seluruh pertanyaan yang diberikan NPM ketika membuat proyek baru dengan jawaban/nilai default.
// npm init --y
// how to run : npm run start --> start dari script package.json

console.log('Halo, kita akan belajar membuat server');

// Membuat HTTP Server
// method ini berfungsi untuk membuat HTTP server yang merupakan instance dari http.server.
const http = require('http'); 

// Request listener memiliki 2 parameter, yakni request dan response
const requestListener = (request, response) => {
    /* response merupakan objek yang digunakan untuk menanggapi permintaan. 
    Melalui objek ini kita bisa menentukan data yang diberikan, informasi response lainnya. */
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;
    // response.end('<h1>Halo HTTP Server!</h1>');

    const { method } = request;
 
    if(method === 'GET') {
        response.end('<h1>req GET OK!</h1>');
    }
 
    if(method === 'POST') {
        response.end('<h1>req POST OK!</h1>');
    }
 
    if(method === 'PUT') {
        response.end('<h1>req PUT OK!</h1>');
    }
 
    if(method === 'DELETE') {
        response.end('<h1>req DELET OK!</h1>');
    }
    
};
 
const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/*  Method listen() dapat menerima 4 parameter, berikut detailnya:

    --> port (number) : jalur yang digunakan untuk mengakses HTTP server.
    --> hostname (string) : nama domain yang digunakan oleh HTTP server.
    --> backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
    --> listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).
*/

// USE CMD
// curl -X GET http://localhost:5000
// curl -X POST http://localhost:5000
// curl -X PUT http://localhost:5000
// curl -X DELETE http://localhost:5000


// Server With Hapi
const Hapi = require('@hapi/hapi');
const routes = require('./6-routes');
 
const init = async () => {
    const server = Hapi.server({
        port: 5001,
        host: 'localhost',
    });
 
    server.route(routes);
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();