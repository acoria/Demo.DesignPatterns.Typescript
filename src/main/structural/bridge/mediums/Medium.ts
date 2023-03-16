import IEnvironment from "../environments/IEnvironment";
import IMedium from "./IMedium";

export default abstract class Medium implements IMedium {
    constructor(private environment: IEnvironment) { }
    abstract getCover()
    goToPosition(position: number) {
        this.environment.moveToPosition(position);
    };
}