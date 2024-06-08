import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from './student.service';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 'name', 'contactNumber', 'address', 'gender', 'age', 'nid', 'sscResult', 'hscResult', 'admissionStatus', 'createdAt', 'updatedAt', 'actions'
  ];
  dataSource = new MatTableDataSource<any>();

  constructor(private studentService: StudentService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(student?: any): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '400px',
      data: student || {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (student) {
          this.studentService.update(result).subscribe(() => this.getAllStudents());
        } else {
          this.studentService.create(result).subscribe(() => this.getAllStudents());
        }
      }
    });
  }

  deleteStudent(id: number): void {
    this.studentService.delete(id).subscribe(() => this.getAllStudents());
  }
}
