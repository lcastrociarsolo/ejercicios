function Computadora (ram,cpu,disco,monitor,gpu) {
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;

    this.mostrarDatos = () => {
        console.log(this.ram + ' ' + this.cpu + ' ' +
        this.disco + ' ' +this.monitor + ' ' 
        +(this.gpu?'con gpu':'sin gpu'));
    }
}

let computadoras = [];

computadoras.push(new Computadora('ram1', 'cpu1', 'disco1', 'monitor1', true));
computadoras.push(new Computadora('ram2', 'cpu2', 'disco2', 'monitor2', false));
computadoras.push(new Computadora('ram3', 'cpu3', 'disco3', 'monitor3', true));
computadoras.push(new Computadora('ram4', 'cpu4', 'disco4', 'monitor4', false));
computadoras.push(new Computadora('ram5', 'cpu5', 'disco5', 'monitor5', true));

computadoras.forEach(element => {
    element.mostrarDatos();
});

let compusConGpu = computadoras.filter(comp => comp.gpu);

console.log(compusConGpu);


function litrosNafta(km){
    return km/100 * 2;
}

function costoNafta(litros, costoLitro){
    return litros * costoLitro;
}

let litros1 = litrosNafta(50);
let costo1 = costoNafta(litros1, 100);

console.log('litros '+litros1 + ' costo '+costo1);

let litros2 = litrosNafta(250);
let costo2 = costoNafta(litros2, 300);

console.log('litros '+litros2 + ' costo '+costo2);






