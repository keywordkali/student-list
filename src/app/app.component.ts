import { Component } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnStyle: string = "btn btn-primary";
  students: any[] = [];
  studentCollection: any[] = [
{ name: "Tonya",favNumber: 743747, favColor: "Orange" },
{ name: "Kali",favNumber: 2, favColor: "Blue" },
{ name: "Christian",favNumber: 47, favColor: "Pink" },
{ name: "Jack",favNumber: 8, favColor: "Purple" },
{ name: "Mark",favNumber: 10, favColor: "Black" },
{ name: "Hung",favNumber: 7, favColor: "Green" },
{ name: "Sarah",favNumber: 17, favColor: "Yellow" },
{ name: "Stacy",favNumber: 9, favColor: "Pink" },
{ name: "Jonathan",favNumber: 20, favColor: "Teal" },
  ];
  title = 'student-list';
  changeColor(): void{
    this.btnStyle = "btn btn-danger";
  }
  getStudents(): void{
    this.students = this.studentCollection;
  }
constructor(
  private usersvc: UserService
){
  this.usersvc.list();
}

ngOnInit(): void{

}

}
