import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'anadir-diagnostico',
  templateUrl: './anadir-diagnostico.component.html',
  styleUrls: ['./anadir-diagnostico.component.css']
})
export class AnadirDiagnosticoComponent implements OnInit {
  private edited: boolean;
  private diagnostico: any={};
  private categories: any=["Malo","Bueno"];
  constructor(private router: Router,private conexionService: ConexionService) { }

  ngOnInit() {
    this.edited=false;
  }

  back() {
    this.router.navigateByUrl('/listaDeDiagnosticos');
  }

  generateId() {
    return Math.floor(Math.random() * 100000) + 100;
  }

  agregarDiagnostico(){
      let usuarioLogeado = JSON.parse(localStorage.getItem("UserLogged"));
      this.diagnostico.auth= usuarioLogeado.auth;
      this.diagnostico.iden= this.generateId();
      this.conexionService.anadirDiagnostico(this.diagnostico);
      this.router.navigateByUrl('/listaDeDiagnosticos');
  }

  clear(){
    this.diagnostico={};
  }

}
