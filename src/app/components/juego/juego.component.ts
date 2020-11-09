import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../../services/game.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juego:any = {}

  constructor(private activateRouter:ActivatedRoute,
              public authService:AuthService,
              private gameService:GameService) {

    this.activateRouter.params.subscribe(params=>{
      this.gameService.getGame(params['id']).subscribe(
        res => {
          this.juego = res.data
        },
        err => {
          console.log(err)
        }
      )
      
    })

   }

  ngOnInit(): void {
  }

}
