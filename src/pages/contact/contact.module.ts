// Angular core
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// Page
import { ContactPage } from './contact';

@NgModule({
  declarations: [ ContactPage ],
  imports: [ IonicPageModule.forChild(ContactPage) ],
  exports: [ ContactPage ]
})
export class ContactPageModule { }