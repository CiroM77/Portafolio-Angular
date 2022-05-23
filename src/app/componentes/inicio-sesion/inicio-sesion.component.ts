import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) { 
    this.form=this.formBuilder.group(
      {
        email:["",[Validators.required, Validators.email]],
        password:["",[Validators.required, Validators.minLength(8)]],
            deviceld: ["17867868768"],
            deviceType: ["DEVICE_TYPE_ANDROID"],
            notificationToken:["67657575eececc34"]
      }
    )
  }

  ngOnInit(): void {
  }


  get email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("password");
  }
  
  OnEnviar(event:Event) {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data => {
      this.ruta.navigate(["/portafolio"])
    })
  }
  
  


}
