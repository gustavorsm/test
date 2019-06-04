import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeConsultasComponent } from './lista-consultas/lista-consultas.component';
import { ListaDeAnalisisComponent } from './lista-analisis/lista-analisis.component';
import { ListaDeDiagnosticosComponent } from './lista-diagnosticos/lista-diagnosticos.component';
import { ListaDeTratamientosComponent } from './lista-tratamientos/lista-tratamientos.component';
import { HistorialComponent } from './historial/historial.component';
import { AnadirAnalisisComponent } from './anadir-analisis/anadir-analisis.component';
import { AnadirConsultaComponent } from './anadir-consulta/anadir-consulta.component';
import { AnadirDiagnosticoComponent } from './anadir-diagnostico/anadir-diagnostico.component';
import { AnadirTratamientoComponent } from './anadir-tratamiento/anadir-tratamiento.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ConexionService } from './services/conexion.service';
import { LoginComponent } from './login/login.component';
import { AuthAccountGuard } from './guards/authAccount.guard';
import { AuthUserGuard } from './guards/authUser.guard';

import { ModificarAnalisisComponent } from './modificar-analisis/modificar-analisis.component';
import { ModificarConsultaComponent } from './modificar-consulta/modificar-consulta.component';
import { ModificarTratamientoComponent } from './modificar-tratamiento/modificar-tratamiento.component';
import { ModificarDiagnosticoComponent } from './modificar-diagnostico/modificar-diagnostico.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { MostrarUsuarioComponent } from './ver-usuario/ver-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeConsultasComponent,
    ListaDeAnalisisComponent,
    ListaDeDiagnosticosComponent,
    ListaDeTratamientosComponent,
    ModificarAnalisisComponent,
    ModificarConsultaComponent,
    ModificarTratamientoComponent,
    ModificarDiagnosticoComponent,
    HistorialComponent,
    AnadirAnalisisComponent,
    AnadirConsultaComponent,
    AnadirDiagnosticoComponent,
    AnadirTratamientoComponent,
    RegistrarUsuarioComponent,
    LoginComponent,
    MostrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [ConexionService, AuthAccountGuard, AuthUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
