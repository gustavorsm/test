import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-modificar-analisis',
  templateUrl: './modificar-analisis.component.html',
  styleUrls: ['./modificar-analisis.component.css']
})
export class ModificarAnalisisComponent implements OnInit {
  private analisis:any={};
  private listaDeAnalisis:any=[];
  private edited:boolean;
  private analisisId:any;
  constructor(private route: ActivatedRoute,private conexionService: ConexionService,private router: Router) { }

  ngOnInit() {
    this.inicializar();
    let found = this.route.params.subscribe(params => {
      let auth = +params['iden'];
      this.analisisId=auth;
   });
   this.edited=false;
  }
  inicializar(){
    this.conexionService.listaDeAnalisis().subscribe(analisis=>{
      this.listaDeAnalisis = analisis;
      this.searchExpense();
    });
  }
  searchExpense(){
    for(let i = 0; i<this.listaDeAnalisis.length;i++)
      if(this.listaDeAnalisis[i].iden==this.analisisId){
        this.analisis = this.listaDeAnalisis[i];
      }
  }

  back() {
    this.router.navigateByUrl('/listaDeAnalisis');
  }

  modificarAnalisis(){
    this.conexionService.modificarAnalisis(this.analisis);
    this.router.navigateByUrl('/listaDeAnalisis');
  }

  clear(){
    this.analisis={};
  }


}
