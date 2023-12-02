import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private authStatusListener = new Subject<boolean>();
  
  // Ejemplo de usuario, puedes modificar o adaptar según tus necesidades
  private users = [
    {email: 'barrita', password: 'barrita'},
    {email: 'santi', password: 'santi'}
  ];

  login() {
    this.isAuthenticated = true;
    this.authStatusListener.next(true);
  }

  logout() {
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  findUserByEmailAndPassword(email: string, password: string) {
    return this.users.find(user => user.email === email && user.password === password);
  }
}
