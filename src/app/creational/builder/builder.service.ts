export class Car {
    public engine!: string;
    public wheels!: number;
    public color!: string;
  }
  
  export class CarBuilder {
    private car: Car;
  
    constructor() {
      this.car = new Car();
    }
  
    setEngine(engine: string): CarBuilder {
      this.car.engine = engine;
      return this;
    }
  
    setWheels(wheels: number): CarBuilder {
      this.car.wheels = wheels;
      return this;
    }
  
    setColor(color: string): CarBuilder {
      this.car.color = color;
      return this;
    }
  
    build(): Car {
      return this.car;
    }
  }
  
  // Usage
  const car = new CarBuilder()
    .setEngine('V8')
    .setWheels(4)
    .setColor('Red')
    .build();