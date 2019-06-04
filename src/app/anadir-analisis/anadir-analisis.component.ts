import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'anadir-analisis',
  templateUrl: './anadir-analisis.component.html',
  styleUrls: ['./anadir-analisis.component.css']
})
export class AnadirAnalisisComponent implements OnInit {
  private edited: boolean;
  private analisis: any={};
  private categories: any=["Fatal","Saludable","Normal"];
  constructor(private router: Router,private conexionService: ConexionService) { }

  ngOnInit() {
    this.edited=false;
  }

  back() {
    this.router.navigateByUrl('/listaDeAnalisis');
  }

  generateId() {
    return Math.floor(Math.random() * 100000) + 100;
  }

  agregarAnalisis(){
      let usuarioLogeado = JSON.parse(localStorage.getItem("UserLogged"));
      this.analisis.auth= usuarioLogeado.auth;
      this.analisis.iden= this.generateId();
      this.conexionService.anadirAnalisis(this.analisis);
      this.router.navigateByUrl('/listaDeAnalisis');
  }

  clear(){
    this.analisis={};
  }

}
