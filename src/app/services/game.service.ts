import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private URL = 'https://ipc1-backend-flask.herokuapp.com/'
  //private URL = 'http://127.0.0.1:5000/'

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get<any>(this.URL + '/getJuegos')
  }

  getGame(id){
    return this.http.get<any>(`${this.URL}/getJuego/${id}`)
  }

  nuevoGame(juego){
    return this.http.post<any>(this.URL + '/registrarjuego',juego)
  }

}
