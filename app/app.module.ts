import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { FindPlanComponent } from './find-plan/find-plan.component';
import { ConfigurePlanComponent } from './configure-plan/configure-plan.component';


@NgModule({
  imports:      [ BrowserModule, NgbModule, NgbModule.forRoot() ],
  declarations: [ AppComponent,
  CardComponent,
    FindPlanComponent,
    ConfigurePlanComponent
],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

