import { ApiService } from './../services/api.service';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Portfolio } from './../interfaces/interfaces';
import { environment } from './../../environments/environment';
import { InlineSVGModule } from 'ng-inline-svg';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio;
  env = environment;
  error = '';
  loading = true;
  navShowing = false;
  selectedItem: any = {};
  isOpen = false;
  constructor(readonly api: ApiService) { }

  ngOnInit(): void {
    this.api.getPortfolio().subscribe((res: any) => {
      this.portfolio = res;
      this.loading = false;
    }, err => {
      this.error = JSON.stringify(err);
      this.loading = false;
    });
  }

  openImage(item): void {
     this.selectedItem = item;
     this.toggle();
  }

  toggle(): void {
     this.isOpen = !this.isOpen;
     if (this.isOpen) {
       document.querySelector('body').classList.add('modal-open');
     } else {
      document.querySelector('body').classList.remove('modal-open');
     }
  }

}
