var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./Persona"], function (require, exports, Persona_1) {
    "use strict";
    exports.__esModule = true;
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente(nSS, nom, fn, sex) {
            var _this = _super.call(this, nSS, nom, fn) || this;
            _this.sexo = sex;
            return _this;
        }
        Paciente.prototype.getSexo = function () {
            return this.sexo;
        };
        return Paciente;
    }(Persona_1.Persona));
    exports.Paciente = Paciente;
});
