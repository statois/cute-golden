import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pets';
import { PetService } from '../../services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: Pet[] = new Array()
  private pathToAssets: string = "../../assets/";


  constructor(private productService: PetService) {
    
  }

  ngOnInit() {
    this.pets = this.productService.findAll();
  }
}
