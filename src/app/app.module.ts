import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { ClientComponent } from './Client/client.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {ClientModalComponent} from './ClientModalData/client-modal.component';
import { OracleComponent } from './oracle/oracle.component';
import { ReportTCOComponent } from './report-tco/report-tco.component';
import { CoreComponent} from './core/core.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HomeComponent,
    ClientModalComponent,
    OracleComponent, 
    CoreComponent,
    ReportTCOComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ChartsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
