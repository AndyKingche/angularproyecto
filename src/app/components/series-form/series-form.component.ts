import { Component, HostBinding,OnInit } from '@angular/core';
import { Series } from '../../models/Serie';
import {SeriesService } from '../../services/series.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.css']
})
export class SeriesFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  series : Series ={
    nombre: '',
    descripcion: '',
    protagonistas: ' '
  };
  edit: boolean = false;

  constructor(private seriesService: SeriesService, private router: Router,private activeroute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeroute.snapshot.params;
    console.log(params);
    if(params.id){
      this.seriesService.getSerie(params.id).subscribe(
        res =>{
          if(res!= null){
            console.log(res);
            this.series = res; // luego ponemos eso
            this.edit = true;

          }else{
            this.router.navigate(['/series']);
          }
          
        },
        err => console.log("hay error "+ err)
      )
    }
  }

  saveNewP(){
    console.log(this.series);
    this.seriesService.saveSerie(this.series).subscribe(

      res => {
        console.log("res : "+ res);
        //this.router.navigate(['/provincia']);
        this.series.nombre=' ';
        this.series.protagonistas = ' ';
        this.series.descripcion = ' ';
      },
      err => console.log("err : "+ err)
    );
  }

  updateP(){ 
    console.log("este es el actualizar "+ this.series);
    this.seriesService.updateSerie(this.series.id,this.series).subscribe(
      res => {
        console.log("res: "+res);
        this.series.nombre=' ';
        this.series.protagonistas = ' ';
        this.series.descripcion = ' ';
      },
      err => console.log("err: "+err)
    )
    console.log(this.series);
  }
 }


