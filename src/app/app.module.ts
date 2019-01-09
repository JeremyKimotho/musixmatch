import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TracksComponent } from './tracks/tracks.component';
import { MondayFinderPipe } from './monday-finder.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    MondayFinderPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
