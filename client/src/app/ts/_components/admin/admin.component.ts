import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user'
import { UserService, AlertService } from '../../_services/index';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentUser: User;
  users: User[] = [];


  constructor( private userService: UserService,
               private alertService: AlertService ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
    this.loadAllUsers()
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(
      users => { this.users = users; },
      error => { console.log('error', error) }
    );
  }

  private removeUser(_id: string){
    this.userService.remove(_id).subscribe(
      data => {
        this.alertService.success('User Removed Succesfully',true)
        this.loadAllUsers()
      },
      error =>{

      })
  }

}
