import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course= [
    {'id':1,'name':'Learn Angular','description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eveniet commodi tempore deserunt tenetur labore aperiam molestiae','image':'../../assets/img/angular.jpg'},
    {'id':2,'name':'Learn Typescript','description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eveniet commodi tempore deserunt tenetur labore aperiam molestiae','image':'../../assets/img/typescript.jpg'},
    {'id':3,'name':'Learn Nodejs','description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eveniet commodi tempore deserunt tenetur labore aperiam molestiae','image':'../../assets/img/nodejs.jpg'},
    {'id':4,'name':'Learn React','description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eveniet commodi tempore deserunt tenetur labore aperiam molestiae','image':'../../assets/img/reactjs.jpg'}
  ]

}
