import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { HttpClient } from '@angular/common/http';
import { FormsDoc } from 'src/app/clases';

@Component({
  selector: 'app-registro-doc',
  templateUrl: './registro-doc.component.html',
  styleUrls: ['../css/estilo.css','../css/bootstrap.min.css']
})
export class RegistroDocComponent implements OnInit {
    RegistroDocModel= new FormsDoc("","","","","","")
  constructor(private myServiceService:MyServiceService, private http:HttpClient) { }
  

  ngOnInit(): void {
  }
   ValidacionFormsDoc(
     FormsModalidad:HTMLInputElement, 
     FormsTitulo:HTMLInputElement, 
     FormsDoc:HTMLInputElement, 
     FormsNumPaginas:HTMLInputElement, 
     FormsCampo:HTMLInputElement){
    /*Declaracion de los datos del formulario "Documento"*/
const modo = FormsModalidad
const titulo = FormsTitulo
const documento = FormsDoc
const paginas = FormsNumPaginas
const estudio = FormsCampo
/*Declaracion de las expresiones regulares*/
const letras= new RegExp('^[A-Za-z ][^\*]+$', 'i');
const numeros= new RegExp('[0-9]');
      /*Declaracion del mensaje que aparecera*/
var ok = true;
var msg = "Porfavor revisa los siguientes parametros:\n";

if(modo.value == "" || modo.value.length<5 || modo.value.length>25) {
    msg += "- Las modalidades deben tener entre 5 y 25 caracteres\n";
    ok= false;
}else
{
    if(!letras.test(modo.value)){
    msg += "- Modalidad de estudio no valido solo debes ingresar letras \n";
        ok=false;
    }
}

if(titulo.value == "" || titulo.value.length<10 || titulo.value.length>30) {
    msg += "- Los títulos deben tener entre 10 y 30 caracteres\n";
    ok= false;
}else
{
    if(!letras.test(titulo.value)){
    msg += "- Titulo ingresado no valido solo debes ingresar letras \n";
        ok=false;
    }
}


if(documento.value =="" ){
    msg += "- Ingresa el documento que deseas registrar\n";
    ok=false;
}

if(paginas.value == "" || paginas.value.length>5) {
    msg += "- Las páginas no pueden tener más de 5 dígitos\n";
    ok= false;
}else
{
    if(!numeros.test(paginas.value)){
    msg += "- Numero de paginas no valido, solo debes ingresar numeros \n";
        ok=false;
    }
}

if(estudio.value == "" || estudio.value.length<5 || estudio.value.length>30) {
    msg += "- Los campos de estudio deben tener entre 5 y 30 caracteres\n";
    ok= false;
}else
{
    if(!letras.test(estudio.value)){
    msg += "- Campo de estudio no valido solo debes ingresar letras \n";
        ok=false;
    }
}


if(!document.querySelector('input[name="titulo"]:checked')){
    
    msg += "- Debes ingresar uno de los titulos a obtener \n";
    ok=false;
}
if(ok==true){
    this.RegistroDoc();
}
if(ok == false)
    alert(msg);
  return ok;
}
RegistroDoc(){
    this.myServiceService.CargarDocumento(this.RegistroDocModel).subscribe({});
    this.myServiceService.RegistrarDocumento(this.RegistroDocModel).subscribe(resultado => {
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
