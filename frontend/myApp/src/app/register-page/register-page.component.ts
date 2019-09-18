import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../user-data.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  registration;
  constructor(private _userservice: UserDataService) {
    this.registration = 0;
  }

  ngOnInit() {
  }

  createnewuser(fname,lname,email,ssn,pass, repass){

    // if(fname == '' || lname == '' || email =='' || ssn == '' || pass == '' || repass == ''){
    //   alert("PLease Note all fields are mandatory");
    // }
    this._userservice.usercreate(fname, lname, email, ssn, pass);
    // console.log("REgister button working : ", fname,lname,email,ssn,pass,repass)
    this.registration = 1;

  }
}
