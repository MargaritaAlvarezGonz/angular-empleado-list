import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-lis',
  templateUrl: './empleado-lis.component.html',
  styleUrls: ['./empleado-lis.component.css']
})
export class EmpleadoLisComponent implements OnInit {
  listEmpleados: Empleado[]=[
    {legajo: 1, nombre: 'Margarita', apellido: 'Alvarez', sexo: 'Femenino', salario: 2500 },
    {legajo: 2, nombre: 'Yola', apellido: 'González', sexo: 'Femenino', salario: 2500 },
    {legajo: 3, nombre: 'Kike', apellido: 'Alvarez', sexo: 'Masculino', salario: 2500 },
    {legajo: 4, nombre: 'Airo', apellido: 'López', sexo: 'Masculino', salario: 2500 },
    {legajo: 5, nombre: 'Ajax', apellido: 'López', sexo: 'Masculino', salario: 1500 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
