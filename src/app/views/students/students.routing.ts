import { Routes } from "@angular/router";
import { ViewStudentsComponent } from "./view-students/view-students.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { EditStudentComponent } from "./edit-student/edit-student.component";
import { DisplayStudentComponent } from "./display-student/display-student.component";

export const StudentRoutes: Routes = [
   
    {
        path: '',
        children: [
        {
          path: 'view-students',
          component: ViewStudentsComponent,
          data: { title: 'View Students', breadcrumb: 'VIEW STUDENTS' },         
          
        },
        {
            path: 'edit-student/:id',
            component: EditStudentComponent,
            data: { title: 'Edit Student', breadcrumb: 'EDIT STUDENT'}
        },
        
        {
          path: 'add-student',
          component: AddStudentComponent,
          data: { title: 'Add Student', breadcrumb: 'ADD STUDENT'}
        },
        {
            path: 'display-student/:id',
            component:DisplayStudentComponent,
            data: { title: 'Display Student', breadcrumb: 'DISPLAY STUDENT'}
        }

        ]
      }
]