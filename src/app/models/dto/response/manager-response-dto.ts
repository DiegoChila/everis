export class ManagerResponseDto {
  name: string;
  email: string;
  tel: string;

  constructor(name: string, email: string, tel: string) {
    this.name = name;
    this.email = email;
    this.tel = tel;
  }
}
