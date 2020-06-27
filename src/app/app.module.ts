import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule} from "@angular/forms";
import { ConfirmComponent } from './components/dialog/confirm/confirm.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentComponent } from './components/department/department.component';
import { OfficeListComponent } from './components/office-list/office-list.component';
import { OfficeComponent } from './components/office/office.component';
import { EmployeeTypeListComponent } from './components/employee-type-list/employee-type-list.component';
import { EmployeeTypeComponent } from './components/employee-type/employee-type.component';
import { SalaryScaleListComponent } from './components/salary-scale-list/salary-scale-list.component';
import { SalaryScaleComponent } from './components/salary-scale/salary-scale.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeComponent,
    ConfirmComponent,
    DepartmentListComponent,
    DepartmentComponent,
    OfficeListComponent,
    OfficeComponent,
    EmployeeTypeListComponent,
    EmployeeTypeComponent,
    SalaryScaleListComponent,
    SalaryScaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
