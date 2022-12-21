import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailappComponent } from 'angularview/angularview/src/app/sidecomponents/pre-build-app/mailapp/mailapp.component';
import { DashboardComponent } from './sidecomponents/main/dashboard/dashboard.component';
import { LayoutsComponent } from './sidecomponents/main/layouts/layouts.component';
import { MatricsComponent } from './sidecomponents/main/matrics/matrics.component';
import { WidgetsComponent } from './sidecomponents/main/widgets/widgets.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'matrics', component: MatricsComponent },
  { path: 'layouts', component: LayoutsComponent },
  { path: 'mails', component: MailappComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
