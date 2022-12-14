import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { WidgetsComponent } from './main/widgets/widgets.component';
import { MainComponent } from './main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatTreeModule } from '@angular/material/tree';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatricsComponent } from './main/matrics/matrics.component';
import { LayoutsComponent } from './main/layouts/layouts.component';
import { PreBuildAppComponent } from './pre-build-app/pre-build-app.component';
import { TaskmanagerComponent } from './pre-build-app/taskmanager/taskmanager.component';
import { MailappComponent } from './pre-build-app/mailapp/mailapp.component';
import { ContactsappComponent } from './pre-build-app/contactsapp/contactsapp.component';
import { ChatappComponent } from './pre-build-app/chatapp/chatapp.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SidebarComponent } from './pre-build-app/mailapp/sidebar/sidebar.component';
import { InboxComponent } from './pre-build-app/mailapp/inbox/inbox.component';
import { SentComponent } from './pre-build-app/mailapp/sent/sent.component';


@NgModule({
  declarations: [DashboardComponent,
    WidgetsComponent, MainComponent, MatricsComponent, LayoutsComponent, PreBuildAppComponent, TaskmanagerComponent, MailappComponent, ContactsappComponent, ChatappComponent, SidebarComponent, InboxComponent, SentComponent,],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTreeModule,
    MatCardModule,
    MatListModule,
    RouterModule,
    MatProgressBarModule,
    ScrollingModule

  ],
  exports: [MainComponent, PreBuildAppComponent]
})


export class SidecomponentsModule { }
