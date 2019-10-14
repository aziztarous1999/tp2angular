import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
nom:string ="salma" ; 
  constructor() { }

  ngOnInit() {
  }
age:number=20;
infos()
{
return this.nom +" a pour âge " + this.age;
}

}
