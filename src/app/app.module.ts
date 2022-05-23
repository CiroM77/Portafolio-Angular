import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeMiComponent } from './componentes/acercaDeMi/acerca-de-mi/acerca-de-mi.component';
import { BannerComponent } from './componentes/Banner/banner/banner.component';
import { ContactoComponent } from './componentes/contacto/contacto/contacto.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades/habilidades.component';
import { NavbarComponent } from './componentes/navbar/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer/footer.component';
import { PortafolioServiceService } from './servicios/portafolio-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio/portafolio.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';
import { EducacionComponent } from './componentes/educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HabilidadesComponent,
    AcercaDeMiComponent,
    ContactoComponent,
    FooterComponent,
    InicioSesionComponent,
    PortafolioComponent,
    EducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [PortafolioServiceService,
  { provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
