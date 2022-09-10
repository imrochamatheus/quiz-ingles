import { Component, OnInit } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css'],
})
export class TentativasComponent implements OnInit {
  public coracoes: Coracao[] = Array(3).fill(new Coracao(true));

  constructor() {}

  ngOnInit(): void {}
}
