import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit {
  public instrucao: string = 'Traduza a expressão: ';

  public frases: Frase[] = FRASES;

  public rodada: number = 0;

  public resposta?: string;

  public rodadaFrase: Frase;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit(): void {}

  public atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement>event.target).value.trim();
  }

  public verificaResposta(): void {
    if (this.resposta !== this.rodadaFrase.frasePtBr.trim()) return;

    ++this.rodada;
    this.rodadaFrase = this.frases[this.rodada];
  }
}
