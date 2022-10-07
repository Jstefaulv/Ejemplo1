import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {
  
  name! : string;
  urlImage! : string;

  constructor(private pokeService : PokemonService) {  }

  buscar(){
    this.pokeService.getPokemon(this.name).subscribe( (x:any) =>{
      console.log(x);
      this.urlImage = x.sprites.front_default
    })
  }

}
