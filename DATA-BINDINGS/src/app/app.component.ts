import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'ALL BINDINGS -';
 
  constructor(){}

  ngOnInit(): void {
    
  }
  // This Declarations Are Only For Interpolation / Angular Expression Method.

  public city : string = 'LONDON (U.K)';

  public getDate():string{
    return new Date().toLocaleDateString();
  }

  public getTime():string{
    return new Date().toLocaleTimeString();
  }
  // -------------------------------------------------------------------------

  // This Declarations Are Only For Attribute Binding Method.
  
  public londonImage : string = 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
  src = 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TE9ORE9OfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
  width = '150px';
  height = '200px';
  // -------------------------------------------------------------------------

  // This Declarations Are Only For The Property binding.
  firsTName:string ='Jaydeep';
  lasTName:string ='Panchal';
  diSAble:boolean = false;
  // ----------------------------------------------------

  // This Declarations Are Only For The Class/Style Binding.
  classstatus:boolean = true;
  stylestatus:string ='red';
  iSActive:boolean = false;
  dynamicclassobject = {
    dynaobjone:true,
    dynaobjtwo:true,
    dynaobjthree:true
  }

  dynamicstyleobject = {
    'border': '1px dashed green',
    'border-width':'10px',
    'background-color':'violet',
    'padding':'20px',
    'margin':'20px',
    'color':'pink'
 }

//  ------------------------------------------------------

// This Declarations Are Only For The Event Binding.
EventData:string='Jaydeep';
clickSave():void{
  this.EventData = ' My Full Name Is Panchal Jaydeep Jagdish ! ';
}

// --------------------------------------------------------------

// This Declarations Are Only For The Two Way Binding.
twoway:any = '';
// --------------------------------------------------------------
}

