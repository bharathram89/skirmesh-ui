import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  addUser: FormGroup;
  fields = { fname: '', lname: '', email: '', password: '', callSign: '', confirmPassword: "", fieldName: "" }

  constructor(
    private socialAuthService: SocialAuthService,
    private authSvc: AuthService) { }

  ngOnInit(): void {
    this.addUser = new FormGroup({

      "fname": new FormControl(this.fields.fname, [
        Validators.required
      ]),
      "lname": new FormControl(this.fields.lname, [
        Validators.required
      ]),
      "email": new FormControl(this.fields.email, [
        Validators.required,
        Validators.email
      ]),
      "password": new FormControl(this.fields.password, [
        Validators.required,
        Validators.minLength(5)
      ]),
      "callSign": new FormControl(this.fields.callSign, [
        Validators.required
      ]),
      "confirmPassword": new FormControl(this.fields.confirmPassword, [
        Validators.required
      ]),
      "fieldName": new FormControl(this.fields.fieldName, [
        Validators.required
      ]),
    },{ validators: this.checkPasswords.bind(this) })
    this.socialAuthService.authState.subscribe((user) => {
      // this.socialUser = user;
      // this.isLoggedin = (user != null);
      console.log('user fb login', user)
    });
    this.addUser.controls['fieldName'].disable();//needed in ngonInit to disable fieldName 
  }
  get checkpass(){
    return this.checkPasswords(this.addUser)
  }
  checkPasswords(group: FormGroup){
    const password = group.get('password').value;
  const confirmPassword = group.get('confirmPassword').value;
    
  return password === confirmPassword ? null : group.controls['confirmPassword'].setErrors({ notSame: true });

  }
  get fname() { return this.addUser.get('fname'); }
  get lname() { return this.addUser.get('lname'); }
  get email() { return this.addUser.get('email'); }
  get password() { return this.addUser.get('password'); }
  get callSign() { return this.addUser.get('callSign'); }
  get confirmPassword() { return this.addUser.get('confirmPassword'); }
  get fieldName() { return this.addUser.get('fieldName'); }

  fieldSignUp() {
    let social = document.getElementById("social_media");
    let or = document.getElementById("or");
    let fieldSignUp = document.getElementById("fieldSignUp");
    let playerSignUp = document.getElementById("playerSignUp");
    let callSign = document.getElementById("callSign");
    let fieldName = document.getElementById("fieldName")
    callSign.style.display = 'none'
    fieldName.style.display = 'block'
    this.addUser.controls['callSign'].disable();
    this.addUser.controls['fieldName'].enable();
    social.style.display = 'none'
    or.style.display = 'none'
    playerSignUp.classList.remove("active");
    fieldSignUp.classList.add("active");
  }
  playerSignUp() {
    let social = document.getElementById("social_media");
    let or = document.getElementById("or");
    let fieldSignUp = document.getElementById("fieldSignUp");
    let playerSignUp = document.getElementById("playerSignUp");
    let callSign = document.getElementById("callSign");
    let fieldName = document.getElementById("fieldName")
    callSign.style.display = 'block'
    fieldName.style.display = 'none'
    this.addUser.controls['callSign'].enable();
    this.addUser.controls['fieldName'].disable();
    social.style.display = 'flex'
    or.style.display = 'block'
    fieldSignUp.classList.remove("active");
    playerSignUp.classList.add("active");
  }
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  onSubmit() {
    let type = document.getElementById('fieldSignUp').classList.contains('active') ? 'field' : 'player';
    let data = {
      "callSign": type=='field'?this.addUser.value.fieldName:this.addUser.value.callSign,
      "firstName": this.addUser.value.fname,
      "lastName": this.addUser.value.lname,
      "password": this.addUser.value.password,
      "email": this.addUser.value.email
    }
    this.authSvc.createUser(data).subscribe(data=>{
      document.getElementById('userCreatedMessage').classList.toggle('d-none')
    },
    err=>{
      document.getElementById('userCreatFaileddMessage').classList.toggle('d-none')
      console.log(data,"resp")
    })
  }

}
