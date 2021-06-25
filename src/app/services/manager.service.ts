import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getManagers() {
    return this.http.get(`${this.apiUrl}/managers`);
  }
}
