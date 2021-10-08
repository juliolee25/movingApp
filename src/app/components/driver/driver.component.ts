import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  drivers: SelectorClase[];

  constructor() { }


  ngOnInit() {    
    
  }

  selecDriver(d: boolean, a: number){
      if(d){
        this.drivers[a].clas = "";
      }
      else{
        this.drivers[a].clas = "selected";
      }
  }

}

export class SelectorClase{

  image: string;
  clase: boolean;
  clas:string;
}
