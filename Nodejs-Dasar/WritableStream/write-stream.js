// Untuk membuat writable stream dalam menulis berkas gunakanlah method createWriteStream() dari core module fs.

const fs = require('fs');
 
const writableStream = fs.createWriteStream('C:/belajar-back-end/Nodejs-back-end/WritableStream/output.txt');

// Lalu untuk menuliskan data pada writable stream, gunakan method write().
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end();
