import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class ApartmentsServiceService {
  name: String;
  constructor(public http: HttpClient) { }


  /******************************************************
     * Author: lbolanos
     * Creation date: 18/02/2021
     * Description: metodo que trae la lista de imagenes 
     *******************************************************/
  _listImagesPage(number) {
    const params = new HttpParams({ fromString: 'name=term' });
    return this.http.request('GET', "https://rtfe-test-default-rtdb.firebaseio.com/property_images/" + number + ".json", { responseType: 'json', params });
  }

 /******************************************************
     * Author: lbolanos
     * Creation date: 18/02/2021
     * Description: metodo que trae la lista de apartamentos
     *******************************************************/
  _listApartments(): any {
    const params = new HttpParams({ fromString: 'name=term' });
    return this.http.request('GET', "https://rtfe-test-default-rtdb.firebaseio.com/properties.json", { responseType: 'json', params });
  }

}
