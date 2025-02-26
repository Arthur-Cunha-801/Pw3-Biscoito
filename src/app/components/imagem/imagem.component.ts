// Arthur Kato e Gabriel Lima
import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
fotoBiscoitoAtual:string = "/biscoito-aberto.png"
public trocaImg() {
  const biscoitoAberto = "/biscoito-aberto.png";
  const biscoito = "/biscoito.png";
  if(this.fotoBiscoitoAtual == biscoitoAberto){
    this.fotoBiscoitoAtual = biscoito;
  }
  else{
    this.fotoBiscoitoAtual = biscoitoAberto;
  }

}
}
