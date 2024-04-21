import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";
import {TuiHintModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'hm-sign-in',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TuiInputModule,
    TuiHintModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.email, Validators.required]),
    password: new FormControl<string>('', Validators.required)
  })

}
