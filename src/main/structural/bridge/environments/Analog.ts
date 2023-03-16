import IEnvironment from "./IEnvironment";

export default class Analog implements IEnvironment {
    moveToPosition(position: number) {
        console.log(`moved physically to position ${position}`)
    }
}