const sayHello = (nama, umur) => {
    console.log(`nama saya ${nama}, umur saya ${umur}`)
}

const waktu = 'Senin';

const dataPegawai = {
    nama : 'Exsazors',
    umur : 30, 

    cetakNamaPegawai(){
        return `Haloo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun. \n`;
    }
}

class Human{
    constructor(){
        console.log('Objek Human telah dibuat! \n');
    }
}

// module.exports.functionHello = sayHello;
// module.exports.functionWaktu = waktu;
// module.exports.pegawai = dataPegawai;
// module.exports.Human = Human;

module.exports = { sayHello, waktu, dataPegawai, Human};