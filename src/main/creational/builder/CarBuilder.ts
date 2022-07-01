import { Car } from "./Car";
import { Engine } from "./Engine";
import { ICarBuilder } from "./ICarBuilder";

export class CarBuilder implements ICarBuilder {
  engine?: Engine;
  numberOfDoors?: number;
  color?: string;
  childSafetyActive?: boolean;
  soundSystem?: string;
  seatHeating?: string;
  steeringWheelHeating?: string;
  startStopSystem?: string;

  setEngine(engine: Engine): ICarBuilder {
    this.engine = engine;
    return this;
  }
  setNumberOfDoors(doors: number): ICarBuilder {
    this.numberOfDoors = doors;
    return this;
  }
  setColor(color: string): ICarBuilder {
    this.color = color;
    return this;
  }
  setBoseSoundSystem(): ICarBuilder {
    this.soundSystem = "Bose";
    return this;
  }
  addSeatHeating(): ICarBuilder {
    this.seatHeating = "SeatHeating";
    return this;
  }
  addSteeringWheelHeating(): ICarBuilder {
    this.steeringWheelHeating = "SteeringWheelHeating";
    return this;
  }
  addStartStopSystem(): ICarBuilder {
    this.startStopSystem = "StartStopSystem";
    return this;
  }
  build(): Car {
    return null
  }

  build2() {
    let age: number
    age ??= 3

    this.engine = this.engine ?? Engine.DIESEL;
    console.log(this.engine.toString());
  }
  //   build(): Car {
  //     this.engine ?? Engine.DIESEL;
  //     return Car();
  //   }
}
