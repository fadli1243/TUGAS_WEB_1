// let nama = "Budi" //string
// let umur = 25; //number
// let tinggiBadan = 167.3 //float
// let beratBadan; //undifine
// let pacar = null //null

// beratBadan = 55;

// //if else
// //if (pacar == null){
// //    pacar ="jomlo";
// //}else{
// //    pacar ="sudah punya pacar";
// //}

// //swich case
// switch (pacar){
//     case 1:
//         pacar = "suadah punya pacar";
//         break;
//     case 2:
//         pacar = "sudah punya pacar pacar";
//         break;
//     case 3:
//         pacar ="sudah punya banyak pacar";
//         break;
//     default:
//         pacar ="jomlo"
//         break;            
// }

//  //alert (`Hallo nama saya ${nama}, umur saya saat ini $ {umur}, tinggi badan saya sekitar ${tinggiBadan}cm  dengan berat badan saya saat ini ${beratBadan} dan untuk setatus hubungan saya saat ini ${pacar}`);

// console.log (`Hallo nama saya ${nama}, umur saya saat ini $ {umur} tahun, tinggi badan saya sekitar ${tinggiBadan} cm  dengan berat badan saya saat ini ${beratBadan} kg dan untuk setatus hubungan saya saat ini ${pacar}`);

// let saldoAwal = 1200000;
// let saldoTambahan = 20000000;
// let hutang = 8000000;
// let saldoAkhir = saldoAwal + saldoTambahan - hutang;

// console .log(`saldo awal bulan saya sebesar ${saldoAwal} dengan tambahan saldos sebesar ${saldoTambahan}, akan tetapi saya mempunyai hutang pyleter sebesar ${hutang} jadi sisa saldo saya itu sebesar ${saldoAkhir}`);

// //Array
// namaMhs = ["budi","joko","ahamad"];
// namaMhs.push("gina","devi");
// console .log(namaMhs);

// //for
// for(i=0; i<=20; i++){
//     console.log("hey bro!!");
// }

// for (let i = 0; i< namaMhs.length; i++){
//     console.log(namaMhs[i]);
// }


function hitungNilai(){


    //ambil data input
    let nama = document.getElementById("nama").value;
    let nilai = Number(document.getElementById ("nilai").value);

    let hasil ="";

    if (nama==="" || document.getElementById ("nilai").value === ""){
        hasil = "nama dan nilai harus di isi!!";
    }
    else if (nilai < 0 || nilai > 100){
        hasil = "Nilai harus di isi 0-100"
    }
    else if (nilai>= 75){
        hasil = nama + " dinyatakan lulus";
    } else {
        hasil = nama + " dinyatakan tidak lulus";
    }
    document.getElementById("hasil").innerHTML = hasil;
}
    