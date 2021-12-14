import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  terminoBusqueda: string = 'Hola Mundo';
  hayError: boolean = false;

  constructor( private paisService: PaisService){}

  buscar(){
    this.hayError = false;
    console.log('-------'+this.terminoBusqueda);
    this.paisService.buscarPais(this.terminoBusqueda).subscribe( response => {
      console.log(response);
    }, (error) => {
      this.hayError = true;
    });
  }

}
