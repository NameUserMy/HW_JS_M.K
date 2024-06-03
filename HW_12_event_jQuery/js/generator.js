"use strict";
import * as digitalField from "./module/digitalOnly.js";
import * as generatorModule from "./module/generatorM.js";
let genM=new generatorModule.GeneratorString();
$(document).ready(() => {
   new digitalField.DigitalField($(`#countsimbol`));
    $(`#generate`).on(`click`,()=>{
        let choice=$(`[name=choice]`);
        $(`#result`).val(genM.GetStrRandom($(`#countsimbol`).val(),$(choice[0]).is(':checked'),$(choice[1]).is(':checked'),$(choice[2]).is(':checked')));
    });
});

