import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private srv:StudentService){

  }

}
