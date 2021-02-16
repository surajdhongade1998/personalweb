import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelListComponent } from './panel-list/panel-list.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule} from '@agm/core'
// import { PanelLocationComponent } from './panel-list/panel-location/panel-location.component';
// import { PanelLocationComponent } from './panel-location/panel-location.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelListComponent,
    // PanelLocationComponent,
    // PanelLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCJmVdup9uBDkvHR5lxUqQM6HtxQXRReY8'
    })
    // NgbModule
  ],
  providers: [NgbModalConfig, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
