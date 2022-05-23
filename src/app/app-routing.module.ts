import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio/portafolio.component';
const routes: Routes = [
  { path: "portafolio" , component:PortafolioComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path:"**" , redirectTo:"portafolio" , pathMatch:"full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
