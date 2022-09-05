import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImagemService {

  imagem = ""

  constructor(private httpClient: HttpClient) { }

  obterImagem(){
    this.httpClient.get('https://jumpcnj.cin.ufpe.br/api/desafio/image/7065/?detail_level=3', {responseType: 'text'})
    .subscribe(svg =>  this.imagem = svg);
    return this.imagem;
  }
}
