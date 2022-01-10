import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/clases';



@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['../../../assets/css/signin.css', '../../../assets/css/bootstrap2.min.css']
})



export class InicioSesionComponent implements OnInit {


  constructor(private myServiceService:MyServiceService, private http:HttpClient) { }

  ngOnInit(): void {
  }

  

  UsuarioModel = new Usuario("", "")
  validacionLogin(correoElec:HTMLInputElement, password:HTMLInputElement){
  /*Declaracion de los datos del formulario*/
  const correo = correoElec
  const contra = password
          /*Declaracion de las expresiones regulares*/
  const email = new RegExp('^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$','i');
           /*Declaracion del mensaje que aparecera*/
  var ok = true;
  var msg = "Debes completar contenido de los campos:\n";
  
    if(correo.value=="") {
      msg += "- No haz ingresado un correo\n";
      ok= false;
    }else
    {
      if(email.test(correo.value)){
        msg += "- Correo no valido ejemplos: Example@gmail.com\n";
        ok=false;
      }
    }
    
    if(contra.value==""){
      msg += "- No haz ingresado una contraseña\n";
      ok= false;
    }
    if(ok==true){
      this.Validacion()
    }
    
    if(ok == false)
            alert(msg);
          return ok;
        }
  

        Validacion() {
          this.myServiceService.ValidarInicio(this.UsuarioModel).subscribe(resultado => {
            console.log('mensaje de prueba',resultado.length)
              if(resultado.length== 18){
            alert("Inicio de sesion exitoso!!");
            
              window.location.href="/inicio-log";
              
            }
            else if(resultado.length==19){
              alert("El correo que acabas de ingresar es incorrecto o no se encuentra registrado, por favor intentalo de nuevo");
              
              window.location.href="/inicio-sesion";
              
            }
          })
          
      }


      
}
