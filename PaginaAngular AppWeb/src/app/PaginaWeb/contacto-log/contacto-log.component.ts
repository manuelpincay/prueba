import { Component, OnInit } from '@angular/core';
import listadoHorario from '../../../assets/JSON/horario.json'
import { MyServiceService } from 'src/app/my-service.service';
import { HttpClient } from '@angular/common/http';
import { Comentario } from 'src/app/clases';
@Component({
  selector: 'app-contacto-log',
  templateUrl: './contacto-log.component.html',
})
export class ContactoLogComponent implements OnInit {
  horario: any =listadoHorario;
  ComentarioModel = new Comentario("", "","")
  constructor(private myServiceService:MyServiceService, private http:HttpClient) { }

  ngOnInit(): void {
  }


  ValidacionComent( name:HTMLInputElement, correoElec:HTMLInputElement, message:HTMLTextAreaElement){
    /*Declaracion de los datos del formulario "Documento"*/
    const nombre = name
    const correo = correoElec
    const mensaje = message
    /*Declaracion de las expresiones regulares*/
    const letras= new RegExp('^[A-Za-z ][^\*]+$', 'i');
    const email = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');
    /*Declaracion del mensaje que aparecera*/
    var ok = true;
    var msg = "Porfavor revisa los siguientes parametros:\n";
  

    if(nombre.value == "" || nombre.value.length>100) {
    msg += "- Los nombres deben tener máximo 100 caracteres\n";
    ok= false;
    }else
    {
        if(!letras.test(nombre.value)){
        msg += "- Nombre no valido solo debes ingresar letras \n";
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


    if(mensaje.value == "" || mensaje.value.length>250) {
        msg += "- Los mensajes deben tener un máximo de 250 caracteres\n";
        ok= false;
    }else
    {
        if(!letras.test(mensaje.value)){
        msg += "- Mensaje no valida solo debes ingresar letras \n";
            ok=false;
        }
    }
    if(ok==true){
        this.RegistroComentario();
    }
    if(ok == false)
        alert(msg);
      return ok;
    }
    RegistroComentario(){
        this.myServiceService.RegistrarCometario(this.ComentarioModel).subscribe(resultado => {
              if(resultado.length== 18){
            alert("Mensaje enviado de forma exitosa!!");
              window.location.reload();
            }
            else if(resultado.length==19){
              alert("Ha ocurrido un error intente nuevamente");
              window.location.reload();
            }
        })
        
    }
}
