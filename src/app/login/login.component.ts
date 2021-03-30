import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    login: '',
    password: ''
  });
  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    //if (пользователь есть в БД)
    this.router.navigate(['/main']);
  }
}
