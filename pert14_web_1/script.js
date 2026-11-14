// ex function 1
function sapa (nama){
    console.log("Hallo, nama saya " + nama);
}
sapa("Joko");
sapa("Juli");

function perkenalan (nama, usia, alamat){
    console.log ("Nama :" + nama);
    console.log ("usia : " +usia);
    console.log ("alamat : " + alamat);
}


perkenalan ("Alince","24","paris");

function hitungLuas(panjang, lebar){
    return panjang * lebar ;
}

let hasil = hitungLuas(10,5);
console.log("Luas :" + hasil);

const tambah = function(a,b){
    return a + b ;
};
console.log(tambah(10,6));




//object
let mhs = {
    nama : "Budi",
    nim  : "202464578",
    kelas : "05SISE004"
};
mhs.semester = "5"; // add data
mhs.nama = "Coki"; // change data 
console.log (mhs);
console.log(mhs.nama);


// method
let mobil = {
    merek : "Honda",
    model : "Civic",
    warna : "Hitam",
    tahun : "2026",

    tampilkanInfo : function () {
        console.log("Merek : " + this.merek);
        console.log("Model : " + this.model);
        console.log("Warna : " + this.warna);

    },
};

mobil.tampilkanInfo();

let kalkulator = {
    tambah : function(a,b){
        return a + b;
    },
    kurang : function(a,b){
        return a - b;
    },
};
console.log(kalkulator.tambah(10,9));
console.log(kalkulator.kurang(40,8));



// study kasus menghitung hasil akhir dan menentukan gret

let mahasiswa = {
    nama : "Jule",
    nim :"5267878198",
    kelas :"05SISE077",
    prodi :"Sistem Informasi",
    nilaiTugas : 80, // 30%
    nilaiUts : 70, //30%
    nilaiUas : 80, // 30%

    hitungNilaiAkhir : function (){
        return this.nilaiTugas * 0,3 + this.
        nilaiUts * 0,3 + this.nilaiUas *  0,4;

    },


    tampilkanData : function (){
        console.log("Nama : " + this.nama);
        console.log("Nim : " + this.nim);
        console.log("kelas : " + this.kelas);
        console.log("Program Studi : " + this.prodi);
        console.log("Nilai Akhir : " + this.hitungNilaiAkhir());
    },
};


function tentukanGrade (nilai){
    if (nilai>= 85){
        return "A";
    }else if (nilai >=75){
        return "B";
    }else if (nilai >=65){
        return "C";
    }else{
        return "D";
    }
}

mahasiswa.tampilkanData();
let nilaiAkhir= mahasiswa.hitungNilaiAkhir();
console.log("grade : " + tentukanGrade(nilaiAkhir));