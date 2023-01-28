import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SquareComponent} from './square/square.component';
import {RouterOutlet} from "@angular/router";
import {BordComponent} from './bord/bord.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BordComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
