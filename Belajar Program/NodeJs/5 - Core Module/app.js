// Core module
// Materi File System

const fs = require('fs');

// Menuliskan string ke file (synchronous)
// try{
    fs.writeFileSync('test.txt', 'Ini ada text dibuat dengan synchronous')
// } catch(error){
//     console.log(error)
// }


// Membuat file menggunakan asynchronous
// fs.writeFile('data/test.txt', 'Hello World', (err) => { console.log(err)});