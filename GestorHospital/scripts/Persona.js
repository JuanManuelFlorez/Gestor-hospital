define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Persona = /** @class */ (function () {
        function Persona(nSS, nom, fn) {
            this.numberSS = nSS;
            this.nombre = nom;
            this.fechaNacimiento = fn;
        }
        Persona.prototype.getnumberSS = function () {
            return this.numberSS;
        };
        Persona.prototype.getNombre = function () {
            return this.nombre;
        };
        Persona.prototype.getFecha = function () {
            return this.fechaNacimiento;
        };
        return Persona;
    }());
    exports.Persona = Persona;
});
