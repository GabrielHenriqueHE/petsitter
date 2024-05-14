import { v4 } from "uuid";

import { IPet, PetType } from "../interfaces/IPet";

export default class Pet implements IPet {
    public id: string = v4()

    constructor (
        public name: string,
        public type: PetType,
        public owner: string,
        id?: string
    ) {
        if (id) this.id = id
    }
}
