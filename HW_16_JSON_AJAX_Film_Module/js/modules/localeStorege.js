class LocaleStorage{

SaveData(response,key){
  localStorage.setItem(key, JSON.stringify(response));
  
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

DeleteLocallStorege(key){
  if(key){
    localStorage.removeItem(key);
  }
  
 localStorage.clear();
}
}

export default{LocaleStorage};