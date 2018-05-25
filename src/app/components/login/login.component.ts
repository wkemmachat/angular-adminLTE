import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mUsername:string ="";
  mPassword:string = "";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickSubmit(){
    if(this.mUsername=="1"&&this.mPassword=="1"){
      window.alert("Login Successfully");
      this.router.navigate(["/chart"]);
    }else{
      window.alert("Login Fail");
    }
  }

}
