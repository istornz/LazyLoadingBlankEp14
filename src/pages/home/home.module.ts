// Angular core
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// Page
import { HomePage } from './home';

@NgModule({
  declarations: [ HomePage ],
  imports: [ IonicPageModule.forChild(HomePage) ],
  exports: [ HomePage ]
})
export class HomePageModule { }