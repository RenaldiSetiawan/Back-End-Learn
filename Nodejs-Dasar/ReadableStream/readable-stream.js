/* Teknik Stream ini dapat menangani kasus baca tulis berkas, komunikasi jaringan, atau beban kerja apapun 
   agar dapat berjalan dengan lebih efisien. */

//  readable stream dengan menggunakan method createReadStream() dari core module fs.

const fs = require('fs');
 
const readableStream = fs.createReadStream('C:/belajar-back-end/Nodejs-back-end/ReadableStream/article.txt', {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});

// Fungsi createReadStream() menerima dua argumen. Yang pertama adalah lokasi berkas yang hendak dibaca, kedua adalah objek konfigurasi
// Di dalam objek konfigurasi kita bisa menetapkan ukuran buffer melalui properti highWaterMark
// 