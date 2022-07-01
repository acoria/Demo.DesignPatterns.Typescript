import { Engine } from "./Engine";

export class Car {
  private engine: Engine;
  private numberOfDoors: number;
  private color: string;
  private childSafetyActive: boolean;
  private soundSystem: string;
  private seatHeating: string;
  private steeringWheelHeating: string;
  private startStopSystem: string;

  constructor(
    engine: Engine,
    numberOfDoors: number,
    color: string,
    childSafetyActive: boolean,
    soundSystem: string,
    seatHeating?: string,
    steeringWheelHeating?: string,
    startStopSystem?: string
  ) {
    this.engine = engine;
    this.numberOfDoors = numberOfDoors;
    this.color = color;
    this.childSafetyActive = childSafetyActive;
    this.soundSystem = soundSystem;
    this.seatHeating = seatHeating;
    this.steeringWheelHeating = steeringWheelHeating;
    this.startStopSystem = startStopSystem;
  }
}