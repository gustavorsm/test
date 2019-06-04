import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-modificar-consulta',
  templateUrl: './modificar-consulta.component.html',
  styleUrls: ['./modificar-consulta.component.css']
})
export class ModificarConsultaComponent implements OnInit {
  private consulta:any={};
  private listaDeConsultas:any=[];
  private edited:boolean;
  private consultaId:any;
  constructor(private route: ActivatedRoute,private conexionService: ConexionService,private router: Router) { }

  ngOnInit() {
    this.inizializarConsulta();
    let found = this.route.params.subscribe(params => {
      let auth = +params['iden'];
      this.consultaId=auth;
   });
   this.edited=false;
  }
  inizializarConsulta(){
    this.conexionService.listaDeConsultas().subscribe(consulta=>{
      this.listaDeConsultas = consulta;
      this.searchExpense();
    });
  }
  searchExpense(){
    for(let i = 0; i<this.listaDeConsultas.length;i++)
      if(this.listaDeConsultas[i].iden==this.consultaId){
        this.consulta = this.listaDeConsultas[i];
      }
  }

  back() {
    this.router.navigateByUrl('/listaDeConsultas');
  }

  modificarConsulta(){
    this.conexionService.modificarConsulta(this.consulta);
    this.router.navigateByUrl('/listaDeConsultas');
  }

  clear(){
    this.consulta={};
  }


}
