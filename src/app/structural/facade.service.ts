import { Injectable } from '@angular/core';

class AuthService {
    login(data: any) {
        // Complex logics
    }

    logout() {
        // Complex logics
    }
}
class UserService {
    getUser() {
        // Complex logics
    }
};
class TokenService {
    isAuthenticated() {
        // Complex logics
    }
};
class JwtHelperService {}

@Injectable({ providedIn: 'root' })
export class AuthFacadeService {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private tokenService: TokenService,
    private jwtHelperService: JwtHelperService
  ) {}

  login(credentials: any) {
    return this.authService.login(credentials);
  }

  logout() {
    this.authService.logout();
  }

  getUser() {
    return this.userService.getUser();
  }

  isAuthenticated() {
    return this.tokenService.isAuthenticated();
  }
}