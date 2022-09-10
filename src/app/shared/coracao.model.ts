export class Coracao {
  constructor(
    public cheio: boolean,
    public urlCoracaoCheio: string = '/assets/img/coracao_cheio.png',
    public urlCoracaoVazio: string = '/assets/img/coracao_vazio.png'
  ) {}

  public exibeCoracao(): string {
    return this.cheio ? this.urlCoracaoCheio : this.urlCoracaoVazio;
  }
}
