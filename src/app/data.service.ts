import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = environment.apiHost + "api/v1/todo"

  constructor(private httpClient: HttpClient) { }

  public getLista(): Observable<any> {
    let paramsGet = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json; charset=utf-8'
      }),
      params: {}
    };
    return this.httpClient.get(this.REST_API_SERVER, paramsGet);
  }

  public guardarTodo(descTodo: string): Observable<any> {
    return this.httpClient.post(this.REST_API_SERVER, { descTodo: descTodo });
  }

  public eliminarTodo(idTodo: number): Observable<any> {
    return this.httpClient.delete(this.REST_API_SERVER + '/' + idTodo, {});
  }

}
