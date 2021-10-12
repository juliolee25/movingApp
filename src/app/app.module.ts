import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

import {PaginatorModule} from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,    
    NavBarComponent, LoginComponent, AdministracionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,    
    TagModule,
    ChartModule,
    CardModule,
    InputTextModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    PaginatorModule,
    TabViewModule,
    CalendarModule,
    NgbModule,
    ButtonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
