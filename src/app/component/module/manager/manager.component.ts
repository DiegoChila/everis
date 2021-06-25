import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerResponseDto } from 'src/app/models/dto/response/manager-response-dto';
import { ManagerService } from 'src/app/services/manager.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  managers: ManagerResponseDto[] = new Array;

  constructor(
    private managerService: ManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.managerService.getManagers().subscribe(
      (response: any) => {
        this.managers = response;
      },
      (error: any) => {
        localStorage.clear();
        if (error.status == 403) {
          this.viewError('Por favor, inicie sesión');
        } else {
          this.viewError('Ha ocurrido un error');
        }
      }
    );
  }

  viewError(error: string) {
    Swal.fire({
      icon: 'error',
      title: error,
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigateByUrl('/login');
  }

}
