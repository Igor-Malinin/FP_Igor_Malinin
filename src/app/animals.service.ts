import {Injectable} from "@angular/core";
import {Animal} from "../entity/Animal";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private animals: Animal[] = [
    {id: 0, type: "cat", name: "Murzik", age: 4, height: 50, weight: 8, color: "black", vaccination: true, displayAdditional: false, display: true},
    {id: 1, type: "dog", name: "Sharik", age: 5, height: 60, weight: 19, color: "gray", vaccination: false, displayAdditional: false, display: true},
    {id: 2, type: "dog", name: "Borya", age: 3, height: 62, weight: 20, color: "brown", vaccination: true, displayAdditional: false, display: true},
    {id: 3, type: "cow", name: "Buryonka", age: 7, height: 130, weight: 500, color: "white, black", vaccination: true, displayAdditional: false, display: true},
    {id: 4, type: "cat", name: "Ryzhyi", age: 6, height: 59, weight: 9, color: "ginger", vaccination: true, displayAdditional: false, display: true},
    {id: 5, type: "cat", name: "Masha", age: 8, height: 54, weight: 8, color: "white", vaccination: true, displayAdditional: false, display: true},
    {id: 6, type: "dog", name: "Bobick", age: 3, height: 55, weight: 14, color: "black, white", vaccination: true, displayAdditional: false, display: true},
    {id: 7, type: "parrot", name: "Jack", age: 1, height: 17, weight: 0.042, color: "green", vaccination: false, displayAdditional: false, display: true},
    {id: 8, type: "mouse", name: "Stepa", age: 1, height: 10, weight: 0.039, color: "white", vaccination: true, displayAdditional: false, display: true},
    {id: 9, type: "snake", name: "Meduza", age: 5, height: 140, weight: 0.6, color: "brown", vaccination: true, displayAdditional: false, display: true},
  ]

  constructor() {}

  getAnimals() {
    return this.animals
  }

  hideAllAdditional() {
    this.animals.map(animal => animal.displayAdditional = false)
  }

  toggleCats() {
    this.animals.filter(animal => {
      if(animal.type ===  'cat')
        animal.display = !animal.display
    })
  }

  setDisplayAdditional(animal: Animal) {
    animal.displayAdditional = !animal.displayAdditional;
  }
}
