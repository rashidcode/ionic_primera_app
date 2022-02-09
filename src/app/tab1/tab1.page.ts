import { Component, OnInit } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

ngOnInit(){

//debugger;  

let numero = 10;

numero = 20;

numero = numero + 10;

numero = numero + numero - 2;

console.log(numero)
}


}