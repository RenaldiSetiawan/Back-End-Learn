// Node.js menyediakan core modules fs yang dapat mempermudah kita dalam mengakses filesystem
// Untuk mengakses berkas pada komputer kita dapat menggunakan method fs.readFile().
/*  Method ini menerima tiga argumen yakni: 
    lokasi berkas, 
    encoding, dan 
    callback function yang akan terpanggil bila berkas berhasil/gagal diakses. */

const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile("todo.txt", "UTF-8", fileReadCallback);

// versi synchronous fs.readFileSync(). 
const data = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data);
