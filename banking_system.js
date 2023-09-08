class DataNasabah{
    constructor(nama, pekerjaan, nik, kelamin, usia){
        this.nama = nama;
        this.pekerjaan = pekerjaan;
        this.nik = nik;
        this.kelamin = kelamin;
        this.usia = usia;
    }
    get_data_diri(){
        console.log("Nama: "+this.nama);
        console.log("Pekerjaan: "+this.pekerjaan);
        console.log("NIK: "+this.nik);
        console.log("Kelamin: "+this.kelamin);
        console.log("Usia: "+this.usia);
    }
    set_nama(nama){
        this.nama = nama;
    }
    set_pekerjaan(pekerjaan){
        this.pekerjaan = pekerjaan;
    }
    set_nik(nik){
        this.nik = nik;
    }
    set_kelamin(kelamin){
        this.kelamin = kelamin;
    }
    set_usia(usia){
        this.usia = usia;
    }
}

class BankAccount extends DataNasabah{
    #pin;
    #saldo;
    constructor(nama, pekerjaan, nik, kelamin, usia, rekening, pin, saldo){
        super(nama, pekerjaan, nik, kelamin, usia);
        this.rekening = rekening;
        this.#pin = pin;
        this.#saldo = saldo;
        console.log('Akun anda berhasil dibuat');
    }
    deposit(pin, amount){
        if (this.#pin != pin){
            return console.log('PIN anda salah');
        }
        if(amount < 0) {
            return console.log("Masukkan nilai positif");
        }
        console.log('Memproses transaksi...');
        setTimeout(() => {
            this.#saldo += amount;
            console.log('Transaksi berhasil, saldo anda saat ini: '+this.#saldo);
        }, 500)
    }
    withdraw(pin, amount){
        if (this.#pin != pin){
            return console.log('PIN anda salah');
        }
        if(amount < 0) {
            return console.log("Masukkan nilai positif");
        }
        if (this.#saldo - amount < 0){
            return console.log("Maaf saldo anda kurang!");
        }
        console.log('Memproses transaksi...');
        setTimeout(() => {
            this.#saldo -= amount;
            console.log('Transaksi berhasil, saldo anda saat ini: '+this.#saldo);
        }, 500)
    }
    ubah_pin(pin, pinbaru){
        if(pin != this.#pin){
            return console.log('PIN anda salah');
        }
        this.#pin = pinbaru;
    }
    get_saldo(){
        console.log('saldo anda: '+this.#saldo);
    }
}

