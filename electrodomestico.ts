class Electrodomestico {
  private nombre: string;
  private precioBase: number;
  private color: string;
  private consumoEnergetico: string;
  private peso: number;

  constructor(nombre: string, precioBase: number, color: string, consumoEnergetico: string, peso: number) {
    this.nombre = nombre;
    this.precioBase = precioBase;
    this.color = color;
    this.consumoEnergetico = consumoEnergetico;
    this.peso = peso;
  }

  // Métodos get y set
  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getPrecioBase(): number {
    return this.precioBase;
  }

  public setPrecioBase(precioBase: number): void {
    this.precioBase = precioBase;
  }

  public getColor(): string {
    return this.color;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public getConsumoEnergetico(): string {
    return this.consumoEnergetico;
  }

  public setConsumoEnergetico(consumoEnergetico: string): void {
    this.consumoEnergetico = consumoEnergetico;
  }

  public getPeso(): number {
    return this.peso;
  }

  public setPeso(peso: number): void {
    this.peso = peso;
  }

  // Método para comprobar si el electrodoméstico es de bajo consumo
  public esDeBajoConsumo(): boolean {
    return this.consumoEnergetico === 'A' || this.consumoEnergetico === 'B';
  }

  // Método para calcular el balance
  public calcularBalance(): number {
    return this.precioBase / this.peso;
  }

  // Método para indicar si es un producto de alta gama
  public esDeAltaGama(): boolean {
    return this.calcularBalance() > 3;
  }
}

// Crear instancias de Electrodomestico
const electrodomestico1 = new Electrodomestico('Televisor Philco', 1000, 'Negro', 'A', 15);
const electrodomestico2 = new Electrodomestico('Lavarropas Drean', 800, 'Blanco', 'B', 30);

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
