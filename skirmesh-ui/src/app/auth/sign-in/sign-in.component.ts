import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/service/auth.service';
import { TokenStorageService } from 'src/service/token-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  login: FormGroup;
  fields = {  callSign: '', password: "", fieldName: "" }

  constructor(
    private authSvc: AuthService,
    private tokenStorage: TokenStorageService) {
    
   }

  ngOnInit(): void {
    this.login = new FormGroup({

      "callSign": new FormControl(this.fields.callSign, [
        Validators.required
      ]),
      "password": new FormControl(this.fields.password, [
        Validators.required
      ]),
      "fieldName": new FormControl(this.fields.fieldName, [
        Validators.required
      ]),
    })

    this.login.controls['fieldName'].disable();
  }

  
  fieldSignIn() {
    let fieldSignUp = document.getElementById("fieldSignIn");
    let playerSignUp = document.getElementById("playerSignIn");
    let callSign = document.getElementById("callSign");
    let fieldName = document.getElementById("fieldName")
    callSign.style.display = 'none'
    fieldName.style.display = 'block'
    this.login.controls['callSign'].disable();
    this.login.controls['fieldName'].enable();
    playerSignUp.classList.remove("active");
    fieldSignUp.classList.add("active");
  }
  playerSignIn() {
    let fieldSignUp = document.getElementById("fieldSignIn");
    let playerSignUp = document.getElementById("playerSignIn");
    let callSign = document.getElementById("callSign");
    let fieldName = document.getElementById("fieldName")
    callSign.style.display = 'block'
    fieldName.style.display = 'none'
    this.login.controls['callSign'].enable();
    this.login.controls['fieldName'].disable();
    fieldSignUp.classList.remove("active");
    playerSignUp.classList.add("active");
  }

  onSubmit(){
    let type = document.getElementById('fieldSignIn').classList.contains('active') ? 'field' : 'player';
    let data = {
      "callSign": type=='field'?this.login.value.fieldName:this.login.value.callSign,
      "password": this.login.value.password
    }
    this.authSvc.userLogin(data).subscribe(
      respData=>{
        console.log("data",respData)

        // window.sessionStorage.setItem("token",JSON.stringify(data))
        this.tokenStorage.saveToken(respData['token'])
        //store session and route user
      },
      err=>{
//show error message
      }
    )
  }
}
