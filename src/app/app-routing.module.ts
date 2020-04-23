import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ClientComponent } from './Client/client.component';
import { HomeComponent } from './Home/home.component';
import { OracleComponent } from './oracle/oracle.component';
import { ReportTCOComponent } from './report-tco/report-tco.component';
import { CoreComponent } from './core/core.component';



  
const routes: Routes =
[
  {
    path: '',
    component: CoreComponent
  },
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'oracle',
    component: OracleComponent
  },
  {
    path: 'report',
    component: ReportTCOComponent
  }
   
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { 
}