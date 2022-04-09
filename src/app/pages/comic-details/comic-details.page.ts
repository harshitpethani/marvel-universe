import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.page.html',
  styleUrls: ['./comic-details.page.scss'],
})
export class ComicDetailsPage implements OnInit {

  public comic: any;

  constructor( private data: DataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getComicData(parseInt(id));

  }

  getComicData(id) {

    this.data.getComicById(id)
      .then(data => {

        this.comic = data.data.data.results[0];
        //console.log("comicData:" + JSON.stringify(this.comic));

      }
      );
  }

}
