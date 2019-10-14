import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabNb=[10,9,6,14];
titre:string="Operation sur un tableau" ;
minimum()
{ let min=this.tabNb[0];

  for (let a of this.tabNb)
{
 if(a<min)
min=a;
 
 
 }  
return min ;
}
maximum()
{ let max=this.tabNb[0];

  for (let a of this.tabNb)
{
 if(a>max)
max=a;
 
 
 }  
return max ;
}
moyenne()
{ let res=0;

  for (let a of this.tabNb)
{
res=res+a;
 
 }  
 let moy = res / this.tabNb.length;
return moy ;
}
/*
name="aziz";
disvalue=true;
f1(){
this.disvalue=!this.disvalue;
}*/

}
