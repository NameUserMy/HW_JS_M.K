
"use strict";
let sizeR=9;
let sizeC=9;
let td1="td1";
let td2="td2";

function chessField(sizeR,sizeC){

    document.write('<table id="3" class="field">');

    for (let i=1;i<sizeR;i++){
        document.write('<tr>');
        for(let j=1;j<sizeC;j++){
            (i&1 ?(j&1 ? document.write('<td class="'+td2+'"></td>') : document.write('<td class="'+td1+'"></td>')): 
                    (j&1 ? document.write('<td class="'+td1+'"></td>') : document.write('<td class="'+td2+'"></td>')))
        }
        
        document.write('</tr>');
    }
    document.write('</table>');
}

chessField(sizeR,sizeC);

document.write(' <a href="index.html">Back</a>');



