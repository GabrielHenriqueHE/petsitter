import { v4 } from "uuid";
import { IOwner } from "../interfaces/IOwner";

export default class Owner implements IOwner {
    public id: string = v4()
    
    constructor (
        public email: string,
        public password: string,
        id?: string
    ) {
        if (id) this.id = id;
    }
}
