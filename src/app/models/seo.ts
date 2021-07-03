import { Deserializable } from "./deserializable";
import { MetaTag } from "./metaTag";
import { MetaProperty } from "./metaProperty";

export class Seo implements Deserializable {

    title: string;
    description: string;
    tags: MetaTag[] = new Array();
    properties: MetaProperty[] = new Array();
    deserialize(input: any): this {
        Object.assign(this, input);
        this.tags = input.tags.map(meta => new MetaTag().deserialize(meta))
        return this;
    }
} 