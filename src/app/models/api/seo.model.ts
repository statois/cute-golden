import { Deserializable } from "../deserializable";
import { MetaTag } from "./metaTag.model";
import { PropertyTag } from "./propertyTag.model";

export class Seo implements Deserializable {

    title: string;
    description: string;
    metaTags: MetaTag[] = new Array();
    propertyTags: PropertyTag[] = new Array();
    deserialize(input: any): this {
        Object.assign(this, input);
        this.metaTags = input.metaTags.map(meta => new MetaTag().deserialize(meta))
        this.propertyTags = input.propertyTags.map(prop => new MetaTag().deserialize(prop))
        return this;
    }
} 