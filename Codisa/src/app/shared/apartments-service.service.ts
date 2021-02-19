import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
/*const httpOptions = {
  headers: new HttpHeaders({
    'Host': 'rtfe-test-default-rtdb.firebaseio.com'
  })
};*/
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApartmentsServiceService {
  name: String;
  constructor(public http: HttpClient) { }


  /******************************************************
     * Author: lbolanos
     * Creation date: 18/02/2021
     * Description: Method to list the images
     *******************************************************/
  _listImagesPage(number) {
    const params = new HttpParams({ fromString: 'name=term' });
    return this.http.request('GET', "https://rtfe-test-default-rtdb.firebaseio.com/property_images/" + number + ".json", { responseType: 'json', params });
  }


  _listApartments(): any {
    const params = new HttpParams({ fromString: 'name=term' });
    return this.http.request('GET', "https://rtfe-test-default-rtdb.firebaseio.com/properties.json", { responseType: 'json', params });
  }

}
