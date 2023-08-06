import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoLisComponent } from './components/empleado-lis/empleado-lis.component';
import { FormsModule } from '@angular/forms';
import { CountEmpleadosComponent } from './components/empleado-lis/count-empleados/count-empleados.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpleadoLisComponent,
    CountEmpleadosComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
