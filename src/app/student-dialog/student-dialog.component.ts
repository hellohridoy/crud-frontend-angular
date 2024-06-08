import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent {
  form: FormGroup;
  genderOptions = ['MALE', 'FEMALE', 'OTHER'];
  admissionStatusOptions = ['ADMITTED', 'PENDING', 'REJECTED'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      id: [data.id || null],
      name: [data.name || '', [Validators.required, Validators.maxLength(20)]],
      contactNumber: [data.contactNumber || '', [Validators.required, Validators.pattern('^\\d{10}$')]],
      address: [data.address || '', [Validators.required, Validators.maxLength(255)]],
      gender: [data.gender || '', [Validators.required]],
      age: [data.age || null, [Validators.required, Validators.min(18), Validators.max(40)]],
      nid: [data.nid || '', [Validators.required]],
      sscResult: [data.sscResult || null, [Validators.required, Validators.min(3.5)]],
      hscResult: [data.hscResult || null, [Validators.required, Validators.min(3.0)]],
      admissionStatus: [data.admissionStatus || '', [Validators.required]],
      createdAt: [data.createdAt || new Date()],
      updatedAt: [data.updatedAt || new Date()]
    });
  }

  getErrorMessage(control: string): string {
    const formControl = this.form.get(control);
    
    if (formControl) {
      if (formControl.hasError('required')) {
        return `${control} is mandatory`;
      }
      
      const errors = formControl.errors;
      if (errors) {
        if (errors['maxlength']) {
          return `${control} must be at most ${errors['maxlength'].requiredLength} characters`;
        }
        if (errors['pattern']) {
          return `${control} is invalid`;
        }
        if (errors['min']) {
          return `${control} must be at least ${errors['min'].min}`;
        }
        if (errors['max']) {
          return `${control} must be at most ${errors['max'].max}`;
        }
      }
    }

    return '';
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
