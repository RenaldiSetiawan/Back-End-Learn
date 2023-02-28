// Node.js menyediakan EventEmitter class yang merupakan member events core module:

const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

/*  Setiap instance dari EventEmitter akan memiliki fungsi on.
    Pada fungsi tersebut, kita dapat menentukan aksi berdasarkan sebuah kejadian */

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);

// setiap instance dari EventEmitter juga memiliki fungsi emit() yang berguna untuk membangkitkan event.
myEventEmitter.emit('coffee-order', { name: 'Tubruk' });


// Atau Anda bisa membuat satu fungsi khusus untuk menangani event. 
// Biasanya fungsi ini memiliki nama ‘handler’ atau ‘listener’ pada akhir penamaanya.
const firstName = (name) => {
    console.log(`Hallo nama saya ${name}`);
};
 
const address = (alamat) => {
    console.log(`Saya tinggal di ${alamat}`);
}

const onDataListner = ({ name, alamat }) => {
    firstName(name);
    address(alamat);
}
 
myEventEmitter.on('data', onDataListner);
 
myEventEmitter.emit('data', { name: 'Renal', alamat: 'Jakarta' });