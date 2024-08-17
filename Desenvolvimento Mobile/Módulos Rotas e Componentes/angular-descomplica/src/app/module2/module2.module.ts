import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component2Component } from './component2/component2.component';

const routes: Routes = [
  { path: 'child2', component: Component2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [Component2Component]
})
export class Module2Module { }
