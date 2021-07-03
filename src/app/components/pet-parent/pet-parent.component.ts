import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pets';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../../services/pets.service';

@Component({
  selector: 'app-pet-parent',
  templateUrl: './pet-parent.component.html',
  styleUrls: ['./pet-parent.component.scss']
})
export class PetParentComponent implements OnInit {

  pet: Pet = new Pet();

  constructor(private router: Router, private petService: PetService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id: string = params["id"];
      this.pet = this.petService.find(id)
      if (!this.pet) {
        this.router.navigate(["/"]);
      }
      else {
        this.router.navigate(["./child/" + id], { relativeTo: this.route, skipLocationChange: true });
      }
    })
  }

}
