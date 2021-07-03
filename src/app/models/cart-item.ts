import { Pet } from "./pets";
import { Deserializable } from "./deserializable";

export class CartItem implements Deserializable{
    pet: Pet;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
