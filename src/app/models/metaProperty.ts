import { Deserializable } from "./deserializable";

export class MetaProperty implements Deserializable{

    property: string;
    content: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}

export interface MetaPropertyInterface {
    property: string;
    content: string
}