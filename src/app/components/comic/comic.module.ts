import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComicComponent } from './comic.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ComicComponent],
  exports: [ComicComponent]
})
export class ComicComponentModule {}
