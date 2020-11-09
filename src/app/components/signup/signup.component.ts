import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    username:'',
    password:'',
    nombre:'',
    apellido:''
  }

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUp(this.user).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token);
        localStorage.setItem('usuario',res.usuario);
        localStorage.setItem('rol',res.rol);
        this.router.navigate(['/home'])
      },
      err => console.log(err)
    )
  }

}
