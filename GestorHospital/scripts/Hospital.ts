import {Persona} from './Persona';
import {Medico} from './Medico';
import {Paciente} from './Paciente';
import {Ingreso} from './Ingreso';

class Hospital {
    pacientes: Array<Paciente>=[];
    ingresos: Array<Ingreso>=[];
    medicos: Array<Medico>=[];

    getPacientes(){
        return this.pacientes;
    }

    nuevoPaciente(nSS:number, nom:string, fn:Date, sex:string){
        var paciente = new Paciente (nSS, nom, fn, sex);
        this.pacientes.push(paciente);
    }
    nuevoIngreso(nSS:number, sint:Array<string>, diag:string, estado:string, p:Paciente){
        var ingreso = new Ingreso(nSS, sint, diag, estado, p);
        this.ingresos.push(ingreso);
    }
    nuevoMedico(nSS:number, nom:string, fn:Date , numC:number){
        var medico = new Medico(nSS, nom, fn, numC);
        this.medicos.push(medico);
    }
    PosixNum(NumSS: number):number {
        var x: number;
        for (var i=0;i<this.pacientes.length;i++) {
            if (this.pacientes[i].getnumberSS()==NumSS) {
                x=i;
            }
        }
        return x;
    }
    ListaIngresosPendiente(){
        for (var i=0; i<hospi.ingresos.length; i++){
            if (hospi.ingresos[i].getEstado()=="Pendiente"){
                var fechaActual:Date = new Date();
                var año = fechaActual.getFullYear();
                var mes = fechaActual.getMonth()+1;
                var dia = fechaActual.getDate();
                var fechaNacimiendo:Date = new Date(this.ingresos[i].getPp().getFecha());
                var diff= (fechaActual.getTime()-fechaNacimiendo.getTime());
                var edad= Math.floor(diff/(1000 * 3600 * 24*365));
                alert("Nombre:" + this.ingresos[i].getPp().getNombre() + 
                       "\nSexo: " + this.ingresos[i].getPp().getSexo()  + 
                       "\nEdad: " + edad +
                       "\nFecha: " + año + "-" + mes + "-" + dia +
                       "\nCodigo ingreso:"+this.ingresos[i].getCodigo()+
                       "\nHora ingreso: " + fechaActual.getHours()+":"+fechaActual.getMinutes());
            }
        }
    }
}
var hospi = new Hospital();

function Medicos(){
    hospi.nuevoMedico(12345, "Raul", new Date(1977,3,12), 30);
    hospi.nuevoMedico(56789, "David", new Date(1980,2,2), 40);
    hospi.nuevoMedico(10111, "Jordi", new Date(1975,1,2), 50);
    hospi.nuevoMedico(13141, "Fernando", new Date(1973,10,12), 60);
}

function newPaciente(){
    var numSS:number= parseInt(prompt("Numero seguridad social: "));
    var nom:string= prompt("Nombre: ");
    var sex:string = prompt("Sexo: ");
    var f:string = prompt("Fecha nacimiento(YYYY-MM-D): ");
    var ffinal = f.split("-");
    var fechaFinal = new Date(parseInt(ffinal[0]), parseInt(ffinal[1]), parseInt(ffinal[2]));
    hospi.nuevoPaciente(numSS, nom, fechaFinal,  sex);
}

function newIngreso(){
    var sintomas: Array<string> =[];
    var ok = true;
    var numSS:number= parseInt(prompt("Numero seguridad social: "));
    while(ok){
        var sin:string = prompt("Sintoma('esc' para salir):");
        if (sin=="esc"){
            ok = false;
        }else{
            sintomas.push(sin);
        }
    }
    var estado:string = "Pendiente";
    hospi.nuevoIngreso(numSS, sintomas, "diagnostico", estado, hospi.getPacientes()[hospi.PosixNum(numSS)]);

}
function ListaIngresosPendiente(){
    hospi.ListaIngresosPendiente();
}

function AsignarIngresoMedico(){
    var codigoIngres:number = parseInt(prompt("Codigo ingreso: "));
    var numColegiat:number = parseInt(prompt("Numero colegiado: "))
    var ok:Boolean=false;

        for (var i=0; i<hospi.ingresos.length; i++){
            if (codigoIngres==hospi.ingresos[i].getCodigo()){
                ok=true;
                var x=i;
            }
        }
        if (ok){
        for(var i=0; i<hospi.medicos.length; i++){
            if(numColegiat==hospi.medicos[i].getNumeroColegiado()){
                hospi.ingresos[x].setMedic(hospi.medicos[i]);
                hospi.ingresos[x].setEstado("En curso")
                alert("medico asignado");
            }
        }
        } 
}
function DiagnosticarIngreso(){
    var codigoIngres:number = parseInt(prompt("Codigo ingreso: "));
    var diagnostico:string = prompt("Diagnostico: ");
    for (var i=0; i<hospi.ingresos.length; i++){
        if (codigoIngres==hospi.ingresos[i].getCodigo()){
            hospi.ingresos[i].setDiag(diagnostico);
        }
    }
}
function DarAlta(){
    var codigoIngres:number = parseInt(prompt("Codigo ingreso: "));

    for (var i=0; i<hospi.ingresos.length; i++){
        
        if (codigoIngres==hospi.ingresos[i].getCodigo()){
            if (hospi.ingresos[i].getDiag()!="diagnostico"){
                hospi.ingresos[i].setEstado("Alta");
                alert("Alta dada");
            }
            else if (hospi.ingresos[i].getEstado()=="pendiente" || hospi.ingresos[i].getEstado()=="En curso" ){
                alert("Aun no esta diagnosticado");
            }         
        }
    }
}
function ConsultarHistorialPaciente(){
    var numSS:number = parseInt(prompt("Numero de la seguridad social:"));

    for (var i=0; i<hospi.ingresos.length; i++){
        var fecha = new Date(hospi.ingresos[i].getFechaHora())
        if (numSS==hospi.ingresos[i].getNumSS()){
            alert(              
                "\nFecha:" + fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate()+
                "\nSimptomas:"  + hospi.ingresos[i].getSintomas()+
                "\nDiagnostico:" + hospi.ingresos[i].getDiag()
            );
        }
    }
}
function ListadoMedicos(){
    for(var i=0; i<hospi.medicos.length; i++){
        var fecha = new Date(hospi.medicos[i].getFecha())
        alert("Nombre" + hospi.medicos[i].getNombre()+
            "\nFecha de nacimiento:" + fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDate()+
            "\nNumero SS:"+ hospi.medicos[i].getnumberSS()+
            "\nNumero colegiado:" + hospi.medicos[i].getNumeroColegiado()
        );
    }
}

function BuscarPaciente(){
    var nomP:string =  prompt("Nombre paciente: ");
    for (var i=0; i<hospi.pacientes.length; i++){
            var pacient = hospi.pacientes[i].getNombre();
            if (pacient.indexOf(nomP)>=0){
                var fecha = new Date(hospi.pacientes[i].getFecha())
                alert("Nombre:"+ hospi.pacientes[i].getNombre()+
                    "\nNumero SS:" + hospi.pacientes[i].getnumberSS()+
                    "\nSexo:" + hospi.pacientes[i].getSexo()+
                    "\nFecha de nacimiento:" + fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDate()
                );
            }
    }
}



Medicos();
document.getElementById("newPaciente").onclick=newPaciente;
document.getElementById("newIngreso").onclick=newIngreso;
document.getElementById("ListaIngresosPendiente").onclick=ListaIngresosPendiente;
document.getElementById("AsignarIngresoMedico").onclick=AsignarIngresoMedico;
document.getElementById("DiagnosticarIngreso").onclick=DiagnosticarIngreso;
document.getElementById("DarAlta").onclick=DarAlta;
document.getElementById("ConsultarHistorialPaciente").onclick=ConsultarHistorialPaciente;
document.getElementById("ListadoMedicos").onclick=ListadoMedicos;
document.getElementById("BuscarPaciente").onclick=BuscarPaciente;





