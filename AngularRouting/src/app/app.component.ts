import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  obsTrack : Observable<Object>;

  constructor(public spotify : SpotifyService){
    this.obsTrack = spotify.searchTrack("lateralus");
    this.obsTrack.subscribe((data)=>console.log(data));
  }
}


