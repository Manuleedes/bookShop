import {Component, OnInit } from '@angular/core';
import { RegisterForm } from '../../../types/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  form:RegisterForm={
    email:'',
    password:'',
    ConfirmPassword:''
  }
  passwordMatched=true
  constructor(){}
  isloading:boolean=false

  submit(){
    if(this.isloading) return
    this.isloading=true
    
  if(this.form.password != this.form.ConfirmPassword){
    this.passwordMatched=false
    return
  }
const auth = getAuth();
signInWithEmailAndPassword(auth, this.form.email, this.form.password)
  .then((userCredential) => {
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }).finally(()=>(this.isloading=false))
}

}
