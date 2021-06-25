export class LoginResponseDto {
  success: boolean;
  errors: string[];
  token: string;

  constructor(success: boolean, errors: string[], token: string) {
    this.success = success;
    this.errors = errors;
    this.token = token;
  }
}
