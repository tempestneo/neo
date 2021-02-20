import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Portfolio } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {
  portfolio: Portfolio;
  loading = true;
  constructor(readonly api: ApiService) { }

  ngOnInit(): void {
    this.api.getPortfolio().subscribe((res: any) => {
       this.portfolio = res;
       this.loading = false
      }, err => {
        this.loading = false
        alert(JSON.stringify(err))
    })

  }
}
