import { v4 } from "uuid";

import { IContract } from "../interfaces/IContract";

export default class Contract implements IContract {
    public id: string = v4()

    constructor (
        public owner: string,
        public caregiver: string,
        public pet: string,
        public date: Date,
        id?: string
    ) {
        if (id) this.id = id
    }
}