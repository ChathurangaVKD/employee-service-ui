import {Component, OnInit} from '@angular/core';
import {Employee} from "../../models/employee.model";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Department} from "../../models/department.model";
import {DepartmentService} from "../../services/department.service";
import {ConfirmComponent} from "../dialog/confirm/confirm.component";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  columnsToDisplay: string[] = ['id', 'name', 'code', 'update', 'delete'];
  datasource: Department[];

  constructor(private router: Router,
              public dialog: MatDialog,
              private service: DepartmentService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  edit(id: any) {
    this.router.navigate(['department/' + id]);
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
      alert('Department Delete Success');
      this.ngOnInit();

    }, error1 => {
      alert('Department Delete Failed ' + error1.error.error);

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
