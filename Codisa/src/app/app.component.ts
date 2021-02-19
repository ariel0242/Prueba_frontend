import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApartmentsServiceService } from '../app/shared/apartments-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  title = 'Codisa';
  public lat: number = 10.057947;
  public lng: number = -84.434022;
  dataAppartmens: any;
  dataImages: any;
  datatemp: string;
  ID: any = 1;
  imageActive: any;
  constructor(private apartmentsServiceService: ApartmentsServiceService) { }

  ngOnInit(): void {
    this.listAppartmentInformation();
    this.listImagesPage(0);
  }



  /******************************************************
     * Author: lbolanos
     * Creation date: 18/02/2021
     * Description: Method to list the appartment information
     *******************************************************/
  listAppartmentInformation() {

    this.apartmentsServiceService._listApartments().pipe(takeUntil(this.unsubscribe$)).subscribe(
      data => {
        this.dataAppartmens = data;
        var me = this;
        me.dataAppartmens = Object.keys(me.dataAppartmens).map(function (key) { return me.dataAppartmens[key]; });
        this.dataAppartmens = me.dataAppartmens.filter(x => x.address != undefined);
        console.log(this.dataAppartmens)
      }, error => {

      })
  }

  /******************************************************
     * Author: lbolanos
     * Creation date: 18/02/2021
     * Description: Method to list the images of the page
     *******************************************************/
  listImagesPage(number) {
    this.apartmentsServiceService._listImagesPage(String(number)).pipe(takeUntil(this.unsubscribe$)).subscribe(
      data => {

        this.dataImages = data;
        console.log(this.dataImages.images)
        this.dataImages = this.dataImages.images;
        debugger
        this.imageActive =  this.dataImages[0]; 
        console.log(this.imageActive)
      }, error => {

        console.log(error)
      })
  }
  /******************************************************
      * Author: lbolanos
      * Creation date: 18/02/2021
      * Description: Method that slide the appartment catalog
      *******************************************************/
  goToNextCatalog(appartmentId) {
    if (appartmentId + 1 == 6) {
      this.ID = 1;
      appartmentId = 1;
      this.listImagesPage(this.ID-1);
    } else {
      this.ID = appartmentId + 1;
      this.listImagesPage(this.ID-1);
    }

  }

}
