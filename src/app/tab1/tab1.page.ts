import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private consulta: ConsultaService) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  productos: any[] = [];
  obtenerProductos(): void{this.consulta.getProductos().subscribe((resp: Object) => {console.log(resp); this.productos = resp as any[];})}

}
