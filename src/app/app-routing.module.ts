import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {EmployeeComponent} from "./components/employee/employee.component";
import {DepartmentListComponent} from "./components/department-list/department-list.component";
import {DepartmentComponent} from "./components/department/department.component";
import {OfficeListComponent} from "./components/office-list/office-list.component";
import {OfficeComponent} from "./components/office/office.component";
import {SalaryScaleListComponent} from "./components/salary-scale-list/salary-scale-list.component";
import {SalaryScaleComponent} from "./components/salary-scale/salary-scale.component";
import {EmployeeTypeListComponent} from "./components/employee-type-list/employee-type-list.component";
import {EmployeeTypeComponent} from "./components/employee-type/employee-type.component";


const routes: Routes = [
  { path : 'employee-list',   component: EmployeeListComponent},
  { path : 'employee/:id',   component: EmployeeComponent},
  { path : 'add-employee',   component: EmployeeComponent},

  { path : 'department-list',   component: DepartmentListComponent},
  { path : 'department/:id',   component: DepartmentComponent},
  { path : 'add-department',   component: DepartmentComponent},

  { path : 'office-list',   component: OfficeListComponent},
  { path : 'office/:id',   component: OfficeComponent},
  { path : 'add-office',   component: OfficeComponent},

  { path : 'salary-scale-list',   component: SalaryScaleListComponent},
  { path : 'salary-scale/:id',   component: SalaryScaleComponent},
  { path : 'add-salary-scale',   component: SalaryScaleComponent},

  { path : 'employee-type-list',   component: EmployeeTypeListComponent},
  { path : 'employee-type/:id',   component: EmployeeTypeComponent},
  { path : 'add-employee-type',   component: EmployeeTypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
