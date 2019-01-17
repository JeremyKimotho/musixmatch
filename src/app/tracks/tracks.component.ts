import { Component, OnInit, Input } from '@angular/core';
import { Tracks } from '../tracks';
import { SongsService } from '../search/songs.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  
  title='musixmatch'

  tracks = [];

  link ='http://www.youtube.com/watch?v='

  argentina='argentina'
  brazil='brazil'
  china='china'
  colombia='colombia'
  cuba='cuba'
  flag='united%20states'
  india='india' 
  japan='japan' 
  kenya='kenya'
  nigeria='nigeria'
  sa='south%20africa'
  uk='united%20kingdom'
  country=''
  
  constructor(private home: SongsService, private search: SongsService) { }

  ngOnInit() {
    let message= 'Worldwide charts for the week of'
    this.home.default()
    this.tracks = this.home.tracks
  }

  loadSearch(search_item){
    this.country = search_item.toUpperCase()
    let message = 'Charts of' + this.country + 'for the week of'
    this.search.search_country(search_item)
    this.tracks = this.search.tracks
  }

  prepareLink(id){
    return this.link+id
  }
}
