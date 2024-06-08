class LocaleStorage{


SaveUser(ifoReg,key){
  let value=JSON.stringify(ifoReg.serializeArray() );
  localStorage.setItem(key, value);
  window.location.href = "detailsUser.html";
};

GetData(key){
  const data= localStorage[key];
  return JSON.parse(data);
}

IsData(Key){
  if(localStorage[Key]){

    return true;
  }
  return false;
}

DeleteLocallStorege(){
 localStorage.clear();
}


}

export default{LocaleStorage};