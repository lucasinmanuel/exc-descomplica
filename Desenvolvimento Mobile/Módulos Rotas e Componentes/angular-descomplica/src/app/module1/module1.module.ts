import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';

const routes: Routes = [
  { path: 'child1', component: Component1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [Component1Component]
})
export class Module1Module { }