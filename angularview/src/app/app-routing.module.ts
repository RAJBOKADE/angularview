import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './sidecomponents/main/dashboard/dashboard.component';
import { LayoutsComponent } from './sidecomponents/main/layouts/layouts.component';
import { MatricsComponent } from './sidecomponents/main/matrics/matrics.component';
import { WidgetsComponent } from './sidecomponents/main/widgets/widgets.component';
import { InboxComponent } from './sidecomponents/pre-build-app/mailapp/inbox/inbox.component';
import { MailappComponent } from './sidecomponents/pre-build-app/mailapp/mailapp.component';
import { SidebarComponent } from './sidecomponents/pre-build-app/mailapp/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'matrics', component: MatricsComponent },
  { path: 'layouts', component: LayoutsComponent },
  {
    path: 'mails', component: MailappComponent,
    children: [
      //{ path: 'sidebar', component: SidebarComponent },
      { path: 'inbox', component: InboxComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
