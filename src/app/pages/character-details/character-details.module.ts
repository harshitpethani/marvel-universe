import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterDetailsPageRoutingModule } from './character-details-routing.module';

import { CharacterDetailsPage } from './character-details.page';

import {ComicComponentModule} from "../../components/comic/comic.module";
import {StoryComponentModule} from "../../components/story/story.module";
import {SeriesComponentModule} from "../../components/series/series.module";

import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDetailsPageRoutingModule,
    ComicComponentModule,
    StoryComponentModule,
    SeriesComponentModule,
    NgxPaginationModule
  ],
  declarations: [CharacterDetailsPage]
})
export class CharacterDetailsPageModule {}
