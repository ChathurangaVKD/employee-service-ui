import {Component, OnInit} from '@angular/core';
import {SalaryScale} from "../../models/salary-scale.model";
import {ActivatedRoute, Router} from "@angular/router";
import {SalaryScaleService} from "../../services/salary-scale.service";

@Component({
  selector: 'app-salary-scale-component',
  templateUrl: './salary-scale.component.html',
  styleUrls: ['./salary-scale.component.scss']
})
export class SalaryScaleComponent implements OnInit {

  selectedSalaryScale: SalaryScale;

  constructor(private salaryScaleService: SalaryScaleService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.selectedSalaryScale = new SalaryScale();
    this.loadSalaryScale();
  }

  loadSalaryScale() {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.salaryScaleService.get(id).subscribe(res => {
        this.selectedSalaryScale = res;
      });
    }
  }

  save() {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.salaryScaleService.update(id, this.selectedSalaryScale).subscribe(res => {
        console.log(res);
        alert('SalaryScale Update Success');
        this.router.navigate(['salary-scale/' + res.id]);
      });
    } else {
      this.salaryScaleService.create(this.selectedSalaryScale).subscribe(res => {
        console.log(res);
        alert('SalaryScale Create Success');
        this.router.navigate(['salary-scale/' + res.id]);
      });
    }
  }

  cancel() {
    this.router.navigate(['salary-scale-list']);
  }

}
