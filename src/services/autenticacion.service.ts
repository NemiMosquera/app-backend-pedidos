import { /* inject, */ BindingScope, injectable} from '@loopback/core';
const generador = require("password-generator");
const cryptoJS  = require("crypto-js");
@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */


  generarclave(){
    const clave = generador(8, false);
    return clave;
  }
cifrarclave(clave:string) {
  const  clavecifrada = cryptoJS.MD5(clave).toString();
  return clavecifrada;}

}
