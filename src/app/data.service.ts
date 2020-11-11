import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = environment.apiHost

  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(enpoint: string) {
    return this.httpClient.get(this.REST_API_SERVER + enpoint, {

    });
  }
}
