import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../models/employee.model";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmComponent} from "../dialog/confirm/confirm.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  columnsToDisplay: string[] = [
    'id', 'username', 'email', 'firstName', 'lastName', 'age', 'mobile', 'type.name', 'address.city',
    'department.name', 'office.name', 'supervisor.username', 'familyMembers', 'update', 'delete'];
  datasource: Employee[];


  constructor(private service: EmployeeService,
              private router: Router,
              public dialog: MatDialog) {
  }


  deleteConfirm(id: number) {
    const dialogRef = this.dialog.open(ConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe(res => {
        this.datasource = res;
      },
      error => {
        this.datasource = [];
      })
  }

  delete(id: number) {
    this.service.delete(id).subscribe(res => {
      console.log("Deleted " + id);
      alert('Employee Delete Success');
      this.ngOnInit();

    }, error1 => {
      alert('Employee Delete Failed ' + error1.error.error);

    });
  }

  edit(id: number) {
    this.router.navigate(['employee/' + id]);
  }
}
