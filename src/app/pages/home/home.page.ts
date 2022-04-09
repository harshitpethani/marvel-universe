import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  chrachterList: any[] = [];
  startindex: number = 0;
  limit: number = 20;
  searchText: string = '';

  constructor(private data: DataService,
    private routerOutlet: IonRouterOutlet) {

  }

  ngOnInit() {

    this.getCharachterList(true);

  }


  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }


  searchChange($event) {

    this.searchText = $event.target.value;
    this.getCharachterList(true);

  }

  //get Marvel Charachters

  getCharachterList(init: Boolean) {

    if (init) {

      this.startindex = 0;
      this.chrachterList = [];

    }

    this.data.getCharacterList(this.limit, this.startindex, this.searchText)
      .then(data => {

        this.chrachterList.push(...data.data.data.results);
        console.log("list:" + JSON.stringify(this.chrachterList));

      }
      );

  }

  scrollInfinite(event) {
    this.startindex += 20;
    this.getCharachterList(false);
   
    setTimeout(() => {   
      event.target.complete();
    }, 500);
  }

}
