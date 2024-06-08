// src/app/student-list/student-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from '../student.service';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  displayedColumns: string[] = ['name', 'contactNumber', 'address', 'gender', 'age', 'nid', 'sscResult', 'hscResult', 'admissionStatus', 'actions'];

  constructor(private studentService: StudentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
    });
  }

  openDialog(student?: any): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '300px',
      data: student ? { ...student } : {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          this.studentService.update(result).subscribe(() => this.loadStudents());
        } else {
          this.studentService.create(result).subscribe(() => this.loadStudents());
        }
      }
    });
  }

  deleteStudent(id: number): void {
    this.studentService.delete(id).subscribe(() => this.loadStudents());
  }
}
