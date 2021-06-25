import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequestDto } from 'src/app/models/dto/request/login-request-dto';
import { LoginResponseDto } from 'src/app/models/dto/response/login-response-dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequestDto = new LoginRequestDto("", "");

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const token: any = localStorage.getItem('user') ? localStorage.getItem('user') : "";
    if (token != "") {
      this.router.navigateByUrl('/managers');
    }
  }

  onSubmit() {
    this.authService.login(this.loginRequest).subscribe(
      (response: any) => {
        const loginResponse : LoginResponseDto = response;
        if (loginResponse.success) {
          localStorage.setItem('user', loginResponse.token);
          this.router.navigateByUrl('/managers');
        } else {
          console.log(loginResponse.errors)
        }
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

}
