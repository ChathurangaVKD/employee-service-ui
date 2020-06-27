import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/department.model";
import {Office} from "../../models/office.model";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DepartmentService} from "../../services/department.service";
import {OfficeService} from "../../services/office.service";
import {ConfirmComponent} from "../dialog/confirm/confirm.component";

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.scss']
})
export class OfficeListComponent implements OnInit {

  columnsToDisplay: string[] = ['id', 'name', 'code', 'address.city', 'update', 'delete'];
  datasource: Office[];

  constructor(private router: Router,
              public dialog: MatDialog,
              private service: OfficeService) { }

  ngOnInit(): void {
    this.loadData();
  }

  edit(id: any) {
    this.router.navigate(['office/' + id]);
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
      alert('Office Delete Success');
      this.ngOnInit();

    }, error1 => {
      alert('Office Delete Failed ' + error1.error.error);

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
