import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButonGroupModule } from './shared/components/yes-no-buton-group/yes-no-buton-group.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisabledControlModule } from './shared/directives/disabled-control/disabled-control/disabled-control.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    YesNoButonGroupModule,
    ReactiveFormsModule,
    FormsModule,
    DisabledControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
