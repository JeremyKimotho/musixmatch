import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
