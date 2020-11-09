import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  juegos =[]

  constructor(private router:Router, private gameService:GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(
      res => {
        this.juegos = res
      },
      err => console.log(err)
    )
  }

  nuevoJuego(){
    return this.router.navigate(['/nuevogame'])
  }

}
