var saldo = 0;
tulis_saldo();

function tambahSaldo(){
    let tambah = parseInt(window.prompt("Masukkan nominal penambahan saldo"));
    if(tambah){
        saldo = saldo + tambah; 
    }
    tulis_saldo();
}

function kurangiSaldo(){
    let kurang = parseInt(window.prompt("Masukkan nominal pengurangan saldo"));
    
    if(kurang){
        if(saldo-kurang < 0){
            alert("Maaf saldo anda kurang!");
            return;
        }
        saldo = saldo - kurang; 
    }
    tulis_saldo();
}

function tulis_saldo(){
    var c = document.getElementById("saldo")
    c.innerText = saldo
    console.log(`Saldo anda saat ini : ${saldo}`);
}