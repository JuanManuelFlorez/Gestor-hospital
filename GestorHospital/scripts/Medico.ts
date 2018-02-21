import {Persona} from './Persona';

export class Medico extends Persona {
    private numeroColegiado: number;

    constructor(nSS:number, nom:string, fn:Date, numC:number){
        super(nSS, nom, fn);
        this.numeroColegiado=numC;
    }
    getNumeroColegiado():number{
        return this.numeroColegiado;
    }

}