import { Car } from "./Car";
import { Engine } from "./Engine";

export interface ICarBuilder {
  setEngine(engine: Engine): ICarBuilder;
  setNumberOfDoors(doors: number): ICarBuilder;
  setColor(color: string): ICarBuilder;
  setBoseSoundSystem(): ICarBuilder;
  addSeatHeating(): ICarBuilder;
  addSteeringWheelHeating(): ICarBuilder;
  addStartStopSystem(): ICarBuilder;
  build(): Car;
}
