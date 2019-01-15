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

  constructor(private http: HttpClient) {
   }

  default() {
    interface ApiResponse {
    tracks: any
    track_name: any
    artist_name: any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.base_url + environment.worldwide + '1' + environment.api_key).toPromise().then(response => {
        response.tracks['track'].forEach(element => {
          if(this.tracks.length>=50){
            let promise = new Promise((resolve, reject) =>{
              this.http.get<ApiResponse>(environment.base_url + environment.worldwide + '2' + environment.api_key).toPromise().then(response =>{
                response.tracks['track'].forEach(element =>{
                  if (element.name && element.artist.name) {
                    let song = new Tracks(0, '', '', '')
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
                    console.log('New Song P2')
                  }
                })
                resolve()
              },
              err => {
                console.log('Nigga not found page 2')
                reject(err);
                })
            })
            return promise
          }else{
            if (element.name && element.artist.name) {
              let song = new Tracks(0, '', '', '')
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
          }
        })
        resolve()
      },
        err => {
          console.log("Nigga not found");
          reject(err);
        })
    })
    this.rank=0
    this.tracks.length = 0
    return promise
  }
}


