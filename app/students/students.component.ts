import { Component } from '@angular/core';
import { Student } from '../../model/Student';
import { CommonModule } from '@angular/common';
import { SortCriteriaComponent } from "../sort-criteria/sort-criteria.component";

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css'],
    standalone: true,
    imports: [CommonModule, SortCriteriaComponent]
})

export class StudentsComponent {

    students:Student[] = []
    deleteMessage: string = ''
    colorclass:string = ''

    constructor(){
      let s1 = new Student(1,"Rajat Khandelwal",2,95,["Java","Python","DSA"])
      let s2 = new Student(2,"Sagar Soneja",3,97,["C++","JavaScript", "Android Dev"])
      let s3 = new Student(3,"Pranav Verma",1,75,["C","TypeScript"])
      let s4 = new Student(4,"Mohit Sharma",5,55,["React","Angular"])
      let s5 = new Student(5,"Abhinav Tiwari",3,67,["OOPS","Flutter"])

      this.students.push(s1)
      this.students.push(s2)
      this.students.push(s3)
      this.students.push(s4)
      this.students.push(s5)
    }
    
    showStudents(){

    }   

    deleteStudent(rollno:number) {
      const confirmation = confirm("Are you sure you want to delete this student?");     
      if (confirmation) {
        this.students = this.students.filter(s => s.rollno !== rollno);
        this.deleteMessage = 'Student successfully deleted.'
        this.colorclass = "success"
      }
      else{
        this.deleteMessage = 'Student deletion cancelled.';
        this.colorclass = "error"
      }
    }

    updateStudent(student: Student) {

      student.rollno = parseInt(prompt('Enter Student updated Roll number:', student.rollno.toString()) || student.rollno.toString());
      student.name = prompt('Enter Student updated name:', student.name) || student.name;
      student.numberOfAttempts = parseInt(prompt('Enter Student Attempts:', student.numberOfAttempts.toString()) || student.numberOfAttempts.toString());
      student.percentage = parseFloat(prompt('Enter student percentage:', student.percentage.toString()) || student.percentage.toString()); 
      let subjectsInput = prompt('Enter Student Subjects (comma-separated):', student.subjectsLearning.join(',')) || student.subjectsLearning.join(',');
      student.subjectsLearning = subjectsInput.split(',');

    }
    
  sortCriteria: string | null = null;

  updateStudents() {
    if (this.sortCriteria === 'percentage') {
      this.students.sort((a, b) => b.percentage - a.percentage);
    } else if (this.sortCriteria === 'numberOfAttempts') {
      this.students.sort((a, b) => a.numberOfAttempts - b.numberOfAttempts);
    } else if (this.sortCriteria === 'subjectsLearning') {
      this.students.sort((a, b) => a.subjectsLearning.length - b.subjectsLearning.length);
    }
  }

  onSortCriteriaChanged(criteria: string) {
    this.sortCriteria = criteria;
    this.updateStudents()
  }
}