import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() color: string = '#283747';
  @Input() titulo: string | undefined;
  saludo = "buenas tardes"
  comision = " A"

  constructor() { }
  
  ngOnInit() {}

  miEvento()
  {
    console.log(this.saludo + this.comision)
  }
}
