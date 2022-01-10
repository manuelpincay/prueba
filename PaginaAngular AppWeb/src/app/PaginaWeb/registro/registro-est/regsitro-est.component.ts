import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { HttpClient } from '@angular/common/http';
import { FormsEst } from 'src/app/clases';



@Component({
  selector: 'app-regsitro-est',
  templateUrl: './regsitro-est.component.html',
  styleUrls: ['../css/estilo.css','../css/bootstrap.min.css']
})
export class RegsitroEstComponent implements OnInit {
    RegistroEstModel= new FormsEst("","","","","","","");
  constructor(private myServiceService:MyServiceService, private http:HttpClient) { }

  ngOnInit(): void {
  }

  ValidacionFormsEst(
    FormsNombre:HTMLInputElement, 
    FormsApellido:HTMLInputElement, 
    Formsemail:HTMLInputElement, 
    FormsTelefono:HTMLInputElement,
    FormsFacultad:HTMLInputElement, 
    FormsCarrera:HTMLInputElement,
    FormsSemestre:HTMLInputElement){
/*Declaracion de los datos del formulario "Estudiante"*/
const nombre = FormsNombre
const apellido =FormsApellido
const correo = Formsemail
const telefono = FormsTelefono
const facultad = FormsFacultad
const carrera = FormsCarrera
const semestre= FormsSemestre
/*Declaracion de las expresiones regulares*/
const letras= new RegExp('^[A-Za-z ][^\*]+$', 'i');
const numeros= new RegExp('[0-9]');
const email = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');
      /*Declaracion del mensaje que aparecera*/
var ok = true;
var msg = "Porfavor revisa los siguientes parametros:\n";


if(nombre.value == "" || nombre.value.length<5 || nombre.value.length>50) {
    msg += "- Los nombres deben tener entre 5 y 50 caracteres\n";
    ok= false;
}else
{
    if(!letras.test(nombre.value)){
    msg += "- Nombre no valido solo debes ingresar letras \n";
        ok=false;
    }
}

if(apellido.value == "" || apellido.value.length<5 || apellido.value.length>50) {
    msg += "- Los apellidos deben tener entre 5 y 50 caracteres\n";
    ok= false;
}else
{
    if(!letras.test(apellido.value)){
    msg += "- Apellido no valido solo debes ingresar letras \n";
        ok=false;
    }
}

if(correo.value=="") {
msg += "- No haz ingresado un correo\n";
ok= false;
}else
{
if(!email.test(correo.value)){
    msg += "- Correo no valido ejemplos: Example@gmail.com \n";
    ok=false;
}
}

if(telefono.value == "" || telefono.value.length!=10) {
    msg += "- El número telefónico debe tener 10 dígitos\n";
    ok= false;
}else
{
    if(!numeros.test(telefono.value)){
    msg += "- Teléfono no válido, debe ser un valor numérico \n";
        ok=false;
    }
}

if(facultad.value == "" || facultad.value.length<10|| facultad.value.length>50) {
    msg += "- Las facultades deben tener entre 10 y 50 caracteres\n";
    ok= false;
}else
{
    if(!letras.test(facultad.value)){
    msg += "- Facultad no valida solo debes ingresar letras \n";
        ok=false;
    }
}

if(carrera.value == "" || carrera.value.length<10|| carrera.value.length>50) {
    msg += "- Las carreras deben tener entre 10 y 50 caracteres\n";
    ok= false;
}else
{
    if(!letras.test(carrera.value)){
    msg += "- Carrera no valida solo debes ingresar letras \n";
        ok=false;
    }
}
if(!document.querySelector('input[name="semestre"]:checked')){
    
    msg += "- Debes ingresar uno de los semestres en el cual estes cursando \n";
    ok=false;
}
if(ok==true){
    this.registro();
}

if(ok == false)
        alert(msg);
    return ok;
  }
  registro(){
    this.myServiceService.RegistrarEstudiante(this.RegistroEstModel).subscribe(resultado => {
        if(resultado.length== 18){
            alert("Registro de formulario de estudiante exitoso!! por favor continua con el resto de formulario");
            
              window.location.href="/registro-doc";
              
            }
            else if(resultado.length==19){
              alert("Los datos que ingresaste no se guaradaron con exito, por favor intentalo de nuevo");
              
              window.location.href="/registro-est";
            }
      })
      
  }
}
