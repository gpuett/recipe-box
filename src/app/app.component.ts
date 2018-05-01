import { Component } from '@angular/core';
//import { Recipe } from './recipe/recipe.component';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  recipes: Recipe[] = [
    new Recipe('Cake', ['flour', ' butter', ' sugar'], ['mix', ' bake'], 3, "./../assets/cake.jpg"),
    new Recipe('Smoothie', ['fruit', ' yogurt'], ['put in blender',' blend'], 2, "./../assets/smoothie.jpg"),
    new Recipe('Cereal', ['cereal', ' milk'], ['put in bowl'], 1, "./../assets/cereal.jpg")
  ];

  selectedRecipe = null;
  showRecipe = null;
  addRecipe = false;
  priorityColor(recipe) {
    if (recipe.priority === 3) {
      return "bg-danger";
    } else if (recipe.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  displayRecipe(recipe) {
    this.showRecipe = recipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  displayAddRecipe() {
    this.addRecipe = true;
  }

  submitRecipe(recipeName, ingredients, directions) {
    let newRecipe = new Recipe(recipeName, ingredients.split(','), directions.split(','), 3, "./../assets/cake.jpg");
    this.recipes.push(newRecipe);
    this.addRecipe = false;
  }

}
