/*  Cobalah tampilkan teks pada berkas notes.txt pada console menggunakan filesystem. 
    Jika TODO sudah selesai dikerjakan, eksekusi berkas index.jsz
*/

const fs = require('fs');

try {
    const data = fs.readFileSync('C:/belajar-back-end/Nodejs-back-end/Filesystem/notes.txt', 'utf8')
    console.log(data);
} catch (error) {
    console.error(err);
}