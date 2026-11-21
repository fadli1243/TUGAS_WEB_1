//tanpa perulangan
console.log("Belajar perulangan");
console.log("Belajar perulangan");
console.log("Belajar perulangan");
console.log("Belajar perulangan");
console.log("Belajar perulangan");

for (let i=1; i <= 5; i++) {
    console.log("perulangan dengan for: "+i);
}

let angka = 1;
while (angka <=5) {
    console.log ("perulangan dengan while: " +angka);
    angka++;
}

let x =6;
do {
    console.log("perulangan dengan do while :" + x);
    x++;
}while (x <= 5);

let mahasiswa = ["Budi", "Agus", "Suci", "Citra"];
for (let i=0; i<=mahasiswa.length; i ++) {
    console.log(mahasiswa[i]);
}


let buah = ["Apel", "Anggur", "Melon", "Semangka",];
for (item of buah) {
    console.log(item);
}


let motor = {
    merek: "Honda",
    model: "Vario",
    warna: "Hitam",
};
for (let data in motor) {
    console.log(data);
}

for (let y =1; y<=10; y++){
    if (y===7){
        break;
    }
    console.log(y);
}


for ( let z= 1; z<=10; z++){
    if (z===7){
        continue;
    }
    console.log(z);
}


//contoh menghitung nilai mahasiswa
let nilai = (90,80,100,60,78);
let totalNilai =0;
for (let i =0; i<nilai.length;i++){
    totalNilai +=nilai[i];
}
let rataRata = totalNilai/nilai.length;

console.log("Total Nilai :" +totalNilai);
console.log("Rata-rata Nila :" +rataRata);

//contoh kasus belanja
let barang = ["Baju", "Tas", "Sepatu", "Jam"];
let hargaBarang = [200000,1400000,5400000,500000];

let totalPembelian = 0;

console.log("===DAFTAR BELANJA===");

for (let i=0; i<barang.length; i++){
    console.log(barang[i] +"Rp." +hargaBarang[i]);

    totalPembelian += hargaBarang[i];
}

console.log("================");
console.log("Total Belanja :"+ totalPembelian);

let saldoAwal= 470000;
let tabunganBulanan =100000;
let jumlahBulanan = 18;

console.log("=== SIMULASI TABUNGAN MAHASISWA===");

let saldo = saldoAwal;

for (let bulan =1; bulan <jumlahBulanan; bulan++){
    saldo = saldo + tabunganBulanan;

    console.log("Bulan ke-" + bulan + "Saldo Rp." + saldo);
}
console.log("Total Tabungan : Rp." + saldo);
    
