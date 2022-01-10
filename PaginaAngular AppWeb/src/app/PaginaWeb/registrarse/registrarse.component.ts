import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { HttpClient } from '@angular/common/http';
import { Registro } from 'src/app/clases';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['../../../assets/css/signin.css', '../../../assets/css/bootstrap2.min.css']
})
export class RegistrarseComponent implements OnInit {

  constructor( private myServiceService:MyServiceService, private http:HttpClient) { }

  ngOnInit(): void {}
  RegistroUserModel = new Registro("","","","");
  ValidacionRegistro(
    nombreuser:HTMLInputElement, 
    apellidosuser:HTMLInputElement, 
    emailuser:HTMLInputElement, 
    pass:HTMLInputElement, 
    rpass:HTMLInputElement){
           /*Declaracion de los datos del formulario*/
           const nombre = nombreuser
           const apellido =apellidosuser
           const correo = emailuser
           const contra = pass
           const contra2 = rpass
                   /*Declaracion de las expresiones regulares*/
           const letras= new RegExp('^[A-Z]+$', 'i');
           const email = new RegExp('^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$','i');
                   /*Declaracion del mensaje que aparecera*/
           var ok = true;
           var msg = "Debes completar contenido de los campos:\n";
         
           if(!letras.test(nombre.value )){
               msg += "- nombre no valido solo debes ingresar letras \n";
               ok=false;
           }
           else{
             if(nombre.valueAsNumber>10){
              msg += "debes ingresar un maximo de 10 caracteres para el campo nombre\n";
              ok=false;
             }
           }
           if(!letras.test(apellido.value )){
               msg += "- apellido no valido solo debes ingresar letras \n";
               ok=false;
           }
           else{
            if(apellido.valueAsNumber>10){
             msg += "debes ingresar un maximo de 10 caracteres para el campo apellido\n";
             ok=false;
            }
          }
           if(correo.value=="") {
             msg += "No haz ingresado un correo\n";
             ok= false;
           }else
           {
             if(email.test(correo.value)){
               msg += "- Correo no valido ejemplos: Example@gmail.com\n";
                 ok=false;
             }
           }
           if(contra.value!=contra2.value){
               msg += "Las contraseñas no son iguales";
               ok= false;
           }
           if(ok== true){
             this.RegistroUsuario();
           }
           if(ok == false)
                     alert(msg);
                   return ok;
                  }
            RegistroUsuario(){
                this.myServiceService.RegistrarUsuario(this.RegistroUserModel).subscribe(resultado => {
                      
                        if(resultado.length== 18){
                      alert("Registro de cuenta exitosa!! por favor inicia sesion");
                      
                        window.location.href="/inicio-sesion";
                        
                      }
                      else if(resultado.length==19){
                        alert("los datos que intentas registrar ya se encuentran registrados, porfavor inicia sesion o cambia los datos de registro");
                        
                        window.location.href="/registrarse";
                      }
                })
                    
            }
}
