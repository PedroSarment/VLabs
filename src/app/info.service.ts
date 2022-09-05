import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IInfos } from './IInfos'
import {Unidade } from './Unidade'



@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: HttpClient) { }

  obterInfos(unidade: Unidade){
    return this.httpClient.post<IInfos>('https://jumpcnj.cin.ufpe.br/api/desafio/infos/', unidade);
  }
}
