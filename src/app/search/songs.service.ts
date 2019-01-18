import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Tracks } from '../tracks'

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  tracks = []

  rank:number=0

  video=[]

  constructor(private http: HttpClient) {
  }

  // findVideo(title){
  //   interface ApiResponse{
  //     items:any
  //   }
  //   let arr=title.split('')
  //   arr.join('%20')
  //   title=arr[0]
  //   let promise = new Promise((resolve, reject) => {
  //     this.http.get<ApiResponse>(environment.youtubeLink + title + environment.youtubeLink2).toPromise().then(response => {
  //       response['items'].forEach(element => {
  //         let id = element.id.videoId
  //         this.video.push(id) 
  //       })
  //       resolve()
  //     },
  //       err => {
  //         console.log("Video not found");
  //         reject(err);
  //       })
  //   })
  //   return promise
  // }

  buildLink(id){
    return 'http://www.youtube.com/watch?v=' + id
  }

  default() {
    interface ApiResponse {
    tracks: any
    track_name: any
    artist_name: any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.base_url + environment.worldwide + environment.api_key).toPromise().then(response => {
        response.tracks['track'].forEach(element => {
          if (element.name && element.artist.name) {
            let song = new Tracks(0, '', '', '', '')
            this.rank += 1
            song.rank = this.rank
            song.track_name = element.name
            song.artist_name = element.artist.name
            let i_array = element.image
            for (let i in i_array) {
              if (i_array[i].size == 'extralarge') {
                song.image_path = i_array[i]['#text']
              }
            }
            // this.findVideo(element.name)
            let id = this.video[this.rank-1]
            song.video_id = this.buildLink(id)
            console.log(song.video_id)
            this.tracks.push(song)
            console.log(element.name)
            console.log('New Song')
          }
        })
        resolve()
      },
        err => {
          console.log("Nigga not found");
          reject(err);
        })
    })
    this.video.length=0
    this.rank=0
    this.tracks.length = 0
    return promise
  }

  search_country(search_item){
    interface ApiResponse {
      tracks: any
      track_name: any
      artist_name: any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.base_url + environment.country+ search_item + environment.api_key).toPromise().then(response => {
        response.tracks['track'].forEach(element => {
          if (element.name && element.artist.name) {
            let song = new Tracks(0, '', '', '','')
            this.rank += 1
            song.rank = this.rank
            song.track_name = element.name
            song.artist_name = element.artist.name
            let i_array = element.image
            for (let i in i_array) {
              if (i_array[i].size == 'extralarge') {
                song.image_path = i_array[i]['#text']
              }
            }
            this.tracks.push(song)
            console.log('New Song')
          }
        })
        resolve()
      },
        err => {
          console.log("Nigga not found");
          reject(err);
        })
    })
    this.rank = 0
    this.tracks.length = 0
    return promise
  }
}



