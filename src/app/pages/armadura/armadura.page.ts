import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armadura',
  templateUrl: './armadura.page.html',
  styleUrls: ['./armadura.page.scss'],
})
export class ArmaduraPage implements OnInit {

  constructor() { }

  items: string[] = ['Armadura 1: $500', 'Armadura 2: $750', 'Armadura 3: $1050'];
  username: string = '';
  isLoggedIn: boolean = false; 
  ngOnInit() {
  }

}
