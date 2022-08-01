import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Class/educacion';
import { PortafolioServiceService } from 'src/app/servicios/portafolio-service.service';
import { EducacionComponent } from '../educacion/educacion.component';



@Component({
  selector: 'app-create-edu',
  templateUrl: './create-edu.component.html',
  styleUrls: ['./create-edu.component.css']
})
export class CreateEduComponent implements OnInit {

  educacion: Educacion= new Educacion();
  
  constructor(private datosPortafolio: PortafolioServiceService,
              private router:Router) { }

  ngOnInit(): void {

  }

  onSubmitForm(){
    console.log(this.educacion);
    this.commitEducacion();
  }

  commitEducacion(){
    this.datosPortafolio.crearEdu(this.educacion).subscribe( 
      miPortafolio =>{
        console.log(miPortafolio);
        
        this.redirectPortafolio();
      },
      error => console.log(error));
  }

  redirectPortafolio(){
    this.router.navigate(['/portafolio']);
  }
}


