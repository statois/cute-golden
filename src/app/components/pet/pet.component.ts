import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Pet } from '../../models/pets';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pets.service';
import { CartService } from '../../services/cart.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
// @NgModule({
//   imports:[
//     BrowserModule,
//     CommonModule
//   ]
// })
export class PetComponent implements OnInit {

  pet: Pet = new Pet();
  pets: Pet[] = [];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private petService: PetService,
    private cartService: CartService,
    private titleService: Title) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id: string = params["id"];
      this.pet = this.petService.find(id)
      this.pets = this.petService.findRandomAndExclude(8, id);
      if (!this.pet) {
        this.router.navigate(["/"]);
      }
    })
    this.titleService.setTitle("About " + this.pet.name)
  }

  addToCart() {
    let item: Item = new Item();
    item.pet = this.pet;
    this.cartService.add(item);
    // this.router.navigate(["/checkout/{{this.pet.id}}"])
  }

  printPrice(price : number)
  {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }

}
