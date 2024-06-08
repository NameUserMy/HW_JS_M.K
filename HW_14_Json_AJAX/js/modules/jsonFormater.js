
class Formaterjson{

#sintaxReg;
#replaceReg;
#leftF;
#rightF;
#replaceLF;
#replaceRF;

constructor(){
this.#sintaxReg=/^\[{1}\s*(\{(\"[A-z0-9]+\"\:((\"[A-z0-9]+\"\,*\s*)|([A-z0-9]+,*\s*))?){1,}\}\,*\s*){1,}\]{1}\s*$/;
this.#replaceReg=/\s/g;
this.#leftF=/\{/g;
this.#rightF=/\}/g;
this.replaceLF="\n\t{\n\t\t";

}
 
CheckSintax(strJson){
console.log(this.#sintaxReg.test(strJson));
return this.#sintaxReg.test(strJson);
}

FormatingJson(strJson){
    let tempF=strJson.replaceAll(this.#replaceReg,"").trim();
    console.log(tempF);
    tempF=strJson.replaceAll(this.#leftF,"\n\t{\n\t\t");
    let tempS=tempF.replaceAll(this.#rightF,"\n\t}");
    let tempLast=tempS.replace("]","\n\]");
    let finish=tempLast.replaceAll(",",",\n\t\t");
    console.log(`${1}`);
console.log(finish)
return finish;
}

}
export default{Formaterjson}