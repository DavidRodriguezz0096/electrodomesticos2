var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(nombre, precioBase, color, consumoEnergetico, peso) {
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
    }
    // Métodos get y set
    Electrodomestico.prototype.getNombre = function () {
        return this.nombre;
    };
    Electrodomestico.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Electrodomestico.prototype.getPrecioBase = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.setPrecioBase = function (precioBase) {
        this.precioBase = precioBase;
    };
    Electrodomestico.prototype.getColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.setColor = function (color) {
        this.color = color;
    };
    Electrodomestico.prototype.getConsumoEnergetico = function () {
        return this.consumoEnergetico;
    };
    Electrodomestico.prototype.setConsumoEnergetico = function (consumoEnergetico) {
        this.consumoEnergetico = consumoEnergetico;
    };
    Electrodomestico.prototype.getPeso = function () {
        return this.peso;
    };
    Electrodomestico.prototype.setPeso = function (peso) {
        this.peso = peso;
    };
    // Método para comprobar si el electrodoméstico es de bajo consumo
    Electrodomestico.prototype.esDeBajoConsumo = function () {
        return this.consumoEnergetico === 'A' || this.consumoEnergetico === 'B';
    };
    // Método para calcular el balance
    Electrodomestico.prototype.calcularBalance = function () {
        return this.precioBase / this.peso;
    };
    // Método para indicar si es un producto de alta gama
    Electrodomestico.prototype.esDeAltaGama = function () {
        return this.calcularBalance() > 3;
    };
    return Electrodomestico;
}());
// Crear instancias de Electrodomestico
var electrodomestico1 = new Electrodomestico('Televisor Philco', 1000, 'Negro', 'A', 15);
var electrodomestico2 = new Electrodomestico('Lavarropas Drean', 800, 'Blanco', 'B', 30);
// Interactuar con las instancias creadas
console.log(electrodomestico1.getNombre()); // 'Televisor Philco'
console.log(electrodomestico1.getPrecioBase()); // 1000
console.log(electrodomestico1.esDeBajoConsumo()); // true
console.log(electrodomestico1.esDeAltaGama()); // false
console.log(electrodomestico2.getNombre()); // ´Lavarropas Drean´
console.log(electrodomestico2.getColor()); // 'Blanco'
console.log(electrodomestico2.getConsumoEnergetico()); // 'B'
console.log(electrodomestico2.getPeso()); // 30
console.log(electrodomestico2.calcularBalance()); // 26.666666666666668
