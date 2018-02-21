define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Ingreso = /** @class */ (function () {
        function Ingreso(numSS, sint, diag, estado, p) {
            this.sintomas = [];
            this.numSS = numSS;
            this.codigo = Ingreso.aux++;
            this.sintomas = sint;
            this.fechaHora = new Date();
            this.diag = diag;
            this.estado = estado;
            this.pp = p;
        }
        Ingreso.prototype.getNumSS = function () {
            return this.numSS;
        };
        Ingreso.prototype.getCodigo = function () {
            return this.codigo;
        };
        Ingreso.prototype.getFechaHora = function () {
            return this.fechaHora;
        };
        Ingreso.prototype.getSintomas = function () {
            return this.sintomas;
        };
        Ingreso.prototype.getEstado = function () {
            return this.estado;
        };
        Ingreso.prototype.getDiag = function () {
            return this.diag;
        };
        Ingreso.prototype.getPp = function () {
            return this.pp;
        };
        Ingreso.prototype.getMedic = function () {
            return this.medic;
        };
        Ingreso.prototype.setEstado = function (newEstado) {
            this.estado = newEstado;
        };
        Ingreso.prototype.setDiag = function (newDiag) {
            this.diag = newDiag;
        };
        Ingreso.prototype.setMedic = function (newMedic) {
            this.medic = newMedic;
        };
        Ingreso.aux = 1;
        return Ingreso;
    }());
    exports.Ingreso = Ingreso;
});
