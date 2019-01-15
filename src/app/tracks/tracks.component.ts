import { Component, OnInit, Input } from '@angular/core';
import { Tracks } from '../tracks';
import { SongsService } from '../search/songs.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  tracks = [];

  constructor(private home: SongsService, private search: SongsService) { }

  ngOnInit() {
    let message= 'Worldwide charts for the week of'
    this.home.default()
    this.tracks = this.home.tracks
  }
}
