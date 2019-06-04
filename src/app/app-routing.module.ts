import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDeAnalisisComponent } from './lista-analisis/lista-analisis.component';
import { ListaDeConsultasComponent } from './lista-consultas/lista-consultas.component';
import { ListaDeDiagnosticosComponent } from './lista-diagnosticos/lista-diagnosticos.component';
import { ListaDeTratamientosComponent } from './lista-tratamientos/lista-tratamientos.component';
import { HistorialComponent } from './historial/historial.component';
import { AnadirAnalisisComponent } from './anadir-analisis/anadir-analisis.component';
import { AnadirConsultaComponent } from './anadir-consulta/anadir-consulta.component';
import { AnadirDiagnosticoComponent } from './anadir-diagnostico/anadir-diagnostico.component';
import { AnadirTratamientoComponent } from './anadir-tratamiento/anadir-tratamiento.component';
import { ModificarAnalisisComponent } from './modificar-analisis/modificar-analisis.component';
import { ModificarConsultaComponent } from './modificar-consulta/modificar-consulta.component';
import { ModificarTratamientoComponent } from './modificar-tratamiento/modificar-tratamiento.component';
import { ModificarDiagnosticoComponent } from './modificar-diagnostico/modificar-diagnostico.component';
import { LoginComponent } from './login/login.component';
import { AuthAccountGuard } from './guards/authAccount.guard';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { AuthUserGuard } from './guards/authUser.guard';
import { MostrarUsuarioComponent } from './ver-usuario/ver-usuario.component';
const routes: Routes = [
  { path: '', redirectTo: '/historial', pathMatch: 'full', canActivate: [AuthAccountGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'listaDeAnalisis', component: ListaDeAnalisisComponent },
  { path: 'listaDeConsultas', component: ListaDeConsultasComponent },
  { path: 'listaDeDiagnosticos', component: ListaDeDiagnosticosComponent },
  { path: 'listaDeTratamientos', component: ListaDeTratamientosComponent },
  { path: 'registrarUsuario', component: RegistrarUsuarioComponent },
  { path: 'anadirAnalisis', component: AnadirAnalisisComponent },
  { path: 'anadirConsulta', component: AnadirConsultaComponent },
  { path: 'anadirDiagnostico', component: AnadirDiagnosticoComponent },
  { path: 'anadirTratamiento', component: AnadirTratamientoComponent },
  { path: 'verUsuario', component: MostrarUsuarioComponent },
  { path: 'modificarAnalisis/:iden', component: ModificarAnalisisComponent },
  { path: 'modificarConsulta/:iden', component: ModificarConsultaComponent },
  { path: 'modificarTratamiento/:iden', component: ModificarTratamientoComponent },
  { path: 'modificarDiagnostico/:iden', component: ModificarDiagnosticoComponent },
  { path: 'historial', component: HistorialComponent, canActivate: [AuthAccountGuard] },
  //{ path: 'viewUser/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
