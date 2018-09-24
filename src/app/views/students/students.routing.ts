import { Routes } from "@angular/router";
import { ViewStudentsComponent } from "./view-students/view-students.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { EditStudentComponent } from "./edit-student/edit-student.component";

export const StudentRoutes: Routes = [
   
    {
        path: '',
        children: [
        {
          path: 'view-students',
          component: ViewStudentsComponent,
          data: { title: 'View Students', breadcrumb: 'VIEW STUDENTS' },
          children: [
              {
                  path: ':id',
                  component: EditStudentComponent,
                  data: { title: 'Edit Student', breadcrumb: 'EDIT STUDENT'}
              }
          ]
        },
        {
          path: 'add-student',
          component: AddStudentComponent,
          data: { title: 'Add Student', breadcrumb: 'ADD STUDENT'}
        },

        ]
      }
]