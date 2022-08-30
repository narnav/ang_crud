import { Component } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
myStudents:Student[]=[]
username:any="aviel"
userage:any=12
constructor(private studentSrv:StudentService)  {
 this.getData()
}

getData(){
  this.studentSrv.getStudents().subscribe(res => this.myStudents =res)
}
getStudent(id:number){
  this.studentSrv.getStudent(id).subscribe(res => console.log(res))
}

addStudent()
{
  let new_stu:any={age:this.userage,name:this.username}
  this.studentSrv.addStudent(new_stu).subscribe(res => console.log(res))
}

delStudent(id:number){
  this.studentSrv.delStudent(id).subscribe(res => this.getData())
}
}
