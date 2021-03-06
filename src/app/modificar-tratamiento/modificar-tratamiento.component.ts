import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-modificar-tratamiento',
  templateUrl: './modificar-tratamiento.component.html',
  styleUrls: ['./modificar-tratamiento.component.css']
})
export class ModificarTratamientoComponent implements OnInit {
  private tratamiento:any={};
  private listaDeTratamientos:any=[];
  private edited:boolean;
  private tratamientoId:any;
  constructor(private route: ActivatedRoute,private conexionService: ConexionService,private router: Router) { }

  ngOnInit() {
    this.inicializar();
    let found = this.route.params.subscribe(params => {
      let auth = +params['iden'];
      this.tratamientoId=auth;
   });
   this.edited=false;
  }
  inicializar(){
    this.conexionService.listaDeTratamientos().subscribe(tratamiento=>{
      this.listaDeTratamientos = tratamiento;
      this.searchExpense();
    });
  }
  searchExpense(){
    for(let i = 0; i<this.listaDeTratamientos.length;i++)
      if(this.listaDeTratamientos[i].iden==this.tratamientoId){
        this.tratamiento = this.listaDeTratamientos[i];
      }
  }

  back() {
    this.router.navigateByUrl('/listaDeTratamientos');
  }

  modificarTratamiento(){
    this.conexionService.modificarTratamiento(this.tratamiento);
    this.router.navigateByUrl('/listaDeTratamientos');
  }

  clear(){
    this.tratamiento={};
  }


}
