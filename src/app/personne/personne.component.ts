import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
nom:string="Naruto";
image:string="assets/naruto.jpg";
age:number=16;

c:boolean=true;


  constructor() { 
this.c=!(this.age<18);
  }

  ngOnInit() {
  }
text="aziz";
/*update(e)
{
  this.text=e.target.value;
}

*/
}