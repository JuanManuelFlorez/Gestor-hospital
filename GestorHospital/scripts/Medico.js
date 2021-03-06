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
    var Medico = /** @class */ (function (_super) {
        __extends(Medico, _super);
        function Medico(nSS, nom, fn, numC) {
            var _this = _super.call(this, nSS, nom, fn) || this;
            _this.numeroColegiado = numC;
            return _this;
        }
        Medico.prototype.getNumeroColegiado = function () {
            return this.numeroColegiado;
        };
        return Medico;
    }(Persona_1.Persona));
    exports.Medico = Medico;
});
