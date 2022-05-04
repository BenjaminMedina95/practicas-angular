import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'Starlord'];

    heroeBorrado: string='';

  borrarHeroe (){
    this.heroeBorrado= this.heroes.pop() || '';
   
  }
}

