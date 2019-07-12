import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { FloatingActionButtonComponent } from './floating-action-button/floating-action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    ButtonComponent,
    FloatingActionButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
