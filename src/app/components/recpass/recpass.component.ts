import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-recpass',
  templateUrl: './recpass.component.html',
  styleUrls: ['./recpass.component.css']
})
export class RecpassComponent implements OnInit {

  user = {
    username:'',
    password:''
  }

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  recuperaContrasenia(){
    this.authService.recuperarPassword(this.user).subscribe(
      res => {
        console.log(res)
        alert(res.msg)
        this.router.navigate(['/signin'])
      },
      err => {
        if(err.status===400){
          console.log(err.error.msg)
          this.user.username = ''
          this.user.password = ''
          alert(err.error.msg)
        }
        
        
      }
    )
  }


}
