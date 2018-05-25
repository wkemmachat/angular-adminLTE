import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { LoginComponent } from './components/login/login.component';

import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartComponent } from './components/chart/chart.component';

const routes:Routes= [
  {path: '',redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'chart',component:ChartComponent},
  {path:'**',redirectTo:'/login'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppsettingComponent,
    AppmenuComponent,
    LoginComponent,
    DashboardComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
