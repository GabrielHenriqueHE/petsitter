export enum PetType {
    dog = "dog",
    cat = "cat",
    parrot = "parrot"
}

export interface IPet {
    id: string
    name: string
    type: PetType
    owner: string
}