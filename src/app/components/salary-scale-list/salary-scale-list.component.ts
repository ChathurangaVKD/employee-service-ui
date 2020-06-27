import { Component, OnInit } from '@angular/core';
import {SalaryScale} from "../../models/salary-scale.model";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmComponent} from "../dialog/confirm/confirm.component";
import {SalaryScaleService} from "../../services/salary-scale.service";

@Component({
  selector: 'app-salary-scale-list',
  templateUrl: './salary-scale-list.component.html',
  styleUrls: ['./salary-scale-list.component.scss']
})
export class SalaryScaleListComponent implements OnInit {

  columnsToDisplay: string[] = ['id', 'name', 'code', 'amount', 'update', 'delete'];
  datasource: SalaryScale[];

  constructor(private router: Router,
              public dialog: MatDialog,
              private service: SalaryScaleService) { }

  ngOnInit(): void {
    this.loadData();
  }

  edit(id: any) {
    this.router.navigate(['salary-scale/' + id]);
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
      alert('SalaryScale Delete Success');
      this.ngOnInit();

    }, error1 => {
      alert('SalaryScale Delete Failed ' + error1.error.error);

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
