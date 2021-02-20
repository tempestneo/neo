import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  {path: '', component: PortfolioComponent}
];

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    SharedModule,
    InlineSVGModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class PortfolioModule { }
