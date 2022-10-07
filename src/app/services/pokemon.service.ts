import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //se proporciona en la carpeta APPModule
})
export class PokemonService {

  private url: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }

  getPokemon(name: string){
    //ecmaquote
    return this.http.get(`${this.url}/${name}`);
  }
}
