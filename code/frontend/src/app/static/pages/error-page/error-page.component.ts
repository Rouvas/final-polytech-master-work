import { Component } from '@angular/core';
import {TuiBlockStatusModule} from "@taiga-ui/layout";
import {TuiLinkModule} from "@taiga-ui/core";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'hm-error-page',
  standalone: true,
  imports: [
    TuiBlockStatusModule,
    TuiLinkModule,
    RouterLink
  ],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {

}
