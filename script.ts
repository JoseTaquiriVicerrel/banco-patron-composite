
interface ISueldo{
  getSueldo(): number;
}
class Banco implements ISueldo{
  private empleados : Array<ISueldo>  = new Array<ISueldo>();
  public  getSueldo(): number {
    let sumador : number = 0;
    for (let index = 0; index < this.empleados.length; index++) {
      sumador += this.empleados[index].getSueldo();
      
    }
    return sumador;
  }

  public agregar( area : ISueldo) {
    this.empleados.push(area);
  }
}

class SectorCajas extends Banco {
  private cantidadCajeros: number = 0 ;
  public getCantidadCajeros() :number {
    return this.cantidadCajeros;
  }
  public setCantidadCajeros(cantidadCajeros: number) {
    this.cantidadCajeros = cantidadCajeros;
  }
}
class SectorContaduria extends Banco {
  private cantidadContadores: number = 0;

  public getCantidadContadores(): number {
    return this.cantidadContadores;
  }
  public setCantidadContadores(cantidadContadores: number) {
    this.cantidadContadores = cantidadContadores;
  }
}

class SectorRRHH extends Banco {
  private cantidadRRHH: number = 0;
  public getCantidadRRHH(): number {
    return this.cantidadRRHH;
  }
  public setCantidadRRHH(cantidadRRHH: number) {
    this.cantidadRRHH = cantidadRRHH;
  }
}

class SectorAdministrativo extends Banco {
  private cantidadAdministrativos: number = 0;
  
  public getCantidadAdministrativos(): number {
    return this.cantidadAdministrativos;
  }
  public setCantidadAdministrativos(cantidadAdministrativos: number) {
    this.cantidadAdministrativos = cantidadAdministrativos;
  }
}
class SectorGerencia extends Banco {
  private cantidadGerentes: number = 0;
  
  public getCantidadGerentes(): number {
    return this.cantidadGerentes;
  }
  public setCantidadGerentes(cantidadGerentes: number) {
    this.cantidadGerentes = cantidadGerentes;
  }
}

class Empleado implements ISueldo {
  private nombreCompleto:string;
  private cargo: string;
  private sueldo:number;
  constructor(nombreCompleto: string, cargo: string, sueldo: number) {
    this.nombreCompleto = nombreCompleto;
    this.cargo = cargo;
    this.sueldo = sueldo;
  }
  getSueldo(): number {
    return this.sueldo;
  }
}

let btnAceptar = document.getElementById("btnAceptar");
let cboArea = <HTMLSelectElement>document.getElementById("cboArea");
let nombre = <HTMLInputElement> document.getElementById("nombre");
let cargo = <HTMLInputElement> document.getElementById("cargo");
let sueldo = <HTMLInputElement>document.getElementById("sueldo");
let sueldoTotal = <HTMLInputElement>document.getElementById("SueldoTotal");

//badges
let bAdministracion = <HTMLElement> document.getElementById("bAdministracion");
let bContaduria = <HTMLElement> document.getElementById("bContaduria");
let bCaja = <HTMLElement> document.getElementById("bCaja");
let bRRHH = <HTMLElement> document.getElementById("bRRHH");
let bGerencia = <HTMLElement> document.getElementById("bGerencia");


let banco = new Banco();

let caja = new SectorCajas();
let gerencia = new SectorGerencia();
let RRHH = new SectorRRHH();
let administracion = new SectorAdministrativo();
let contaduria = new SectorContaduria();

banco.agregar(administracion);
banco.agregar(caja);
banco.agregar(gerencia);
banco.agregar(RRHH);
banco.agregar(contaduria);

btnAceptar.addEventListener("click", () => {
  let empleado = new Empleado( nombre.value, cargo.value, parseInt(sueldo.value));

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
  
})
// function limpiar() :void{
//   nombre.innerHTML = "";
//   cargo.innerHTML = "";
//   sueldo.value  = "0";
// }





