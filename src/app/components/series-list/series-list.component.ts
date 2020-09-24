import { Component, HostBinding,OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  series : any = [];
  constructor(private seriesServices: SeriesService) { }

  ngOnInit() {
   this.getSeries();
  }

  getSeries(){
    this.seriesServices.getSeries()
    .subscribe(
      res => {
        this.series = res },
      err => console.error(err)
    )
  }
  borrarS(id:number){
    this.seriesServices.deleteSerie(id).subscribe(
      res => {
        console.log("res: "+res);
        this.getSeries();
      },
      err => console.log("err: "+err)
    )

  }

}
