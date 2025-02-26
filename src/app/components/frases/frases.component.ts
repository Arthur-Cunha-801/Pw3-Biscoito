import { Component } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
   frases: string[] = [
    "O céu estava limpo e estrelado.",
    "Ela caminhava pela rua com um sorriso discreto.",
    "O vento soprava forte, fazendo as árvores balançarem.",
    "A chuva chegou de repente, molhando tudo ao redor.",
    "Ele não sabia o que esperar daquele novo desafio.",
    "A música tocava suavemente ao fundo, criando um ambiente acolhedor.",
    "O gato se espreguiçou antes de se acomodar no sofá.",
    "A cidade estava em silêncio, como se todos estivessem esperando algo.",
    "O café quente ajudava a aquecer os corpos e as almas.",
    "O livro que ele leu mudou sua perspectiva sobre o mundo."
  ];
  fraseSorteada: string = "";
  exibir:boolean = true;
public exibirFrase(){
 this.exibir = !this.exibir;
 if(this.exibir || this.fraseSorteada == ""){
  this.fraseSorteada = this.frases[Math.floor(Math.random()* this.frases.length)];
 }


} 
}