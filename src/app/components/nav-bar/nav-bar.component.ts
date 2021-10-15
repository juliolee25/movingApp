import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  menuIcon: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  negarInput(){
    this.menuIcon = false;
  }
}
