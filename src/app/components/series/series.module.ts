import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeriesComponent } from './series.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [SeriesComponent],
  exports: [SeriesComponent]
})
export class SeriesComponentModule {}
