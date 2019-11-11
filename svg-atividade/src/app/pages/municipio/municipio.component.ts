import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {

  nomeCidade : string = '';

  constructor() { }

  ngOnInit() {
  }

  getCidadeViewBox() {
    alert(this.nomeCidade);
  }

}
