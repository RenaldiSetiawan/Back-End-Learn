const { chunk } = require("lodash");

const requestListener = (request, response) => {
    let body = []; // body dan inisialisasikan nilainya dengan array kosong. Ini berfungsi untuk menampung buffer pada stream.

    //  ketika event data terjadi pada request, kita isi array body dengan chunk (potongan data) yang dibawa callback function pada event tersebut.
    request.on('data', (chunk) => {
        body.push(chunk);
    });

    // Di sinilah kita mengubah variabel body yang sebelumnya menampung buffer menjadi data sebenarnya dalam bentuk string 
    // melalui perintah Buffer.concat(body).toString().
    request.on('end', () => {
        body = Buffer.concat(body).toString();
    });
};