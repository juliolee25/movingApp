import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Box } from 'src/app/models/box.models';
import { Helper } from 'src/app/models/helper-models';
import { Van } from 'src/app/models/van.models';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdministracionComponent implements OnInit {

  boxArray: Box[] = []; 
  
  vanArray: Van[] = []; 

  helperArray: Helper[] = []; 

  clonedBox: Box;
  clonedVan: Van;
  clonedHelper: Van;

  constructor() { 
    this.iniciarBox();
    this.iniciarVan();
    this.iniciarHelper();
    this.clonedBox = {
      id: 0,
      name: '',
      price: 0,
      hight: 0,
      with: 0,
      depth: 0,
      packing: 0
    };
  }

  ngOnInit(): void {
  }

  iniciarBox(){
    let box0: Box = {
      id: 1,
      name: 'Basic Box',
      price: 0,
      hight: 0,
      with: 0,
      depth: 0,
      packing: 0,

    }
    let box1: Box = {
      id: 2,
      name: 'Middle Box',
      price: 0,
      hight: 0,
      with: 0,
      depth: 0,
      packing: 0,

    }
    let box2: Box = {
      id: 3,
      name: 'Large Box',
      price: 0,
      hight: 0,
      with: 0,
      depth: 0,
      packing: 0,

    }
    let box3: Box = {
      id: 4,
      name: 'Extra Large Box',
      price: 0,
      hight: 0,
      with: 0,
      depth: 0,
      packing: 0,

    }
    this.boxArray.push(box0);
    this.boxArray.push(box1);
    this.boxArray.push(box2);
    this.boxArray.push(box3);
  }

  iniciarVan(){
    let van0: Van = {
      id: 1,
      name: 'Basic Van',
      price: 0,
      hight: 0,
      with: 0,
      depth: 0,   

    }
    let van1: Van = {
      id: 2,
      name: 'Middle Van',
      price: 0,
      hight: 0,
      with: 0,
      depth: 0,    

    }
    let van2: Van = {
      id: 2,
      name: 'Large Van',
      price: 0,
      hight: 0,
      with: 0,
      depth: 0,
      

    }
    let van3: Van = {
      id: 3,
      name: 'Extra Large Van',
      price: 0,
      hight: 0,
      with: 0,
      depth: 0,
      

    }
    this.vanArray.push(van0);
    this.vanArray.push(van1);
    this.vanArray.push(van2);
    this.vanArray.push(van3);
  }

  iniciarHelper(){
    let helper0: Helper = {
      id: 1,
      name: 'Any Helper',
      price: 0,
      cantidad: 0, 
      description: '',

    }
    let helper1: Helper = {
      id: 2,
      name: 'Two Helper',
      price: 0,
      cantidad: 0,   
      description: '',
    }
    let helper2: Helper = {
      id: 2,
      name: 'Large Van',
      price: 0,
      cantidad: 0,
      description: '',
    }
    let helper3: Helper = {
      id: 3,
      name: 'Extra Large Van',
      price: 0,      
      cantidad: 0,
      description: '',
    }
    this.helperArray.push(helper0);
    this.helperArray.push(helper1);
    this.helperArray.push(helper2);
    this.helperArray.push(helper3);
  }

  onRowEditInitBox(box: Box){
    this.clonedBox = box;
  }

  onRowEditSaveBox(box: Box){}

  onRowEditCancelBox(box: Box){}

  onRowEditInitVan(van: Van){
   
  }

  onRowEditSaveVan(van: Van){}

  onRowEditCancelVan(van: Van){}

  onRowEditInitHelper(helper: Helper){
   
  }

  onRowEditSaveHelper(helper: Helper){}

  onRowEditCancelHelper(helper: Helper){}


}
