import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Class/educacion';
import { PortafolioServiceService } from 'src/app/servicios/portafolio-service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  miEducacion: any;

  constructor(private datosPortafolio:PortafolioServiceService,
              private router: Router) { }

  ngOnInit(): void {

    this.datosPortafolio.obtenerDatosEdu().subscribe(Educacion => {
      console.log(Educacion);
        this.miEducacion=Educacion;
    })

    // crearEdu(id){
      
    //   this.router.navigate(['createEdu', id]);
    // }
  
    // deleteEdu(id: Number){
    //   this.datosPortafolio.deleteEdu(id).subscribe( 
    //     Educacion => {
    //     console.log(Educacion);
        
    //     this.datosPortafolio.obtenerDatosEdu();
    //   })
    // }
  }

}





