import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pets';
import { PetService } from '../../services/pets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pets: Pet[] = new Array()
  private pathToAssets: string = "../../assets/";

  constructor(private productService: PetService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.pets = productService.search(params["id"]);
    })
  }

  ngOnInit() {
  }

}
