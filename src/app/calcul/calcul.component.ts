import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {

  constructor() { }
val1:number;
val2:number;
som:number;
update(e){
  this.val1=e.target.value;
}
update2(e){
  this.val2=e.target.value;
}
somme(){
  if((this.val1 != null) && (this.val2 != null))
  {
this.som=Number(this.val1)+Number(this.val2);

  }
}

  ngOnInit() {
  }

}
