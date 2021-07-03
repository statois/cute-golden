import { Deserializable } from "../deserializable";

export class MetaTag implements Deserializable{

    name: string;
    content: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}

export interface MetaTagInterface {
    name: string;
    content: string
}