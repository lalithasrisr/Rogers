import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackingComponent } from './app.packing';
import { MyfilterPipe } from './myfilter.pipe';


@NgModule({
  declarations: [
    PackingComponent,
    AppComponent,
    MyfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PackingComponent]
})
export class AppModule { }
