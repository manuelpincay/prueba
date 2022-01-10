export class Clases {
}
export class Usuario{
    constructor(
        public correo:any,
        public contrasena:any
    ){}
}

export class Registro{
    constructor(
        public nombres: string,
        public apellidos: string,
        public correo:string,
        public contrasena:string
    ){}
}

export class FormsEst{
    constructor(
        public nombres: string,
        public apellidos: string,
        public email:string,
        public telf:string,
        public facul: string,
        public carrera:string,
        public semestre:string
    ){}
}

export class FormsDoc{
    constructor(
        public modalidad: string,
        public titulo: string,
        public pags:string,
        public campo:string,
        public grado: string,
        public archivo:string,
    ){}
}

export class FormsMaes{
    constructor(
        public nombres: string,
        public apellidos: string,
        public asignatura: string,
        public email:string,
        public telf:string,
        public facul: string,
        public titulos:string
    ){}
}

export class Comentario{
    constructor(
        public nombres: string,
        public correo: string,
        public mensaje: string,
    ){}
}
