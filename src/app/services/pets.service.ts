import { Injectable } from '@angular/core';
import { Pet, PETS } from '../models/pets';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private pets: Pet[] = new Array();

  constructor() {
    //Very important initialization since PETS is an array of objects that have been cast to type pet
    //Relying on this may cause runtime problems
    PETS.forEach((element: Pet) => {
      let pet: Pet = new Pet();
      pet.id = element.id;
      pet.name = element.name;
      pet.gender = element.gender;
      pet.age = element.age;
      pet.neutered = element.neutered;
      pet.vaccinated = element.vaccinated;
      pet.size = element.size;
      pet.image = element.image;
      pet.cartImage = element.cartImage;
      pet.price = element.price;
      pet.description1 = element.description1;
      pet.petCategory = element.petCategory;
      this.pets.push(pet);
    });

    this.pets.sort((a, b) => a.name.localeCompare(b.name));
  }

  
  findAll(): Pet[] {
    return this.pets;
  }

  find(id: string): Pet {
    let i = this.getSelectedIndex(id)
    return i < 0 ? null : this.pets[i];
  }

  findRandomAndExclude(maxNo: number, excludedId: string): Pet[] {
    let total: number
    let copied: Map<number, number> = new Map<number, number>();
    let somePets = [];
    this.pets.forEach((p: Pet) => {
      somePets.push(p);
    })
    //Remove product with provided id from products
    for (var j = 0; j < somePets.length; j++) {
      if (excludedId === somePets[j].id) {
        somePets.splice(j, 1)
        break;
      }
    }
    total = somePets.length;
    let randomPets: Pet[] = [];
    total = maxNo > total ? total : maxNo;
    let i = 0;
    while (i < total) {
      let index = Math.floor((Math.random() * somePets.length))
      if (!copied.has(index)) {
        randomPets.push(somePets[index])
        copied.set(index, index);
        i++;
      } else {
        //Just for documentation sake not really needed
        continue;
      }
    }
    return randomPets;
  }

  findRandom(maxNo: number) {
    let copied: Map<number, number> = new Map<number, number>();
    let total = this.pets.length;
    let randomProducts: Pet[] = [];
    total = maxNo > total ? total : maxNo;
    let i = 0;
    while (i < total) {
      let index = Math.floor((Math.random() * this.pets.length))
      if (!copied.has(index)) {
        randomProducts.push(this.pets[index])
        copied.set(index, index);
        i++;
      } else {
        //Just for documentation sake not really needed
        continue;
      }
    }
    return randomProducts;
  }

  search(id: string): Pet[] {
    let found: Pet[] = [];
    //Assuming all spaces are replaced by +
    let splits = id.split("+");
    for (var i = 0; i < this.pets.length; i++) {
      for (var j = 0; j < splits.length; j++) {
        if (this.pets[i].name.toLowerCase().includes(splits[j].toLowerCase()) || this.pets[i].id.toLowerCase().includes(splits[j].toLowerCase())) {
          found.push(this.pets[i])
          // break out of loop as soon as we get the first match
          break;
        }
      }
    }
    return found;
  }
  
  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.pets.length; i++) {
      if (this.pets[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}