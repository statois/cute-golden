import { Deserializable } from "../deserializable";

export class PropertyTag implements Deserializable{

    property: string;
    content: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}

export interface MetaTagInterface {
    property: string;
    content: string
}