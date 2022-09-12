import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public partidaEmAndamento: Boolean = true;
  public mensagem?: string;

  public finalizaPartida(mensagem: string): void {
    this.partidaEmAndamento = false;

    this.mensagem = mensagem;
  }

  public reiniciarJogo(): void {
    this.partidaEmAndamento = true;
  }
}
