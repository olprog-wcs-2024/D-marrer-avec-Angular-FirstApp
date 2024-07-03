import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface ObjectfromNasa {

    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private http = inject(HttpClient);
  private apiKey: string = 'DEMO_KEY'; // Remplacer par votre clé API
  private apiUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

  constructor() {}

  getImageOfTheDay(): Observable<ObjectfromNasa> {
    return this.http.get<ObjectfromNasa>(this.apiUrl);
  }
}
