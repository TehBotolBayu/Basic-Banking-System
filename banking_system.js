
class BankAccount{
    #pin;
    #saldo;
    constructor(nama, rekening, pin, saldo){
        this.nama = nama;
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
    get_saldo(){
        console.log('saldo anda: '+this.#saldo);
    }
}
