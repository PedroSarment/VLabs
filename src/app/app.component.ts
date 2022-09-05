import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImagemService } from './imagem.service';
import { InfoService } from './info.service';
import {IInfo } from './IInfo'





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'v-labs';
  imagem = '';
  informacoes: IInfo = {
   
  }

  constructor(public imagemService: ImagemService , public sanitizer: DomSanitizer, public infoService: InfoService) { }
  
  obterImagem(){
    
   this.imagem = this.imagemService.obterImagem();

  };

  obterInfos(){
    const newUnidade = {"unidade_id": 7065};
    this.infoService.obterInfos(newUnidade).subscribe(data => this.informacoes = data.infos);
  }


  

}
