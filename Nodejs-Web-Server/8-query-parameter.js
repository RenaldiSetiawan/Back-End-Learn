// Data yang dikirim melalui query memiliki format key=value.
// Teknik ini umum digunakan pada permintaan yang membutuhkan kueri dari client, contohnya seperti pencarian dan filter data. 

// Di Hapi, Anda bisa mendapatkan nilai dari query parameter melalui request.query.
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const { name, location } = request.query;
        return `Hello, ${name} from ${location}`;
    },
 });