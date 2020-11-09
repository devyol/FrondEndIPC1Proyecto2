import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user ={
    username:'',
    password:''
  }

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signIn(){
    this.authService.signIn(this.user).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token);
        localStorage.setItem('usuario',res.usuario);
        localStorage.setItem('rol',res.rol);
        this.router.navigate(['/home'])
      },
      err => {
        console.log(err)
        alert(err.error.msg)
      }
    )
  }

}
