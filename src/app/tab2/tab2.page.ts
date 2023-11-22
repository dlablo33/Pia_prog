import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(private fireService: FireserviceService) { }
  ngOnInit() {

  }

}

