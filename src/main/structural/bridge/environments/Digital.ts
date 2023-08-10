import IEnvironment from "./IEnvironment";

export default class Digital implements IEnvironment {
    moveToPosition(position: number) {
        console.log(`wound back or forth to position ${position}`)
    }
}