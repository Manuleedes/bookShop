 import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../../../types/Auth';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  form:LoginForm={
    email:'',
    password:''
  }

  isloading:boolean=false



  constructor(){}
  ngOnInit(): void {
    
  }
  submit(){if(this.isloading) return
    this.isloading=true
    
  const auth = getAuth();
  signInWithEmailAndPassword(auth, this.form.email, this.form.password)
    .then((userCredential) => {
      alert("login successiful")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Cridentials din't match")
    }).finally(()=>(this.isloading=false));
  }
}
