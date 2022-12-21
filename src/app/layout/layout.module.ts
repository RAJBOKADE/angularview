import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SidecomponentsModule } from '../sidecomponents/sidecomponents.module';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent
    ],
    exports: [HeaderComponent, FooterComponent, SidenavComponent],
    imports: [
        CommonModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        SidecomponentsModule,
        MatButtonModule,

    ]
})
export class LayoutModule { }
