import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BulbComponent } from './bulb/bulb.component';
import { SwitchComponent } from './switch/switch.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    BulbComponent,
    SwitchComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
