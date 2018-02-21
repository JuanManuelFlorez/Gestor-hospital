import {Paciente} from './Paciente';
import {Medico} from './Medico';
export class Ingreso {

    private numSS:number;
    private codigo:number;
    static aux:number =1;
    private fechaHora: Date;
    private sintomas: Array<string>=[];
    private diag:string;
    private estado:string;
    private pp:Paciente;
    private medic:Medico;

    constructor(numSS:number, sint:Array<string>, diag:string, estado:string, p:Paciente){
        this.numSS=numSS;
        this.codigo=Ingreso.aux++;
        this.sintomas=sint;
        this.fechaHora= new Date();
        this.diag=diag;
        this.estado=estado;
        this.pp=p;
    }
    getNumSS():number{
        return this.numSS;
    }
    getCodigo():number{
        return this.codigo;
    }
    getFechaHora():Date{
        return this.fechaHora;
    }
    getSintomas():Array<string>{
        return this.sintomas;
    }
    getEstado():string{
        return this.estado;
    }
    getDiag():string{
        return this.diag;
    }
    getPp():Paciente{
        return this.pp;
    }
    getMedic():Medico{
        return this.medic;
    } 
    setEstado(newEstado:string){
        this.estado=newEstado;
    }
    setDiag(newDiag:string){
        this.diag=newDiag;
    }
    setMedic(newMedic:Medico){
        this.medic=newMedic;
    }
}