import { ClassStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-crud-game',
  templateUrl: './crud-game.component.html',
  styleUrls: ['./crud-game.component.css']
})
export class CrudGameComponent implements OnInit {

  juego = {
    nombre : '',
    anio : '',
    precio : '',
    foto : '',
    banner : '',
    descripcion : ''
  }

  constructor(private router:Router, private gameService:GameService) { }

  ngOnInit(): void {

  }

  regresarGame(){
    return this.router.navigate(['/game'])
  }

  registrarGame(){
    this.gameService.nuevoGame(this.juego).subscribe(
      res => {
        console.log(res)
        alert(res.msg)
      },
      err => console.log(err)
    )
  }

  }



