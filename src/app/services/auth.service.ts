import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginRequestDto } from '../models/dto/request/login-request-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequestDto) {
    return this.http.post(`${this.apiUrl}/auth/login`, loginRequest);
  }
}
