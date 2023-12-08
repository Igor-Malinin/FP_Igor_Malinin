import {Component, OnInit} from '@angular/core';
import {Animal} from "../entity/Animal";
import {AnimalsService} from "./animals.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  hide: boolean = true

  constructor(private animalsService: AnimalsService) {
  }

  ngOnInit(): void {
    console.log(this.animalsService)
  }

  getAnimals() {
    return this.animalsService.getAnimals()
  }

  toggleCats() {
    this.hide =! this.hide
    this.animalsService.toggleCats()
  }

  hideAllAdditional() {
    this.animalsService.hideAllAdditional()
  }

  toggleAnimalAdditional(animal: Animal, event: Event) {
    event.stopPropagation();
    this.animalsService.setDisplayAdditional(animal)
  }
}
