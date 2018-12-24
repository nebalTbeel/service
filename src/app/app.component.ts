import { Component } from '@angular/core';
import {ApiServiceService} from '../app/api-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clothes';
  constructor(private api: ApiServiceService) { 

  }
login = this.api.login ;



}
