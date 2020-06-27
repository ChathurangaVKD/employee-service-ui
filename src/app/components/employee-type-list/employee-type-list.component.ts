import {Component, OnInit} from '@angular/core';
import {Department} from "../../models/department.model";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DepartmentService} from "../../services/department.service";
import {EmployeeType} from "../../models/employee-type.model";
import {EmployeeTypeService} from "../../services/employee-type.service";
import {ConfirmComponent} from "../dialog/confirm/confirm.component";

@Component({
  selector: 'app-employee-type-list',
  templateUrl: './employee-type-list.component.html',
  styleUrls: ['./employee-type-list.component.scss']
})
export class EmployeeTypeListComponent implements OnInit {

  columnsToDisplay: string[] = ['id', 'name', 'update', 'delete'];
  datasource: EmployeeType[];

  constructor(private router: Router,
              public dialog: MatDialog,
              private service: EmployeeTypeService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  edit(id: any) {
    this.router.navigate(['employee-type/' + id]);
  }

  deleteConfirm(id: any) {
    const dialogRef = this.dialog.open(ConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(res => {
      console.log("Deleted " + id);
      alert('EmployeeType Delete Success');
      this.ngOnInit();

    }, error1 => {
      alert('EmployeeType Delete Failed ' + error1.error.error);

    });
  }

  loadData() {
    this.service.getAll().subscribe(res => {
        this.datasource = res;
      },
      error => {
        this.datasource = [];
      })
  }

}
