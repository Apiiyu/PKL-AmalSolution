// Script Synchronous
const getUserSync = (id) => {
    // let nama = '';
    // if( id === 1 ){
    //     nama = 'Exsazors';
    // } else{
    //     nama = 'Razors';
    // }

    const nama = id === 1 ? 'Exsazors' : 'Razors';
    return { id, nama};
}



// Script Asynchronous
const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;
    
    setTimeout(() => {
        const nama = id === 1 ? 'Avoid' : 'Baymax';
        cb({ id, nama });
    }, time)
}

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});

const halo = "Hello World";