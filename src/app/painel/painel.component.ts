import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  public rodadaFrase?: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() finalizaPartida = new EventEmitter<string>();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {}

  public atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement>event.target).value.trim();
  }

  public verificaResposta(): void {
    if (this.resposta !== this.rodadaFrase!.frasePtBr.trim()) {
      if (this.tentativas === 0)
        return this.finalizaPartida.emit('Você perdeu :S');

      this.tentativas--;
      this.atualizaRodada();

      return;
    }

    this.rodada++;
    this.progresso += 100 / this.frases.length;

    if (this.rodada === this.frases.length)
      return this.finalizaPartida.emit('Você venceu! :D');

    this.atualizaRodada();
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
