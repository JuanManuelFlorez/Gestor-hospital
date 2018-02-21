export class Persona{
    private numberSS: number;
    private nombre: string;
    private fechaNacimiento: Date;

    constructor(nSS:number, nom:string, fn:Date){
        this.numberSS=nSS;
        this.nombre=nom;
        this.fechaNacimiento=fn;
    }
    getnumberSS():number{
        return this.numberSS;
    }
    getNombre():string{
        return this.nombre;
    }
    getFecha():Date{
        return this.fechaNacimiento;
    }


}