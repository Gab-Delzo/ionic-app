import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
ciudad: any;
humedad: any;
tempMin: any;
tempMax: any;
viento: any;
clima: any;
descripcion: any;
bucar() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }

}
