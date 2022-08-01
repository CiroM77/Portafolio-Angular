import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Class/persona';
import { PortafolioServiceService } from 'src/app/servicios/portafolio-service.service';


@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
   miPortafolio: any;

  constructor(private datosPortafolio:PortafolioServiceService) { }

  ngOnInit(): void {

    this.datosPortafolio.obtenerDatos().subscribe(Persona => {
      console.log(Persona);
        this.miPortafolio=Persona;
    })

  }

}
