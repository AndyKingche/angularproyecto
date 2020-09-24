import { Injectable } from '@angular/core';
import { Series } from '../models/Serie';
import { HttpClient }from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  API_URI = "https://kingche-apifinal-series.herokuapp.com/serie"

  constructor(private http:HttpClient) {

   }
   getSeries(){
    return this.http.get(`${this.API_URI}`);
    }
    getSerie(id: number){
      return this.http.get(`${this.API_URI}/${id}`)

    }
    
    saveSerie(serie:Series ):Observable<Series>{
    return this.http.post (`${this.API_URI}/`, serie);
    }
    deleteSerie (id: number){
    return this.http.delete (`${this.API_URI}/${id}`);
    }
    updateSerie(id: number, updateSerie: Series): Observable<Series>{
    return this.http.put (`${this.API_URI}/${id}`,updateSerie);
    
    }
  
}
