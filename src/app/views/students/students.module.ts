import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatChipsModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTabsModule,
  MatInputModule,
  MatProgressBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatStepperModule,
  MatFormFieldModule
 } from '@angular/material';
 import {CdkTableModule} from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { SharedModule } from './../../shared/shared.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentRoutes } from './students.routing';
import { DisplayStudentComponent } from './display-student/display-student.component';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    FlexLayoutModule,
    ChartsModule,
    FileUploadModule,
    SharedModule,
    CdkTableModule,
    MatStepperModule,
    RouterModule.forChild(StudentRoutes)
  ],
  declarations: [
    AddStudentComponent,
    ViewStudentsComponent,
    EditStudentComponent,
    DisplayStudentComponent,
  ]
})
export class StudentsModule { }