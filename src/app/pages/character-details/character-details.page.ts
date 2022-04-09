import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  public character: any;
  public comicsList: any = [];
  public storiesList: any = [];
  public seriesList: any = [];

  segment: any = "comics";

  page: number = 1;
  pageStory: number = 1;
  pageSeries: number = 1;

  scrollDepthTriggered: boolean = false;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCharacterData(parseInt(id));

    this.getComics(id);
    this.getStories(id);
    this.getSeries(id);

  }

  getCharacterData(id) {

    this.data.getCharacterById(id)
      .then(data => {

        this.character = data.data.data.results[0];
        //console.log("charachterData:" + JSON.stringify(this.character));

      }
      );
  }

  getComics(id) {

    this.data.getComicsList(parseInt(id), 20, 0)
      .then(data => {

        this.comicsList = data.data.data.results;
        //console.log("ComicsList:" + JSON.stringify(this.comicsList));

      }
      );
  }

  getStories(id) {

    this.data.getStoriesList(parseInt(id), 20, 0)
      .then(data => {

        this.storiesList = data.data.data.results;  
        //console.log("StoriesList:" + JSON.stringify(this.storiesList));

      }
      );
  }

  getSeries(id) {

    this.data.getSeriesList(parseInt(id), 20, 0)
      .then(data => {

        this.seriesList = data.data.data.results;
        //console.log("SeriesList:" + JSON.stringify(this.seriesList));

      }
      );
  }


  async logScrolling($event) {

    //console.log($event);

    if ($event.target.localName != "ion-content") {
      return;
    }

    const scrollElement = await $event.target.getScrollElement();

    const currentScrollDepth = $event.detail.scrollTop;
    //console.log({ currentScrollDepth });

    const targetPercent = 60;

    let triggerDepth = ((scrollElement.clientHeight / 100) * targetPercent);
    //console.log({ triggerDepth });

    if (currentScrollDepth > triggerDepth) {
    
      this.scrollDepthTriggered = true;

    } else {

      this.scrollDepthTriggered = false;

    }
  }

}
