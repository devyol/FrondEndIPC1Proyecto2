import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  juegos =[]
  juego = {}

  loggerIn:boolean = false;

  constructor(private authService:AuthService, private gameService:GameService,private router:Router) { 

    this.loggerIn = authService.loggerIn();

  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(
      res => {
        console.log(res)
        this.juegos = res.data
      },
      err => console.log(err)
    )    
  }

  getGame(id:number){
    this.router.navigate(['/juego',id])
  }

}
