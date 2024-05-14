import { v4 } from "uuid";
import { ICaregiver } from "../interfaces/ICaregiver";

export default class Caregiver implements ICaregiver {
    public id: string = v4()

    constructor (
        public email: string,
        public password: string,
        id?: string
    ) {
        if (id) this.id = id;
    }
}
