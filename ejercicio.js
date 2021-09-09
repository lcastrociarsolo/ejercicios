

function CuentaBancaria (nombreTitular, apellidoTitular, numeroCuenta){
    this.nombreTitular = nombreTitular;
    this.apellidoTitular = apellidoTitular;
    this.numeroCuenta = numeroCuenta;
    this.saldo = 0;
    this.movimientos = [];

    this.nombreCompletoTitular = () => this.nombreTitular + ' ' + this.apellidoTitular;
    this.debitarDinero  = (monto) => {
        if(!this.saldo || this.saldo - monto <= 0){
            console.log('No se pudo debitar, saldo insuficiente');
        }else{
            this.saldo -= monto;
            this.movimientos.push({tipo:'debito', monto:monto});  
        }
    }
    this.acreditarDinero = (monto) => {
        this.saldo += monto;
        this.movimientos.push({tipo:'credito', monto:monto});  
    }
    this.mostarSaldo = () => this.saldo;
    this.mostrarMovimientos = () => {
        this.movimientos.forEach(mov=> { 
            console.log(mov.tipo, mov.monto)
        })
    };
    this.mostartTotales = (debito) => {
        let tot = 0;
        this.movimientos.forEach(mov=> { 
            if(debito && mov.tipo == 'debito') tot += mov.monto;
            if(!debito && mov.tipo == 'credito') tot += mov.monto;
        })
        console.log('totales '+(debito?'debito ':'credito')+' total', tot);
    }
    this.mostarPorDebitoCredito = (debito) => {
        let texto = 'movimientos '+(debito?'debito ':'credito ');
        this.movimientos.filter(mov=> debito?mov.tipo=='debito':mov.tipo=='credito').forEach(mov=>{
            texto+= mov.monto + ', ';
        })
        console.log(texto);
    }
}

let cuenta1 = new CuentaBancaria('Nombre1', 'Apellido1','34235');
let cuenta2 = new CuentaBancaria('Nombre2', 'Apellido2','34456');
let cuenta3 = new CuentaBancaria('Nombre3', 'Apellido3','22345');

console.log('saldo cuenta1', cuenta1.saldo);

cuenta1.debitarDinero(50);
cuenta1.acreditarDinero(500);
console.log('saldo cuenta1', cuenta1.saldo);
cuenta1.debitarDinero(200);
console.log('saldo cuenta1', cuenta1.saldo);
cuenta1.debitarDinero(20);
console.log('saldo cuenta1', cuenta1.saldo);
cuenta1.debitarDinero(50);
console.log('saldo cuenta1', cuenta1.saldo);
cuenta1.acreditarDinero(150);
console.log('saldo final cuenta1', cuenta1.saldo);

cuenta1.mostarPorDebitoCredito(true);
cuenta1.mostarPorDebitoCredito(false);
cuenta1.mostartTotales(true);
cuenta1.mostartTotales(false);