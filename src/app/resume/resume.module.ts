import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  {path: '', component: ResumeComponent}
];

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ResumeModule { }
