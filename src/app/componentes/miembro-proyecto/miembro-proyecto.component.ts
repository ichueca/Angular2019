import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-miembro-proyecto',
  templateUrl: './miembro-proyecto.component.html',
  styles: []
})
export class MiembroProyectoComponent implements OnInit {
  @Input() empleado:Empleado;
  constructor() {
    this.empleado = new Empleado(1,"Juan","López","Contabilidad","H");
   }

  ngOnInit() {
  }

}
