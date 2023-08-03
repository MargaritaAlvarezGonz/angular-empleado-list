import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoLisComponent } from './components/empleado-lis/empleado-lis.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpleadoLisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
