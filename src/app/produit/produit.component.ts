import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  val1:number;
  val2:number;
  res:number;
  update(e){
    this.val1=e.target.value;
  }
  update2(e){
    this.val2=e.target.value;
  }
  produit(){
    if((this.val1 != null) && (this.val2 != null))
    {
  this.res=Number(this.val1)*Number(this.val2);
  
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
