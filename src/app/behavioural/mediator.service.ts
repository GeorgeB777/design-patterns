export interface Mediator {
    notify(sender: object, event: string): void;
  }


  // Service
  import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediatorService implements Mediator {
  private userList: any[] = [];

  notify(sender: any, event: string): void {
    if (event === 'userAdded') {
      this.updateUserList(sender);
    }
  }

  private updateUserList(user: any): void {
    this.userList.push(user);
    console.log('User list updated:', this.userList);
  }
}

// COmponents

// user-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  template: `
    <form (ngSubmit)="addUser()">
      <input placeholder="Enter user name" name="userName" required>
      <button type="submit">Add User</button>
    </form>
  `
})
export class UserFormComponent {
  userName: string = '';

  constructor(private mediator: MediatorService) {}

  addUser() {
    this.mediator.notify(this.userName, 'userAdded');
    this.userName = '';
  }
}

// user-list.component.ts

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of userList">{{ user }}</li>
    </ul>
  `
})
export class UserListComponent {
  userList: any[] = [];

  constructor(private mediator: MediatorService) {
    // Subscribe to updates from the mediator
    this.mediator.notify = (sender, event) => {
      if (event === 'userAdded') {
        this.userList.push(sender);
      }
    };
  }
}