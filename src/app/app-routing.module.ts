import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KyuViewComponent } from './kyu-view/kyu-view.component';
import { QuestionViewComponent } from './question-view/question-view.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'kyu-view', component: KyuViewComponent },
  { path: 'question-view', component: QuestionViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
