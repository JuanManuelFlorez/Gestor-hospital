import {Persona} from './Persona';

export class Paciente extends Persona{

    private sexo:string;
    constructor(nSS:number, nom:string, fn:Date, sex:string){
        super(nSS, nom, fn);
        this.sexo=sex;
    }
    getSexo():string{
        return this.sexo;
    }  
    
}