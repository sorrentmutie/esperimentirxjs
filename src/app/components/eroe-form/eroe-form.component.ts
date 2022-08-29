import { Component } from '@angular/core';
import { Eroe } from 'src/app/models/eroe';

@Component({
  selector: 'app-eroe-form',
  templateUrl: './eroe-form.component.html',
  styleUrls: ['./eroe-form.component.css']
})
export class EroeFormComponent  {

  modello = new Eroe(1, "Mr.Fantastic", "Magia", "Salvatore Sorrentino");
  poteri = ["Magia", "Genio", "Forza", "Invisibilità"];


  mySubmit(): void {
    console.log("Submit effettuato");
    console.log(this.modello);
  }

  resetForm(): void {
    this.modello = new Eroe(2,"","","");
  }
}
