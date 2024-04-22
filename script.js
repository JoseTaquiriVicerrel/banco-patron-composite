var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Banco = /** @class */ (function () {
    function Banco() {
        this.empleados = new Array();
    }
    Banco.prototype.getSueldo = function () {
        var sumador = 0;
        for (var index = 0; index < this.empleados.length; index++) {
            sumador += this.empleados[index].getSueldo();
        }
        return sumador;
    };
    Banco.prototype.agregar = function (area) {
        this.empleados.push(area);
    };
    return Banco;
}());
var SectorCajas = /** @class */ (function (_super) {
    __extends(SectorCajas, _super);
    function SectorCajas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cantidadCajeros = 0;
        return _this;
    }
    SectorCajas.prototype.getCantidadCajeros = function () {
        return this.cantidadCajeros;
    };
    SectorCajas.prototype.setCantidadCajeros = function (cantidadCajeros) {
        this.cantidadCajeros = cantidadCajeros;
    };
    return SectorCajas;
}(Banco));
var SectorContaduria = /** @class */ (function (_super) {
    __extends(SectorContaduria, _super);
    function SectorContaduria() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cantidadContadores = 0;
        return _this;
    }
    SectorContaduria.prototype.getCantidadContadores = function () {
        return this.cantidadContadores;
    };
    SectorContaduria.prototype.setCantidadContadores = function (cantidadContadores) {
        this.cantidadContadores = cantidadContadores;
    };
    return SectorContaduria;
}(Banco));
var SectorRRHH = /** @class */ (function (_super) {
    __extends(SectorRRHH, _super);
    function SectorRRHH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cantidadRRHH = 0;
        return _this;
    }
    SectorRRHH.prototype.getCantidadRRHH = function () {
        return this.cantidadRRHH;
    };
    SectorRRHH.prototype.setCantidadRRHH = function (cantidadRRHH) {
        this.cantidadRRHH = cantidadRRHH;
    };
    return SectorRRHH;
}(Banco));
var SectorAdministrativo = /** @class */ (function (_super) {
    __extends(SectorAdministrativo, _super);
    function SectorAdministrativo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cantidadAdministrativos = 0;
        return _this;
    }
    SectorAdministrativo.prototype.getCantidadAdministrativos = function () {
        return this.cantidadAdministrativos;
    };
    SectorAdministrativo.prototype.setCantidadAdministrativos = function (cantidadAdministrativos) {
        this.cantidadAdministrativos = cantidadAdministrativos;
    };
    return SectorAdministrativo;
}(Banco));
var SectorGerencia = /** @class */ (function (_super) {
    __extends(SectorGerencia, _super);
    function SectorGerencia() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cantidadGerentes = 0;
        return _this;
    }
    SectorGerencia.prototype.getCantidadGerentes = function () {
        return this.cantidadGerentes;
    };
    SectorGerencia.prototype.setCantidadGerentes = function (cantidadGerentes) {
        this.cantidadGerentes = cantidadGerentes;
    };
    return SectorGerencia;
}(Banco));
var Empleado = /** @class */ (function () {
    function Empleado(nombreCompleto, cargo, sueldo) {
        this.nombreCompleto = nombreCompleto;
        this.cargo = cargo;
        this.sueldo = sueldo;
    }
    Empleado.prototype.getSueldo = function () {
        return this.sueldo;
    };
    return Empleado;
}());
var btnAceptar = document.getElementById("btnAceptar");
var cboArea = document.getElementById("cboArea");
var nombre = document.getElementById("nombre");
var cargo = document.getElementById("cargo");
var sueldo = document.getElementById("sueldo");
var sueldoTotal = document.getElementById("SueldoTotal");
//badges
var bAdministracion = document.getElementById("bAdministracion");
var bContaduria = document.getElementById("bContaduria");
var bCaja = document.getElementById("bCaja");
var bRRHH = document.getElementById("bRRHH");
var bGerencia = document.getElementById("bGerencia");
var banco = new Banco();
var caja = new SectorCajas();
var gerencia = new SectorGerencia();
var RRHH = new SectorRRHH();
var administracion = new SectorAdministrativo();
var contaduria = new SectorContaduria();
banco.agregar(administracion);
banco.agregar(caja);
banco.agregar(gerencia);
banco.agregar(RRHH);
banco.agregar(contaduria);
btnAceptar.addEventListener("click", function () {
    var empleado = new Empleado(nombre.value, cargo.value, parseInt(sueldo.value));
    switch (cboArea.value) {
        case "administracion":
            administracion.agregar(empleado);
            administracion.setCantidadAdministrativos(administracion.getCantidadAdministrativos() + 1);
            bAdministracion.innerHTML = String(administracion.getSueldo());
            break;
        case "contaduria":
            contaduria.agregar(empleado);
            contaduria.setCantidadContadores(contaduria.getCantidadContadores() + 1);
            bContaduria.innerHTML = String(contaduria.getSueldo());
            break;
        case "caja":
            caja.agregar(empleado);
            caja.setCantidadCajeros(caja.getCantidadCajeros() + 1);
            bCaja.innerHTML = String(caja.getSueldo());
            break;
        case "gerencia":
            gerencia.agregar(empleado);
            gerencia.setCantidadGerentes(gerencia.getCantidadGerentes() + 1);
            bGerencia.innerHTML = String(gerencia.getSueldo());
            break;
        case "RRHH":
            RRHH.agregar(empleado);
            RRHH.setCantidadRRHH(RRHH.getCantidadRRHH() + 1);
            bRRHH.innerHTML = String(RRHH.getSueldo());
            break;
    }
    sueldoTotal.value = String(banco.getSueldo());
});
// function limpiar() :void{
//   nombre.innerHTML = "";
//   cargo.innerHTML = "";
//   sueldo.value  = "0";
// }
