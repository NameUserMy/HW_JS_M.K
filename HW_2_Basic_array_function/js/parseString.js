
function urlParse(urlParse,protokol,host,path,fileName,requestString){

const result1=urlParse.value.split('//');
const ttr=result1[1].split('?');

protokol.value=result1[0];
path.value=ttr[0].slice(ttr[0].indexOf("/"),ttr[0].lastIndexOf("/")+1);
host.value=ttr[0].slice(0,ttr[0].indexOf("/"))
fileName.value=ttr[0].slice(ttr[0].lastIndexOf("/")+1);
requestString.value=ttr[1];

}

